import 'package:app/utils.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

// Pub
import 'package:intl/intl.dart';
import 'package:focused_menu/focused_menu.dart';
import 'package:focused_menu/modals.dart';

// Model
import 'package:app/model/cow.dart';
import 'package:app/model/log.dart';

// Data
import 'package:app/data/database.dart';

// Provider
import 'package:app/provider/theme.dart';

// Page
import 'package:app/page/cow.dart';

class CowTile extends StatefulWidget {
  final Cow cow;
  final bool isImportant;

  const CowTile({
    super.key,
    required this.cow,
    required this.isImportant,
  });

  @override
  State<CowTile> createState() => _CowTileState();
}

class _CowTileState extends State<CowTile> {
  final TextEditingController countryCodeController = TextEditingController();
  final TextEditingController numberController = TextEditingController();

  @override
  void dispose() {
    countryCodeController.dispose();
    numberController.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
      stream: DatabaseService.userDoc().snapshots(),
      builder: (context, userSnapshot) {
        if (userSnapshot.hasError) {
          return Text("Something went wrong! ${userSnapshot.error}");
        } else if (userSnapshot.hasData) {
          final user = userSnapshot.data;

          return StreamBuilder<Log?>(
            stream: widget.cow.latestLog(),
            builder: (context, logSnapshot) {
              if (logSnapshot.hasData || logSnapshot.data == null) {
                final log = logSnapshot.data;
        
                bool conception = log?.conception ?? false;
                bool dryPeriod = log?.dryPeriod ?? false;
                
                bool conceptionImportance = log != null && user != null
                  ? Utils.conceptionImportance(
                      log: log,
                      conceptionDuration: user["conceptionDuration"],
                    )
                  : false;
        
                bool dryPeriodImportance = log != null && user != null
                  ? Utils.dryPeriodImportance(
                      log: log,
                      conceptionDuration: user["conceptionDuration"],
                      dryPeriodDuration: user["dryPeriodDuration"],
                    )
                  : false;

                double conceptionProgressValue = log != null && user != null
                  ? Utils.conceptionProgressValue(
                      log: log,
                      conceptionDuration: user["conceptionDuration"],
                    )
                  : 0;
                
                Color conceptionProgressColor = conceptionProgressValue > .5
                  ? conceptionProgressValue > .75
                    ? Colors.greenAccent
                    : Colors.orangeAccent
                  : Colors.redAccent;
                
                double dryPeriodProgressValue = log != null && user != null
                  ? Utils.dryPeriodProgressValue(
                      log: log,
                      conceptionDuration: user["conceptionDuration"],
                      dryPeriodDuration: user["dryPeriodDuration"],
                    )
                  : 0;
                
                Color dryPeriodProgressColor = dryPeriodProgressValue > .5
                  ? dryPeriodProgressValue > .75
                    ? Colors.greenAccent
                    : Colors.orangeAccent
                  : Colors.redAccent;
        
                int? calvingIn = log != null && user != null
                  ? Utils.calvingIn(
                      log: log,
                      conceptionDuration: user["conceptionDuration"],
                      dryPeriodDuration: user["dryPeriodDuration"],
                    )
                  : null;

                return FocusedMenuHolder(
                  onPressed: () {
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(
                        builder: (context) => CowPage(cow: widget.cow),
                      ),
                    );
                  },
                  menuItems: [
                    FocusedMenuItem(
                      title: Text(
                        "Edit",
                        style: Themes.h4TextStyle(),
                      ),
                      trailingIcon: const Icon(Icons.edit),
                      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                      onPressed: () async {
                        countryCodeController.text = widget.cow.countryCode;
                        numberController.text = widget.cow.number;

                        List<String?>? value = await showDialog<List<String?>?>(
                          context: context,
                          builder:(context) {
                            return AlertDialog(
                              content: Column(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  TextField(
                                    controller: countryCodeController,
                                    maxLength: 2,
                                    autofocus: true,
                                    decoration: const InputDecoration(
                                      hintText: "Country Code"
                                    ),
                                  ),
                                  TextField(
                                    controller: numberController,
                                    maxLength: 12,
                                    autofocus: true,
                                    decoration: const InputDecoration(
                                      hintText: "Cow Number"
                                    ),
                                  ),
                                ],
                              ),
                              actions: [
                                IconButton(
                                  onPressed: () {
                                    Navigator.of(context).pop([countryCodeController.text, numberController.text]);
                                    countryCodeController.clear();
                                    numberController.clear();
                                  },
                                  icon: const Icon(Icons.check),
                                ),
                              ],
                            );
                          },
                        );
                        if (value == null || value.isEmpty) return;
                        for (var element in value) {
                          if (element == null || element == "" || element.isEmpty) return;
                        }
                        
                        final docCow = DatabaseService.cowsCollection(selectedFarm!.id).doc(widget.cow.id);
        
                        docCow.update({
                          "countryCode": value[0],
                          "number": value[1],
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
                              content: Text("Are you sure to delete ${widget.cow.countryCode + widget.cow.number} and all its data?"),
                              actions: [
                                TextButton(
                                  onPressed: () {
                                    final docCow = DatabaseService.cowsCollection(selectedFarm!.id).doc(widget.cow.id);
        
                                    docCow.get().then((snapshot) {
                                      if (snapshot.exists) {
                                        DatabaseService.logsCollection(selectedFarm!.id, widget.cow.id).get().then((snapshot) {
                                          for (DocumentSnapshot doc in snapshot.docs) {
                                            doc.reference.delete();
                                          }
                                        });
                    
                                        docCow.delete();
                                      }
                                    });

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
                  child: ExpansionTile(
                    leading: Container(
                      width: 12,
                      height: 12,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: log == null
                          ? Colors.grey
                          : (conceptionImportance || dryPeriodImportance) ? Colors.redAccent: Colors.greenAccent,
                      ),
                    ),
                    title: Text(
                      "${widget.cow.countryCode}${widget.cow.number}",
                      style: Themes.h3TextStyle(),
                    ),
                    subtitle: Text(
                      "insemination: ${log == null ? "-" : DateFormat("yyyy-MM-dd").format(log.insemination)}",
                      style: Themes.h4TextStyleAlt(),
                    ),
                    childrenPadding: const EdgeInsets.all(16),
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Image.asset(
                            Theme.of(context).brightness == Brightness.light
                              ? "assets/cow_dark.png"
                              : "assets/cow_light.png",
                            fit: BoxFit.contain,
                            width: 96,
                          ),
                          Text(
                            calvingIn == null
                              ? "-"
                              : "calving in $calvingIn days",
                            style: Themes.h4TextStyleAlt(),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            "conception",
                            style: Themes.h4TextStyleAlt(),
                          ),
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 8),
                              child: LinearProgressIndicator(
                                value: conceptionProgressValue,
                                minHeight: 6,
                                backgroundColor: Themes.colorTextAlt,
                                color: conceptionProgressColor,
                              ),
                            ),
                          ),
                          Icon(
                            Icons.health_and_safety_outlined,
                            size: 32,
                            color: conceptionProgressValue >= 1
                              ? conception
                                ? Colors.greenAccent
                                : Colors.redAccent
                              : Themes.colorTextAlt,
                          ),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            "dry period",
                            style: Themes.h4TextStyleAlt(),
                          ),
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.only(left: 16, right: 8),
                              child: LinearProgressIndicator(
                                value: dryPeriodProgressValue,
                                minHeight: 6,
                                backgroundColor: Themes.colorTextAlt,
                                color: dryPeriodProgressColor,
                              ),
                            ),
                          ),
                          Icon(
                            Icons.water_drop_outlined,
                            size: 32,
                            color: dryPeriodProgressValue >= 1
                              ? dryPeriod
                                ? Colors.greenAccent
                                : Colors.redAccent
                              : Themes.colorTextAlt,
                          ),
                        ],
                      ),
                    ],
                  ),
                );
              } else {
                return const Center(child: CircularProgressIndicator());
              }
            }
          );
        } else {
          return const Center(child: CircularProgressIndicator());
        }
      },
    );
  }
}