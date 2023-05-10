import 'package:app/utils.dart';

// Pub
import 'package:cloud_firestore/cloud_firestore.dart';

// Model
import 'package:app/model/log.dart';

// Data
import 'package:app/data/database.dart';

class Cow {
  final String id;
  final String countryCode;
  final String number;

  Cow({
    this.id = "",
    required this.countryCode,
    required this.number,
  });

  Map<String, dynamic> toJson() => {
    "id": id,
    "countryCode": countryCode,
    "number": number,
  };

  static Cow fromJson(Map<String, dynamic> json) => Cow(
    id: json["id"],
    countryCode: json["countryCode"],
    number: json["number"],
  );

  Stream<List<Log>> readLogs() => DatabaseService.logsCollection(selectedFarm!.id, id).orderBy("insemination", descending: true)
    .snapshots()
    .map((snapshot) => snapshot.docs
      .map((doc) => Log.fromJson((doc as QueryDocumentSnapshot<Map<String, dynamic>>).data())).toList());

  Stream<Log?> latestLog() => readLogs().map((logs) {
      if (logs.isNotEmpty) {
        return logs[0];
      } else {
        return null;
      }
    });
}