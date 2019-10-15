import React from "react";
import "./Searchbar.css";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function Searchbar(props: any) {
  function upHandler(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const url = event.srcElement as HTMLInputElement;
      props.history.push(`/detail/${url.value.toString().trim()}`);
    }
  }
  useEffect(() => {
    window.addEventListener("keyup", upHandler);
    return () => window.removeEventListener("keyup", upHandler);
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
}

export default withRouter(Searchbar);
