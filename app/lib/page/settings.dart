import 'package:flutter/material.dart';

// Pub
import 'package:roundcheckbox/roundcheckbox.dart';
import 'package:syncfusion_flutter_sliders/sliders.dart';

// Data
import 'package:app/data/database.dart';

// Provider
import 'package:app/provider/theme.dart';

// Widget
import 'package:app/widget/drawer.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  int conceptionDuration = 2;
  int dryPeriodDuration = 5;

  @override
  void initState() {
    super.initState();

    setState(() {
      DatabaseService.userDoc().get().then((data) {
        conceptionDuration = data["conceptionDuration"];
        dryPeriodDuration = data["dryPeriodDuration"];
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        title: const Text("Settings"),
      ),
      body: StreamBuilder(
        stream: DatabaseService.userDoc().snapshots(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Text("Something went wrong! ${snapshot.error}");
          } else if (snapshot.hasData) {
            final user = snapshot.data!;

            bool notifications = user["notifications"];

            return Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Notifications",
                        style: Themes.h4TextStyleAlt(),
                      ),
                      RoundCheckBox(
                        size: 32,
                        border: Border.all(
                          width: 2,
                          color: notifications ? Colors.transparent : Themes.colorTextAlt,
                        ),
                        checkedColor: Themes.color10,
                        uncheckedColor: Colors.transparent,
                        animationDuration: const Duration(milliseconds: 200),
                        isChecked: notifications,
                        onTap: (value) {
                          DatabaseService.userDoc().update({
                            "notifications": value,
                          });
                        },
                      ),
                    ],
                  ),
                  const SizedBox(height: 48),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Insemination to Conception duration",
                        style: Themes.h4TextStyleAlt(),
                      ),
                      const Tooltip(
                        message: "Preferred time period from\ninsemination to conception.\nCow importance is calculated\nbased on this value.",
                        triggerMode: TooltipTriggerMode.tap,
                        showDuration: Duration(seconds: 5),
                        preferBelow: false,
                        child: Icon(Icons.help_outline, color: Themes.colorTextAlt),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  SfSlider(
                    min: 1,
                    max: 4,
                    interval: 1,
                    value: conceptionDuration.toDouble(),
                    onChanged: (value) {
                      setState(() => conceptionDuration = value.toInt());
                    },
                    onChangeEnd: (value) {
                      DatabaseService.userDoc().update({
                        "conceptionDuration": value.toInt(),
                      });
                    },
                    showDividers: true,
                    showLabels: true,
                    enableTooltip: true,
                    activeColor: Themes.color10,
                    inactiveColor: Themes.color10.shade200,
                    tooltipTextFormatterCallback: (actualValue, formattedText) {
                      if (actualValue == 1) {
                        return "$formattedText month";
                      } else {
                        return "$formattedText months";
                      }
                    },
                  ),
                  const SizedBox(height: 48),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Conception to Dry Period duration",
                        style: Themes.h4TextStyleAlt(),
                      ),
                      const Tooltip(
                        message: "Preferred time period from\nconception to dry period.\nCow importance is calculated\nbased on this value.",
                        triggerMode: TooltipTriggerMode.tap,
                        showDuration: Duration(seconds: 5),
                        preferBelow: false,
                        child: Icon(Icons.help_outline, color: Themes.colorTextAlt),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  SfSlider(
                    min: 3,
                    max: 7,
                    interval: 1,
                    value: dryPeriodDuration.toDouble(),
                    onChanged: (value) {
                      setState(() => dryPeriodDuration = value.toInt());
                    },
                    onChangeEnd: (value) {
                      DatabaseService.userDoc().update({
                        "dryPeriodDuration": value.toInt(),
                      });
                    },
                    showDividers: true,
                    showLabels: true,
                    enableTooltip: true,
                    activeColor: Themes.color10,
                    inactiveColor: Themes.color10.shade200,
                    tooltipTextFormatterCallback: (actualValue, formattedText) {
                      if (actualValue == 1) {
                        return "$formattedText month";
                      } else {
                        return "$formattedText months";
                      }
                    },
                  ),
                ],
              ),
            );
          } else {
            return const Center(child: CircularProgressIndicator());
          }
        }
      ),
      drawer: const MyDrawer(),
    );
  }

  /*Stream<List<Cow>> readCows() => DatabaseService.cowsCollection()
    .snapshots()
    .map((snapshot) => snapshot.docs
      .map((doc) => Cow.fromJson((doc as QueryDocumentSnapshot<Map<String, dynamic>>).data())).toList());*/
}