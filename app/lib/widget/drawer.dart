import 'package:app/utils.dart';
import 'package:flutter/material.dart';

// Pub
import 'package:firebase_auth/firebase_auth.dart';

// Provider
import 'package:app/provider/theme.dart';

// Widget
import 'package:app/widget/theme_button.dart';

// Page
import 'package:app/page/mainpage.dart';

class MyDrawer extends StatelessWidget {
  const MyDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Stack(
        children: [
          SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.max,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  padding: const EdgeInsets.only(top: 48, bottom: 16),
                  child: Column(
                    children: [
                      Text(
                        "Logged as",
                        style: Themes.h4TextStyleAlt(),
                      ),
                      Text(
                        FirebaseAuth.instance.currentUser!.email!,
                        style: Themes.h3TextStyle(),
                      ),
                    ],
                  ),
                ),
                const Divider(
                  thickness: 2,
                  indent: 16,
                  endIndent: 16,
                ),
                Wrap(
                  runSpacing: 16,
                  children: [
                    buildDrawerListTile(
                      context: context,
                      title: "Home",
                      icon: const Icon(Icons.home),
                      pushPageIndex: 0,
                    ),
                    buildDrawerListTile(
                      context: context,
                      title: "Settings",
                      icon: const Icon(Icons.settings),
                      pushPageIndex: 1,
                    ),
                  ],
                ),
              ],
            ),
          ),
          const Align(
            alignment: Alignment.bottomLeft,
            child: ThemeButton(),
          ),
          Align(
            alignment: Alignment.bottomRight,
            child: IconButton(
              padding: const EdgeInsets.all(24),
              icon: const Icon(Icons.logout_outlined),
              onPressed: () => FirebaseAuth.instance.signOut(),
            ),
          ),
        ],
      ),
    );
  }

  Widget buildDrawerListTile({
    required BuildContext context,
    required String title,
    required Icon icon,
    required int pushPageIndex,
  }) {
    return ListTile(
      leading: Container(
        padding: const EdgeInsets.all(4),
        decoration: BoxDecoration(
          color: Themes.color10,
          borderRadius: BorderRadius.circular(8),
        ),
        child: icon,
      ),
      title: Text(
        title,
        style: Themes.h4TextStyle(),
      ),
      onTap: () {
        pageIndex = pushPageIndex;
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(
            builder: (context) => const MainPage(),
          ),
        );
      },
    );
  }
}