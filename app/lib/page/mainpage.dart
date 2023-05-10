import 'package:flutter/material.dart';

// Pub
import 'package:firebase_auth/firebase_auth.dart';

// Page
import 'package:app/page/auth/auth.dart';
import 'package:app/page/auth/email_verification.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: StreamBuilder<User?>(
        stream: FirebaseAuth.instance.authStateChanges(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Text("Something went wrong! ${snapshot.error}");
          } else if (snapshot.hasData) {
            return const EmailVerificationPage();
          } else {
            return const AuthPage();
          }
        },
      ),
    );
  }
}