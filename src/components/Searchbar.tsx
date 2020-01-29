import React, { useEffect } from "react";
import "../styles/Searchbar.css";
import { useHistory } from "react-router-dom";

function Searchbar() {
  const history = useHistory();

  useEffect(() => {
    const elem = document.getElementById("search")!;
    elem.addEventListener("keyup", downHandler);
    return () => elem.removeEventListener("keyup", downHandler);
  });

  return (
    <label>
      <p>Search for Pokédex number or name</p>
      <input type="text" name="search" placeholder="Pikachu" id="search" />
    </label>
  );

  function downHandler(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      const url = event.srcElement as HTMLInputElement;

      if (url.value) history.push(`/detail/${url.value.toString().trim()}`);
    }
  }
}
Searchbar.whyDidYouRender = true;
export default Searchbar;
