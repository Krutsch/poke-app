import React, { lazy, Suspense } from "react";
import "../styles/App.css";
import Logo from "../images/logo.webp";
import Pokemon from "./Pokemon";
import Searchbar from "./Searchbar";
import Heart from "./Heart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const Detail = lazy(() => import("../routes/Detail"));
const Favorites = lazy(() => import("../routes/Favorites"));

function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Router>
          <header className="header">
            <Link to="/">
              <img
                className="logo"
                src={Logo}
                alt="Pokemon"
                height="300"
                width="1700"
              />
            </Link>
          </header>

          <Switch>
            <Route exact path="/">
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
            </Route>
            <Route path="/detail" component={WaitingComponent(Detail)} />
            <Route path="/favorites" component={WaitingComponent(Favorites)} />
          </Switch>
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

export default App;
