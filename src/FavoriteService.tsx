export function likeFavorite(event: React.SyntheticEvent, name: string) {
  // Stop Anchor Jump
  event.preventDefault();
  const svg = event.currentTarget.firstChild as HTMLElement;
  const favorites = window.localStorage.getItem("favorites") || "";
  if (favorites.includes(name)) {
    window.localStorage.setItem("favorites", favorites.replace(name, ""));
    svg.style.fill = "rgba(255, 0, 0, 0.3)";
  } else {
    window.localStorage.setItem("favorites", favorites.concat(`${name} `));
    svg.style.fill = "red";
  }
}
