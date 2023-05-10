const cron = require('node-cron');
const admin = require("firebase-admin");
const serviceAccount = require("./cowcardfile-b31b6-firebase-adminsdk-mzc76-ac2b255339.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const usersCollection = admin.firestore().collection("users");

function farmsCollection(userId) {
  return usersCollection.doc(userId).collection("farms");
}

function cowsCollection(userId, farmId) {
  return farmsCollection(userId).doc(farmId).collection("cows");
}

function logsCollection(userId, farmId, cowId) {
  return cowsCollection(userId, farmId).doc(cowId).collection("logs");
}

function compareInseminationDates(a, b) {
  const inseminationA = new Date(a.insemination.toDate());
  const inseminationB = new Date(b.insemination.toDate());

  if (inseminationA < inseminationB) return -1;
  if (inseminationA > inseminationB) return 1;
  return 0;
}

async function sendNotifications() {
  let usersData = [];
  await usersCollection.get().then(snapshot => snapshot.forEach(userDoc => usersData.push(userDoc.data())));

  usersData.forEach(async userData => {
    let farmsData = [];
    await farmsCollection(userData.id).get().then(snapshot => snapshot.forEach(farmDoc => farmsData.push(farmDoc.data())));

    for (const farmData of farmsData) {
      let cowsData = [];
      await cowsCollection(userData.id, farmData.id).orderBy("number", "asc").get().then(snapshot => snapshot.forEach(cowDoc => cowsData.push(cowDoc.data())));
    
      let notiBody = {};

      for (const cowData of cowsData) {
        await logsCollection(userData.id, farmData.id, cowData.id).get().then(snapshot => {
          let logs = [];

          if (snapshot.docs.length) {
            snapshot.docs.forEach(logDoc => {
              logs.push(logDoc.data());
            });
  
            logs.slice().sort(compareInseminationDates);
            let latestLog = logs.at(-1);
            
            let now = new Date();
            now.setHours(0, 0, 0, 0);
            let insemination = latestLog.insemination.toDate();
            let conception = new Date(insemination.getFullYear(), insemination.getMonth() + userData.conceptionDuration, insemination.getDate());
            let dryPeriod = new Date(insemination.getFullYear(), insemination.getMonth() + userData.conceptionDuration + userData.dryPeriodDuration, insemination.getDate());
  
            if ((now >= conception) && (now < dryPeriod) && (latestLog.conception == false) && (latestLog.dryPeriod == false)) {
              notiBody[cowData.number] = "Conception";
            } else if ((now > conception) && (now >= dryPeriod) && (latestLog.conception == true) && (latestLog.dryPeriod == false)) {
              notiBody[cowData.number] = "Dry Period";
            } else if ((now > conception) && (now >= dryPeriod) && (latestLog.conception == false) && (latestLog.dryPeriod == false)) {
              notiBody[cowData.number] = "Conception + Dry Period";
            }
          }
        });
      }

      let body = "";

      if (Object.keys(notiBody).length > 0) {
        cowsData.map(cowData => {
          if (notiBody[cowData.number] != null)
            body += `${cowData.number} : ${notiBody[cowData.number]}\n`;
        });
      }

      if (body != "") {
        admin.messaging().send(
          {
            "token": userData.deviceToken,
            "notification": {
              "title": farmData.name,
              "body": "\n" + body
            },
            "android": {
              "priority": "high",
            },
          }
        );
      }
    }
  });
};

cron.schedule("0 8 * * *", () => { // Every day at 08:00AM
  sendNotifications();
  console.log("Notifications have been sent.");
});