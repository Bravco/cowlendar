import 'package:app/utils.dart';
import 'package:flutter/material.dart';

// Pub
import 'package:cloud_firestore/cloud_firestore.dart';

// Model
import 'package:app/model/cow.dart';
import 'package:app/model/log.dart';

// Data
import 'package:app/data/database.dart';

// Provider
import 'package:app/provider/theme.dart';

// Widget
import 'package:app/widget/log_tile.dart';
import 'package:app/widget/tag_divider.dart';

// Page
import 'package:app/page/mainpage.dart';

class CowPage extends StatefulWidget {
  final Cow cow;

  const CowPage({
    super.key,
    required this.cow,
  });

  @override
  State<CowPage> createState() => _CowPageState();
}

class _CowPageState extends State<CowPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        title: Text(widget.cow.countryCode + widget.cow.number),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(
                builder: (context) => const MainPage(),
              ),
            );
          },
        ),
      ),
      body: StreamBuilder<List<Log>>(
        stream: readLogs(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Text("Something went wrong! ${snapshot.error}");
          } else if (snapshot.hasData) {
            final logs = snapshot.data!;

            return logs.isNotEmpty
            ? Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Column(
                children: [
                  TagDivider(title: "Insemination logs", count: logs.length),
                  Expanded(
                    child: ListView(
                      children: [
                        LogTile(cow: widget.cow, log: logs[0], isCurrent: true),
                        ...logs.sublist(1).map((log) => LogTile(cow: widget.cow, log: log)).toList(),
                      ],
                    ),
                  ),
                ],
              ),
            ) : Center(
              child: Text(
                "No logs have been found.",
                style: Themes.h4TextStyleAlt(),
              ),
            );
          } else {
            return const Center(child: CircularProgressIndicator());
          }
        },
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          DateTime? newDateTime = await showDatePicker(
            context: context,
            initialDate: DateTime.now(),
            firstDate: DateTime(1900),
            lastDate: DateTime(2100),
            helpText: "SELECT INSEMINATION DATE",
          );
          if (newDateTime == null) return;

          final docLog = DatabaseService.logsCollection(selectedFarm!.id, widget.cow.id).doc();

          final json = Log(
            id: docLog.id,
            dryPeriod: false,
            insemination: newDateTime,
          ).toJson();

          await docLog.set(json);
        },
        child: const Icon(Icons.add),
      ),
    );
  }

  Stream<List<Log>> readLogs() => DatabaseService.logsCollection(selectedFarm!.id, widget.cow.id)
    .orderBy("insemination", descending: true)
    .snapshots()
    .map((snapshot) => snapshot.docs
      .map((doc) => Log.fromJson((doc as QueryDocumentSnapshot<Map<String, dynamic>>).data())).toList());
}