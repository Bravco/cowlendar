import 'package:flutter/material.dart';

// Model
import 'package:app/model/farm.dart';
import 'package:app/model/log.dart';

// Page
import 'package:app/page/home.dart';
import 'package:app/page/settings.dart';

bool isDarkMode = false;

const pages = [
  HomePage(),
  SettingsPage(),
];
int pageIndex = 0;

Farm? selectedFarm;

class Utils {
  static final navigatorKey = GlobalKey<NavigatorState>();
  static final messengerKey = GlobalKey<ScaffoldMessengerState>();

  static showSnackBar(String? text) {
    if (text == null) return;

    final snackBar = SnackBar(
      content: Text(text),
      backgroundColor: Colors.red,
    );

    messengerKey.currentState!
      ..removeCurrentSnackBar()
      ..showSnackBar(snackBar);
  }

  static int daysBetween(DateTime from, DateTime to) {
    from = DateTime(from.year, from.month, from.day);
    to = DateTime(to.year, to.month, to.day);
    return (to.difference(from).inHours / 24).round();
  }

  static bool conceptionImportance({required Log log, int conceptionDuration = 2}) {
    DateTime now = DateTime.now();
    DateTime conceptionDate = DateTime(log.insemination.year, log.insemination.month + conceptionDuration, log.insemination.day);

    if (conceptionDate.isBefore(now) && log.conception == false) {
      return true;
    } else {
      return false;
    }
  }

  static bool dryPeriodImportance({required Log log, int conceptionDuration = 2, int dryPeriodDuration = 5}) {
    DateTime now = DateTime.now();
    DateTime dryPeriodDate = DateTime(log.insemination.year, log.insemination.month + conceptionDuration + dryPeriodDuration, log.insemination.day);

    if (dryPeriodDate.isBefore(now) && log.dryPeriod == false) {
      return true;
    } else {
      return false;
    }
  }

  static double conceptionProgressValue({required log, int conceptionDuration = 2}) {
    DateTime now = DateTime.now();
    DateTime conceptionDate = DateTime(log.insemination.year, log.insemination.month + conceptionDuration, log.insemination.day);
  
    int daysTotal = daysBetween(log.insemination, conceptionDate).abs(); // 100%
    int daysNow = daysBetween(log.insemination, now).abs(); // x%

    double value = daysNow / daysTotal;
    if (value > 1) value = 1;

    return value;
  }

  static double dryPeriodProgressValue({required log, int conceptionDuration = 2, int dryPeriodDuration = 5}) {
    DateTime now = DateTime.now();
    DateTime conceptionDate = DateTime(log.insemination.year, log.insemination.month + conceptionDuration, log.insemination.day);
    DateTime dryPeriodDate = DateTime(log.insemination.year, log.insemination.month + conceptionDuration + dryPeriodDuration, log.insemination.day);
  
    int daysTotal = daysBetween(conceptionDate, dryPeriodDate); // 100%
    int daysNow = daysBetween(conceptionDate, now); // x%

    double value = daysNow / daysTotal;
    if (value > 1) {
      value = 1;
    } else if (value < 0) {
      value = 0;
    }
    
    return value;
  }

  static int calvingIn({required log, int conceptionDuration = 2, int dryPeriodDuration = 5, int calvingDuration = 2}) {
    DateTime now = DateTime.now();
    DateTime calvingDate = DateTime(log.insemination.year, log.insemination.month + conceptionDuration + dryPeriodDuration + calvingDuration, log.insemination.day);
  
    int difference = daysBetween(now, calvingDate);

    return difference;
  }
}