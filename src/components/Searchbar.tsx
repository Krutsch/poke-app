import React, { useEffect, useState } from "react";
import "../styles/Searchbar.css";
//@ts-ignore
import { Navigate } from "react-router-dom";
function Searchbar() {
  const [url, setUrl] = useState<HTMLInputElement>(null as any);

  useEffect(() => {
    const elem = document.getElementById("search")!;
    elem.addEventListener("keyup", downHandler);
    return () => elem.removeEventListener("keyup", downHandler);
  });

  return (
    <label>
      <p>Search for Pokédex number or name</p>
      <input type="text" name="search" placeholder="Pikachu" id="search" />
      {url && <Navigate to={`/detail/${url.value.toString().trim()}`} />}
    </label>
  );

  function downHandler(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      setUrl(event.srcElement as HTMLInputElement);
    }
  }
}
Searchbar.whyDidYouRender = true;
export default Searchbar;
