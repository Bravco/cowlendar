import 'package:flutter/material.dart';

// Pub
import 'package:firebase_auth/firebase_auth.dart';

// Data
import 'package:app/data/database.dart';

class ThemeProvider extends ChangeNotifier {
  void setupThemeMode() async {
    if (FirebaseAuth.instance.currentUser != null) {
      final docUser = await DatabaseService.userDoc().get();
      final data = docUser.data()! as Map<String, Object?>;
      final bool isDarkModeOn = data["darkMode"] as bool;

      haveDarkMode(isDarkModeOn);
    } else {
      haveDarkMode(false);
    }
  }

  ThemeMode themeMode = ThemeMode.light;

  bool get isDarkMode => themeMode == ThemeMode.dark;

  void haveDarkMode(bool isDarkModeOn) {
    themeMode = isDarkModeOn ? ThemeMode.dark : ThemeMode.light;
    notifyListeners();
  }
}

class Themes {
  static final lightTheme = ThemeData(
    brightness: Brightness.light,
    scaffoldBackgroundColor: Colors.white,
    primaryColor: Colors.white,
    colorScheme: const ColorScheme.light(),
    primarySwatch: color10,
    textTheme: TextTheme(
      overline: h4TextStyle(),
    ),
    iconTheme: const IconThemeData(color: Colors.black, opacity: 1),
    listTileTheme: const ListTileThemeData(
      contentPadding: EdgeInsets.all(16),
      dense: true,
      horizontalTitleGap: 16,
      minLeadingWidth: 0,
      iconColor: Colors.white,
    ),
    appBarTheme: const AppBarTheme(
      elevation: 0,
      foregroundColor: Colors.black,
      backgroundColor: Colors.transparent,
      titleTextStyle: TextStyle(
        color: Colors.black,
        fontSize: 24,
        fontWeight: FontWeight.w500,
      ),
      centerTitle: true,
    ),
    popupMenuTheme: PopupMenuThemeData(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
    ),
    floatingActionButtonTheme: const FloatingActionButtonThemeData(
      backgroundColor: Color(0xFF484848),
      foregroundColor: Colors.white,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
        padding: const MaterialStatePropertyAll<EdgeInsets>(EdgeInsets.all(16)),
        backgroundColor: MaterialStatePropertyAll<Color>(color10),
        foregroundColor: const MaterialStatePropertyAll<Color>(Colors.white),
        textStyle: MaterialStatePropertyAll<TextStyle>(h4TextStyle(color: Colors.white)),
        shape: MaterialStatePropertyAll<OutlinedBorder>(RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        )),
      )
    ),
  );

  static final darkTheme = ThemeData(
    brightness: Brightness.dark,
    scaffoldBackgroundColor: const Color(0xFF323232),
    primaryColor: Colors.black,
    colorScheme: const ColorScheme.dark(),
    primarySwatch: color10,
    textTheme: TextTheme(
      overline: h4TextStyle(),
    ),
    iconTheme: const IconThemeData(color: Colors.white, opacity: 1),
    listTileTheme: const ListTileThemeData(
      contentPadding: EdgeInsets.all(8),
      dense: true,
      horizontalTitleGap: 16,
      minLeadingWidth: 0,
      iconColor: Colors.white,
    ),
    appBarTheme: const AppBarTheme(
      elevation: 0,
      foregroundColor: Colors.white,
      backgroundColor: Colors.transparent,
      titleTextStyle: TextStyle(
        color: Colors.white,
        fontSize: 24,
        fontWeight: FontWeight.w500,
      ),
      centerTitle: true,
    ),
    popupMenuTheme: PopupMenuThemeData(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
    ),
    floatingActionButtonTheme: const FloatingActionButtonThemeData(
      backgroundColor: Colors.white,
      foregroundColor: Colors.black,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
        padding: const MaterialStatePropertyAll<EdgeInsets>(EdgeInsets.all(16)),
        backgroundColor: MaterialStatePropertyAll<Color>(color10),
        foregroundColor: const MaterialStatePropertyAll<Color>(Colors.white),
        textStyle: MaterialStatePropertyAll<TextStyle>(h4TextStyle(color: Colors.white)),
        shape: MaterialStatePropertyAll<OutlinedBorder>(RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        )),
      )
    ),
  );

  // Colors
  static const Color colorTextAlt = Color(0xFFB3B3B3);

  static final MaterialColor color10 = MaterialColor(0xFF5A6BFF, {
    50: const Color(0xFF5A6BFF).withOpacity(.1),
    100: const Color(0xFF5A6BFF).withOpacity(.2),
    200: const Color(0xFF5A6BFF).withOpacity(.3),
    300: const Color(0xFF5A6BFF).withOpacity(.4),
    400: const Color(0xFF5A6BFF).withOpacity(.5),
    500: const Color(0xFF5A6BFF).withOpacity(.6),
    600: const Color(0xFF5A6BFF).withOpacity(.7),
    700: const Color(0xFF5A6BFF).withOpacity(.8),
    800: const Color(0xFF5A6BFF).withOpacity(.9),
    900: const Color(0xFF5A6BFF).withOpacity(1),
  });

  // Text Styles
  static TextStyle h1TextStyle({ Color? color, FontWeight? fontWeight }) => TextStyle(
    color: color,
    fontSize: 32,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h1TextStyleAlt({ FontWeight? fontWeight }) => TextStyle(
    color: colorTextAlt,
    fontSize: 32,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h2TextStyle({ Color? color, FontWeight? fontWeight = FontWeight.w500 }) => TextStyle(
    color: color,
    fontSize: 24,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h2TextStyleAlt({ FontWeight? fontWeight = FontWeight.w500 }) => TextStyle(
    color: colorTextAlt,
    fontSize: 24,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h3TextStyle({ Color? color, FontWeight? fontWeight = FontWeight.w500 }) => TextStyle(
    color: color,
    fontSize: 20,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h3TextStyleAlt({ FontWeight? fontWeight = FontWeight.w500 }) => TextStyle(
    color: colorTextAlt,
    fontSize: 20,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h4TextStyle({ Color? color, FontWeight? fontWeight = FontWeight.w700 }) => TextStyle(
    color: color,
    fontSize: 16,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h4TextStyleAlt({ FontWeight? fontWeight = FontWeight.w700 }) => TextStyle(
    color: colorTextAlt,
    fontSize: 16,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h5TextStyle({ Color? color, FontWeight? fontWeight = FontWeight.w700 }) => TextStyle(
    color: color,
    fontSize: 14,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h5TextStyleAlt({ FontWeight? fontWeight = FontWeight.w700 }) => TextStyle(
    color: colorTextAlt,
    fontSize: 14,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );
}