import 'package:app/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';

// Pub
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_messaging/firebase_messaging.dart';

// Data
import 'package:app/data/database.dart';

// Provider
import 'package:app/provider/theme.dart';

// Page
import 'package:app/page/auth/password_recovery.dart';

class SignInPage extends StatefulWidget {
  final VoidCallback onClickedSignUp;

  const SignInPage({
    super.key,
    required this.onClickedSignUp,
  });

  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  bool passwordVisibility = false;

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Padding(
        padding: const EdgeInsets.all(32),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(
              width: double.infinity,
              height: MediaQuery.of(context).size.height / 2 - 128,
              child: Image.asset(
                Theme.of(context).brightness == Brightness.light
                  ? "assets/logo_dark.png"
                  : "assets/logo_light.png",
                fit: BoxFit.contain,
              ),
            ),
            TextField(
              controller: emailController,
              textInputAction: TextInputAction.next,
              decoration: const InputDecoration(
                hintText: "Email",
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: passwordController,
              textInputAction: TextInputAction.done,
              obscureText: !passwordVisibility,
              decoration: InputDecoration(
                hintText: "Password",
                suffixIcon: IconButton(
                  onPressed: () => setState(() => passwordVisibility = !passwordVisibility),
                  icon: passwordVisibility
                    ? const Icon(Icons.visibility)
                    : const Icon(Icons.visibility_off),
                ),
              ),
            ),
            const SizedBox(height: 16),
            Align(
              alignment: Alignment.centerRight,
              child: GestureDetector(
                onTap: () => Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => const PasswordRecoveryPage(),
                )),
                child: Text(
                  "Forgot Password",
                  style: Themes.h4TextStyle(color: Themes.color10),
                ),
              ),
            ),
            const SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: signIn,
                child: const Text("Sign In"),
              ),
            ),
            const SizedBox(height: 16),
            RichText(
              text: TextSpan(
                text: "Not a member?  ",
                style: Themes.h4TextStyleAlt(),
                children: [
                  TextSpan(
                    recognizer: TapGestureRecognizer()
                     ..onTap = widget.onClickedSignUp,
                    text: "Register",
                    style: Themes.h4TextStyle(color: Themes.color10),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future signIn() async {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => const Center(child: CircularProgressIndicator()),
    );

    try {
      await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: emailController.text.trim(),
        password: passwordController.text.trim(),
      );

      // Refresh user's deviceToken.
      if (FirebaseAuth.instance.currentUser != null) {
        FirebaseMessaging.instance.onTokenRefresh.listen((token) async {
          await DatabaseService.userDoc().update({
            "deviceToken": token,
          });
        });
        FirebaseMessaging.instance.getToken().then((token) async {
          await DatabaseService.userDoc().update({
            "deviceToken": token,
          });
        });
      }
    } on FirebaseAuthException catch (e) {
      Utils.showSnackBar(e.message);
    }
    
    Utils.navigatorKey.currentState!.popUntil((route) => route.isFirst);
  }
}