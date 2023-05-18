import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, doc, query, orderBy } from "firebase/firestore";
import { firebaseConfig } from "./config";

export const firebaseApp = initializeApp(firebaseConfig);

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