import 'package:app/utils.dart';
import 'package:flutter/material.dart';

// Pub
import 'package:intl/intl.dart';
import 'package:focused_menu/focused_menu.dart';
import 'package:focused_menu/modals.dart';
import 'package:roundcheckbox/roundcheckbox.dart';

// Model
import 'package:app/model/cow.dart';
import 'package:app/model/log.dart';

// Data
import 'package:app/data/database.dart';

// Provider
import 'package:app/provider/theme.dart';

class LogTile extends StatelessWidget {
  final Cow cow;
  final Log log;
  final bool isCurrent;

  const LogTile({
    super.key,
    required this.cow,
    required this.log,
    this.isCurrent = false,
  });

  @override
  Widget build(BuildContext context) {
    final docLog = DatabaseService.logsCollection(selectedFarm!.id, cow.id).doc(log.id);

    return StreamBuilder(
      stream: DatabaseService.userDoc().snapshots(),
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return Text("Something went wrong! ${snapshot.error}");
        } else if (snapshot.hasData) {
          final user = snapshot.data;

          bool conceptionImportance = user != null
            ? Utils.conceptionImportance(
                log: log,
                conceptionDuration: user["conceptionDuration"],
              )
            : false;
          bool dryPeriodImportance = user != null
            ? Utils.dryPeriodImportance(
                log: log,
                conceptionDuration: user["conceptionDuration"],
                dryPeriodDuration: user["dryPeriodDuration"],
              )
            : false;

          return FocusedMenuHolder(
            onPressed: () {},
            menuItems: [
              FocusedMenuItem(
                title: Text(
                  "Set insemination date",
                  style: Themes.h4TextStyle(),
                ),
                trailingIcon: const Icon(Icons.edit_calendar),
                backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                onPressed: () async {
                  DateTime? newDateTime = await showDatePicker(
                    context: context,
                    initialDate: DateTime.now(),
                    firstDate: DateTime(1900),
                    lastDate: DateTime(2100),
                    helpText: "SELECT INSEMINATION DATE",
                  );
                  if (newDateTime == null) return;
      
                  docLog.update({
                    "insemination": newDateTime,
                  });
                },
              ),
              FocusedMenuItem(
                title: Text(
                  "Set calving date",
                  style: Themes.h4TextStyle(),
                ),
                trailingIcon: const Icon(Icons.edit_calendar),
                backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                onPressed: () async {
                  DateTime? newDateTime = await showDatePicker(
                    context: context,
                    initialDate: DateTime.now(),
                    firstDate: DateTime(1900),
                    lastDate: DateTime(2100),
                    helpText: "SELECT CALVING DATE",
                  );
                  if (newDateTime == null) return;
      
                  docLog.update({
                    "calving": newDateTime,
                  });
                },
              ),
              FocusedMenuItem(
                title: Text(
                  "Clear calving date",
                  style: Themes.h4TextStyle(),
                ),
                trailingIcon: const Icon(Icons.remove_circle_outline),
                backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                onPressed: () {
                  docLog.update({
                    "calving": null,
                  });
                },
              ),
              FocusedMenuItem(
                title: Text(
                  "Delete",
                  style: Themes.h4TextStyle(),
                ),
                trailingIcon: Icon(
                  Icons.delete,
                  color: Themes.color10,
                ),
                backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                onPressed: () {
                  showDialog(
                    context: context,
                    builder:(context) {
                      return AlertDialog(
                        title: const Text("Please confirm"),
                        content: Text("Are you sure to delete selected ${cow.countryCode + cow.number} log and all its data?"),
                        actions: [
                          TextButton(
                            onPressed: () {
                              docLog.delete();

                              Navigator.of(context).pop();
                            },
                            child: const Text("Yes"),
                          ),
                          TextButton(
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                            child: const Text("No"),
                          ),
                        ],
                      );
                    },
                  );
                },
              ),
            ],
            child: Card(
              elevation: 2,
              shape: RoundedRectangleBorder(
                side: BorderSide(
                  width: 2,
                  color: isCurrent ? Themes.color10 : Colors.transparent,
                ),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    buildRow(
                      label: Text(
                        "insemination",
                        style: Themes.h4TextStyleAlt(),
                      ),
                      content: Text(
                        DateFormat("yyyy-MM-dd").format(log.insemination),
                        style: Themes.h4TextStyle(),
                      ),
                    ),
                    buildRow(
                      label: Text(
                        "conception",
                        style: conceptionImportance
                          ? Themes.h4TextStyle(color: Colors.red)
                          : Themes.h4TextStyleAlt(),
                      ),
                      content: RoundCheckBox(
                        size: 32,
                        border: Border.all(
                          width: 2,
                          color: log.conception ? Colors.transparent : Themes.colorTextAlt,
                        ),
                        checkedColor: Themes.color10,
                        uncheckedColor: Colors.transparent,
                        animationDuration: const Duration(milliseconds: 200),
                        isChecked: log.conception,
                        onTap: (value) {
                          docLog.update({
                            "conception": value,
                          });
                        },
                      ),
                    ),
                    buildRow(
                      label: Text(
                        "dry period",
                        style: dryPeriodImportance
                          ? Themes.h4TextStyle(color: Colors.red)
                          : Themes.h4TextStyleAlt(),
                      ),
                      content: RoundCheckBox(
                        size: 32,
                        border: Border.all(
                          width: 2,
                          color: log.dryPeriod ? Colors.transparent : Themes.colorTextAlt,
                        ),
                        checkedColor: Themes.color10,
                        uncheckedColor: Colors.transparent,
                        animationDuration: const Duration(milliseconds: 200),
                        isChecked: log.dryPeriod,
                        onTap: (value) {
                          docLog.update({
                            "dryPeriod": value,
                          });
                        },
                      ),
                    ),
                    buildRow(
                      label: Text(
                        "calving",
                        style: Themes.h4TextStyleAlt(),
                      ),
                      content: Text(
                        log.calving == null ? "-" : DateFormat("yyyy-MM-dd").format(log.calving!),
                        style: Themes.h4TextStyle(),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        } else {
          return const Center(child: CircularProgressIndicator());
        }
      }
    );
  }

  Widget buildRow({
    required Widget label,
    required Widget content,
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          label,
          content,
        ],
      ),
    );
  }
}