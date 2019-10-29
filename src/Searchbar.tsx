import React from "react";
import "./Searchbar.css";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function Searchbar(props: any) {
  useEffect(() => {
    const elem = document.getElementById("search")!;
    elem.addEventListener("keyup", downHandler);
    return () => elem.removeEventListener("keyup", downHandler);
  });

  return (
    <label>
      <input
        type="text"
        name="search"
        placeholder="Search for Pokédex number or name"
        id="search"
      />
    </label>
  );

  function downHandler(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      const url = event.srcElement as HTMLInputElement;

      if (url.value)
        props.history.push(`/detail/${url.value.toString().trim()}`);
    }
  }
}

export default withRouter(Searchbar);
