import 'package:flutter/material.dart';

// Provider
import 'package:app/provider/theme.dart';

class TagDivider extends StatelessWidget {
  final String title;
  final Widget? titleTrailing;
  final int? count;

  const TagDivider({
    super.key,
    required this.title,
    this.titleTrailing,
    this.count,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    Text(
                      title,
                      style: Themes.h4TextStyle(),
                    ),
                    titleTrailing ?? Container(),
                  ],
                ),
                count == null
                ? Container()
                : Container(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
                  decoration: BoxDecoration(
                    color: Themes.color10,
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: Text(
                    count! < 99
                      ? count.toString()
                      : "99+",
                    style: Themes.h4TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
          const Divider(
            thickness: 2,
            indent: 16,
            endIndent: 16,
          ),
        ],
      ),
    );
  }
}