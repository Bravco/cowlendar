// Pub
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class DatabaseService {
  static CollectionReference usersCollection() {
    return FirebaseFirestore.instance.collection("users");
  }

  static DocumentReference userDoc() {
    return usersCollection().doc(FirebaseAuth.instance.currentUser!.uid);
  }

  static CollectionReference farmsCollection() {
    return userDoc().collection("farms");
  }

  static CollectionReference cowsCollection(String farmId) {
    return farmsCollection().doc(farmId).collection("cows");
  }

  static CollectionReference logsCollection(String farmId, String cowId) {
    return cowsCollection(farmId).doc(cowId).collection("logs");
  }
}