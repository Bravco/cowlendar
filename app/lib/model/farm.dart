class Farm {
  final String id;
  final String name;

  Farm({
    this.id = "",
    required this.name,
  });

  Map<String, dynamic> toJson() => {
    "id": id,
    "name": name,
  };

  static Farm fromJson(Map<String, dynamic> json) => Farm(
    id: json["id"],
    name: json["name"],
  );
}