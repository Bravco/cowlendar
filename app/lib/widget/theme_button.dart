import 'package:app/provider/theme.dart';
import 'package:flutter/material.dart';

// Pub
import 'package:provider/provider.dart';

// Data
import 'package:app/data/database.dart';

class ThemeButton extends StatelessWidget {
  const ThemeButton({super.key});

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);

    return IconButton(
      padding: const EdgeInsets.all(24),
      icon: themeProvider.isDarkMode
        ? const Icon(Icons.light_mode)
        : const Icon(Icons.dark_mode),
      onPressed: () {
        final provider = Provider.of<ThemeProvider>(context, listen: false);
        final bool value = !themeProvider.isDarkMode;

        provider.haveDarkMode(value);

        DatabaseService.userDoc().update({
          "darkMode": value,
        });
      },
    );
  }
}