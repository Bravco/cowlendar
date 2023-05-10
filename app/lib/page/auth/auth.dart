import 'package:flutter/material.dart';

// Page
import 'package:app/page/auth/signup.dart';
import 'package:app/page/auth/signin.dart';

class AuthPage extends StatefulWidget {
  const AuthPage({super.key});

  @override
  State<AuthPage> createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  bool isLogin = true;

  @override
  Widget build(BuildContext context) {
    return isLogin
      ? SignInPage(onClickedSignUp: toggle)
      : SignUpPage(onClickedSignIn: toggle);
  }

  void toggle() => setState(() => isLogin = !isLogin);
}