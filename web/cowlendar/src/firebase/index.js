import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, doc, query, orderBy } from "firebase/firestore";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBSW1_s4aI-5bFgctl8v6n_NnCU1CsyREY",
    authDomain: "cowcardfile-b31b6.firebaseapp.com",
    projectId: "cowcardfile-b31b6",
    storageBucket: "cowcardfile-b31b6.appspot.com",
    messagingSenderId: "1019719663138",
    appId: "1:1019719663138:web:11e5fd4175c76a2727147b",
    measurementId: "G-F285BZBB1M"
});

const db = getFirestore(firebaseApp);

export const breedsCollection = query(collection(db, "breeds"), orderBy("id"));
export const colorationsCollection = query(collection(db, "colorations"), orderBy("id"));
export const usersCollection = collection(db, "users");

export let userDoc;
export let farmsCollection;
export let farmsQuery;

export function farmDoc(farmId) {
    if (getAuth().currentUser) {
        return doc(farmsCollection, farmId);
    }
}

export function cowsCollection(farmId) {
    if (getAuth().currentUser) {
        return collection(farmDoc(farmId), "cows");
    }
}

export function cowsQuery(farmId) {
    if (getAuth().currentUser) {
        return query(cowsCollection(farmId), orderBy("number"))
    }
}

export function cowDoc(farmId, cowId) {
    if (getAuth().currentUser) {
        return doc(cowsCollection(farmId), cowId);
    }
}

onAuthStateChanged(getAuth(), user => {
    if (user) {
        userDoc = doc(usersCollection, user.uid);
        farmsCollection = collection(userDoc, "farms");
        farmsQuery = query(farmsCollection, orderBy("name"));
    } else {
        console.log("not signed in");
    }
});