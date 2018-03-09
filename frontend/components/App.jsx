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

    <Switch>
      <Route exact path="/homes/:id" component={MainSplash} />
      <Route exact path="/homes" component={HomeSearch} />
      <Route path="/" component={MainSplash} />
    </Switch>
  </main>
);

export default App;
