import React from "react";
import NavBar from "./navbars/navbar_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal";
import MainSplash from "./main_splash";
import HomeSearch from "./home/home_search_container";
import HomeShow from "./home/home_show_container";
import Trips from "./trips/trips_container";

const App = () => (
  <main>
    <Modal />

    <Switch>
      <Route exact path="/trips" component={Trips} />
      <Route exact path="/homes/:id" component={HomeShow} />
      <Route exact path="/homes" component={HomeSearch} />
      <Route path="/" component={MainSplash} />
    </Switch>
    <Route path="/" component={NavBar} />
  </main>
);

export default App;
