export function likeFavorite(event: React.SyntheticEvent, id: string) {
  // Stop Anchor Jump
  event.preventDefault();
  const svg = event.currentTarget.firstChild as HTMLElement;
  const favorites = window.localStorage.getItem("favorites") || "";

  if (favorites.includes(id)) {
    window.localStorage.setItem("favorites", favorites.replace(id, ""));
    svg.style.fill = "rgba(255, 0, 0, 0.3)";
  } else {
    window.localStorage.setItem("favorites", favorites.concat(`${id} `));
    svg.style.fill = "red";
  }
}
