import React, { lazy } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import Searchbar from "./Searchbar";
import Heart from "./Heart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const Detail = lazy(() => import("./Detail"));
const Favorites = lazy(() => import("./Favorites"));

function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Router>
          <header className="header">
            <Link to="/">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
                alt="Pokemon"
              />
            </Link>
          </header>

          <Switch>
            <Route exact path="/">
              <Searchbar history={window.history} />
              <Link className="favorites" to="/favorites">
                <Heart class="heart" />
                Favorites
              </Link>
              <main className="main">
                {[...new Array(20).keys()].map(i => (
                  <Pokemon key={++i} identifier={i}></Pokemon>
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
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
}

export default App;
