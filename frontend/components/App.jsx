import React from "react";
import NavBar from "./navbar_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal";
import MainSplash from "./main_splash";
import HomeSearch from "./home_search_container";

const App = () => (
  <main>
    <Modal />
    <NavBar />
    <header>
      <h1>Scare BnB</h1>
    </header>

    <Switch>
      <Route exact path="/homes" component={HomeSearch}></Route>
      <Route path="/" component={MainSplash}></Route>
    </Switch>
  </main>
);

export default App;
