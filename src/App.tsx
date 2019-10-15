import React from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import Detail from "./Detail";
import Favorites from "./Favorites";
import Searchbar from "./Searchbar";
import Heart from "./Heart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
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
                <Pokemon key={i} identifier={++i}></Pokemon>
              ))}
            </main>
          </Route>
          <Route path="/detail" component={Detail} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
