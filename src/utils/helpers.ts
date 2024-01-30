export function getLocaleName(name: string): string {
  switch (name) {
    case "catalog":
      return "Каталог";
    case "favorites":
      return "Избранное";
    default:
      return name;
  }
}
