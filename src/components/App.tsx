import React, { lazy, Suspense } from "react";
import "../styles/App.css";
import Logo from "../images/logo.webp";
import Pokemon from "./Pokemon";
import Searchbar from "./Searchbar";
import Heart from "./Heart";
//@ts-ignore
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
const lazyDetail = lazy(() => import("../routes/Detail"));
const lazyFav = lazy(() => import("../routes/Favorites"));
const Favorites = WaitingComponent(lazyFav);
const Detail = WaitingComponent(lazyDetail);

function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Router>
          <header className="header">
            <Link to="/">
              <img className="logo" src={Logo} alt="Pokemon" height="300" width="1700" />
            </Link>
          </header>

          <Routes>
            <Route path="/" element={<EnterPage />} />
            <Route path="detail/*" element={<Detail />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </div>
    </React.StrictMode>
  );
}

function WaitingComponent(Component: React.ElementType) {
  return (props: unknown) => (
    <React.Suspense fallback={<></>}>
      <Component {...props} />
    </React.Suspense>
  );
}
function EnterPage() {
  return (
    <>
      <Searchbar />
      <Link className="favorites" to="/favorites">
        <Heart class="heart" />
        Favorites
      </Link>
      <main className="main">
        {[...new Array(20).keys()].map(i => (
          <Suspense key={++i} fallback={<></>}>
            <Pokemon identifier={i}></Pokemon>
          </Suspense>
        ))}
      </main>
    </>
  );
}
WaitingComponent.whyDidYouRender = true;
EnterPage.whyDidYouRender = true;
App.whyDidYouRender = true;
export default App;
