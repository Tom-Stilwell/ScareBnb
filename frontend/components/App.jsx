import React from 'react';
import NavBar from './navbar_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal';

const App = () => (
  <main>
    <Modal />
    <NavBar />
    <header>
      <h1>Scare BnB</h1>
    </header>


    <Switch>
    </Switch>
  </main>


);

export default App;
