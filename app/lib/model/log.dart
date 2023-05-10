// Pub
import 'package:cloud_firestore/cloud_firestore.dart';

class Log {
  final String id;
  final bool conception;
  final bool dryPeriod;
  final DateTime insemination;
  final DateTime? calving;
  Log({
    this.id = "",
    this.conception = false,
    this.dryPeriod = false,
    required this.insemination,
    this.calving,
  });

  Map<String, dynamic> toJson() => {
    "id": id,
    "conception": conception,
    "dryPeriod": dryPeriod,
    "insemination": insemination,
    "calving": calving,
  };

  static Log fromJson(Map<String, dynamic> json) => Log(
    id: json["id"],
    conception: json["conception"],
    dryPeriod: json["dryPeriod"],
    insemination: DateTime.fromMillisecondsSinceEpoch((json["insemination"] as Timestamp).millisecondsSinceEpoch),
    calving: json["calving"] != null
    ? DateTime.fromMillisecondsSinceEpoch((json["calving"] as Timestamp).millisecondsSinceEpoch)
    : null,
  );
}