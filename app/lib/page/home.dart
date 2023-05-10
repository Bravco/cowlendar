import 'package:app/utils.dart';
import 'package:flutter/material.dart';

// Pub
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:provider/provider.dart';

// Model
import 'package:app/model/farm.dart';
import 'package:app/model/cow.dart';
import 'package:app/model/log.dart';

// Data
import 'package:app/data/database.dart';

// Provider
import 'package:app/provider/theme.dart';

// Widget
import 'package:app/widget/drawer.dart';
import 'package:app/widget/tag_divider.dart';
import 'package:app/widget/cow_tile.dart';

enum SortType {
  number,
  insemination,
  importance,
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final TextEditingController nameController = TextEditingController();
  final TextEditingController searchController = TextEditingController();
  final TextEditingController countryCodeController = TextEditingController();
  final TextEditingController numberController = TextEditingController();

  String query = "";
  SortType sortBy = SortType.importance;

  @override
  void initState() {
    super.initState();

    // Setup ThemeMode
    final provider = Provider.of<ThemeProvider>(context, listen: false);
    provider.setupThemeMode();
  }

  @override
  void dispose() {
    nameController.dispose();
    searchController.dispose();
    countryCodeController.dispose();
    numberController.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<Farm>>(
      stream: readFarms(),
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return Text("Something went wrong! ${snapshot.error}");
        } else if (snapshot.hasData) {
          final farms = snapshot.data!;

          if (farms.isNotEmpty) {
            selectedFarm ??= farms[0];
          }

          return Scaffold(
            resizeToAvoidBottomInset: false,
            appBar: AppBar(
              title: selectedFarm == null
              ? const Text("Home")
              : Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(selectedFarm!.name),
                  PopupMenuButton(
                    icon: const Icon(Icons.arrow_drop_down),
                    initialValue: selectedFarm,
                    onSelected: (value) {
                      setState(() => selectedFarm = value);
                    },
                    itemBuilder: (context) => [
                      for (var farm in farms) PopupMenuItem(
                        value: farm,
                        child: Text(farm.name),
                      ),
                    ],
                  ),
                ],
              ),
              actions: [
                PopupMenuButton(
                  constraints: const BoxConstraints(maxWidth: 72),
                  itemBuilder: (context) => [
                    PopupMenuItem(
                      child: IconButton(
                        onPressed: farms.isEmpty
                        ? null
                        : () async {
                          String? value = await showDialog<String?>(
                            context: context,
                            builder:(context) {
                              return AlertDialog(
                                content: 
                                  TextField(
                                    controller: nameController,
                                    maxLength: 12,
                                    autofocus: true,
                                    decoration: const InputDecoration(
                                      hintText: "Farm Name",
                                    ),
                                ),
                                actions: [
                                  IconButton(
                                    onPressed: () {
                                      Navigator.of(context).pop(nameController.text);
                                      nameController.clear();
                                    },
                                    icon: const Icon(Icons.check),
                                  ),
                                ],
                              );
                            },
                          );
                          if (value == null || value == "" || value.isEmpty) return;

                          final docFarm = DatabaseService.farmsCollection().doc(selectedFarm!.id);

                          await docFarm.update({
                            "name": value,
                          });

                          docFarm.get().then((snapshot) {
                            setState(() => selectedFarm = Farm.fromJson(snapshot.data() as Map<String, dynamic>));
                          });
                        },
                        icon: const Icon(Icons.edit),
                      ),
                    ),
                    PopupMenuItem(
                      child: IconButton(
                        onPressed: farms.isEmpty
                        ? null
                        : () {
                          showDialog(
                            context: context,
                            builder:(context) {
                              return AlertDialog(
                                title: const Text("Please confirm"),
                                content: Text("Are you sure to delete ${selectedFarm!.name} and all its data?"),
                                actions: [
                                  TextButton(
                                    onPressed: () {
                                      final docFarm = DatabaseService.farmsCollection().doc(selectedFarm!.id);

                                      docFarm.delete();
                                      
                                      setState(() {
                                        selectedFarm = null;
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
                        icon: const Icon(Icons.delete),
                      ),
                    ),
                    PopupMenuItem(
                      child: IconButton(
                        onPressed: () async {
                          String? value = await showDialog<String?>(
                            context: context,
                            builder:(context) {
                              return AlertDialog(
                                content: 
                                  TextField(
                                    controller: nameController,
                                    maxLength: 12,
                                    autofocus: true,
                                    decoration: const InputDecoration(
                                      hintText: "Farm Name",
                                    ),
                                ),
                                actions: [
                                  IconButton(
                                    onPressed: () {
                                      Navigator.of(context).pop(nameController.text);
                                      nameController.clear();
                                    },
                                    icon: const Icon(Icons.check),
                                  ),
                                ],
                              );
                            },
                          );
                          if (value == null || value == "" || value.isEmpty) return;

                          final docFarm = DatabaseService.farmsCollection().doc();

                          final json = Farm(
                            id: docFarm.id,
                            name: value,
                          ).toJson();

                          await docFarm.set(json);
                        },
                        icon: const Icon(Icons.add),
                      ),
                    ),
                  ],
                ),
              ],
            ),
            drawer: const MyDrawer(),
            body: farms.isEmpty
            ? Center(
              child: Text(
                "No farms have been found.",
                style: Themes.h4TextStyleAlt(),
              ),
            )
            : Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                children: [
                  TextField(
                    controller: searchController,
                    onSubmitted: (value) => setState(() => query = value),
                    style: Themes.h4TextStyle(),
                    decoration: InputDecoration(
                      prefixIcon: const Icon(Icons.search),
                      hintText: "Search...",
                      contentPadding: const EdgeInsets.all(8),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                        borderSide: const BorderSide(),
                      ),
                      suffixIcon: IconButton(
                        onPressed: searchController.clear,
                        icon: const Icon(Icons.clear),
                      ),
                    ),
                  ),
                  StreamBuilder<List<Cow>>(
                    stream: readCows(),
                    builder: ((context, snapshot) {
                      if (snapshot.hasError) {
                        return Text("Something went wrong! ${snapshot.error}");
                      } else if (snapshot.hasData) {
                        return Expanded(
                          child: snapshot.data!.isNotEmpty
                          ? StreamBuilder<List<Cow>>(
                            stream: sortedCows(),
                            builder: (context, snapshot) {
                              if (snapshot.hasError) {
                                return Text("Something went wrong! ${snapshot.error}");
                              } else if (snapshot.hasData) {
                                final searchedCows = snapshot.data!;
                          
                                return searchedCows.isNotEmpty
                                ? Column(
                                  children: [
                                    TagDivider(
                                      title: "Cows",
                                      titleTrailing: PopupMenuButton(
                                        onSelected: (value) => setState(() => sortBy = value),
                                        icon: const Icon(Icons.more_horiz),
                                        itemBuilder: (context) => const [
                                          PopupMenuItem<SortType>(
                                            value: SortType.number,
                                            child: Text("Sort by cow number"),
                                          ),
                                          PopupMenuItem<SortType>(
                                            value: SortType.insemination,
                                            child: Text("Sort by insemination date"),
                                          ),
                                          PopupMenuItem<SortType>(
                                            value: SortType.importance,
                                            child: Text("Sort by importance"),
                                          ),
                                        ],
                                      ),
                                      count: searchedCows.length,
                                    ),
                                    Expanded(
                                      child: ListView(
                                        children: searchedCows.map((cow) => CowTile(
                                          cow: cow,
                                          isImportant: false,
                                        )).toList(),
                                      ),
                                    ),
                                  ],
                                ) : Container();
                              } else {
                                return const Center(child: CircularProgressIndicator());
                              }
                            },
                          ) : Center(
                            child: Text(
                              "No cows have been found.",
                              style: Themes.h4TextStyleAlt(),
                            ),
                          ),
                        );
                      } else {
                        return const Expanded(
                          child: Center(child: CircularProgressIndicator())
                        );
                      }
                    }),
                  ),
                ],
              ),
            ),
            floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
            floatingActionButton: farms.isEmpty
            ? Container()
            : FloatingActionButton(
              onPressed: () async {
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
                              hintText: "Country Code",
                            ),
                          ),
                          TextField(
                            controller: numberController,
                            maxLength: 12,
                            decoration: const InputDecoration(
                              hintText: "Cow Number",
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

                final docCow = DatabaseService.cowsCollection(selectedFarm!.id).doc();
    
                final json = Cow(
                  id: docCow.id,
                  countryCode: value[0] as String,
                  number: value[1] as String,
                ).toJson();
      
                await docCow.set(json);
              },
              child: const Icon(Icons.add),
            ),
          );
        } else {
          return const Center(
            child: CircularProgressIndicator(),
          );
        }
      }
    );
  }

  Stream<List<Farm>> readFarms() => DatabaseService.farmsCollection()
    .snapshots()
    .map((snapshot) => snapshot.docs
      .map((doc) => Farm.fromJson((doc as QueryDocumentSnapshot<Map<String, dynamic>>).data())).toList());

  Stream<List<Cow>> readCows() => DatabaseService.cowsCollection(selectedFarm!.id)
    .snapshots()
    .map((snapshot) => snapshot.docs
      .map((doc) => Cow.fromJson((doc as QueryDocumentSnapshot<Map<String, dynamic>>).data())).toList());
  
  Stream<List<Cow>> searchedCows() => readCows()
    .map((cows) => cows
      .where((cow) {
        final cowNumber = cow.number.toLowerCase();
        final input = query.toLowerCase();
        return cowNumber.contains(input);
      }).toList());
  
  Stream<List<Cow>> sortedCows() async* {
    List<Cow> sortedCows = await searchedCows().first;

    switch (sortBy) {
      case SortType.number:
        sortedCows.sort((a, b) => a.number.compareTo(b.number));
        break;
      
      case SortType.insemination:
        for (int i = 0; i < sortedCows.length-1; i++) {
          for (int j = 0; j < sortedCows.length-i-1; j++) {
            Log? a = await sortedCows[j].latestLog().first;
            Log? b = await sortedCows[j+1].latestLog().first;

            if (a != null && b != null) {
              if (a.insemination.isBefore(b.insemination)) {
                var tmp = sortedCows[j];
                sortedCows[j] = sortedCows[j+1];
                sortedCows[j+1] = tmp;
              }
            } else if (a == null && b != null) {
              var tmp = sortedCows[j];
              sortedCows[j] = sortedCows[j+1];
              sortedCows[j+1] = tmp;
            }
          }
        }
        break;
      
      case SortType.importance:
        final user = await DatabaseService.userDoc().get();

        for (int i = 0; i < sortedCows.length-1; i++) {
          for (int j = 0; j < sortedCows.length-i-1; j++) {
            Log? a = await sortedCows[j].latestLog().first;
            Log? b = await sortedCows[j+1].latestLog().first;

            if (a != null && b != null) {
              bool aImportance = (Utils.conceptionImportance(
                  log: a,
                  conceptionDuration: user["conceptionDuration"],
                ) || Utils.dryPeriodImportance(
                  log: a,
                  conceptionDuration: user["conceptionDuration"],
                  dryPeriodDuration: user["dryPeriodDuration"],
                )
              );
              bool bImportance = (Utils.conceptionImportance(
                  log: b,
                  conceptionDuration: user["conceptionDuration"],
                ) || Utils.dryPeriodImportance(
                  log: b,
                  conceptionDuration: user["conceptionDuration"],
                  dryPeriodDuration: user["dryPeriodDuration"],
                )
              );

              if ((aImportance == false && bImportance == true) ||
              (aImportance == true && bImportance == true && a.insemination.isBefore(b.insemination))) {
                var tmp = sortedCows[j];
                sortedCows[j] = sortedCows[j+1];
                sortedCows[j+1] = tmp;
              }
            } else if (a == null && b != null) {
              var tmp = sortedCows[j];
              sortedCows[j] = sortedCows[j+1];
              sortedCows[j+1] = tmp;
            }
          }
        }
        break;

      default:
        break;
    }

    yield sortedCows;
  }
}