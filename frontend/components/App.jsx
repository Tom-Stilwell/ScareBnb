import React from 'react';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <main>
    <header>
      <h1>Scare BnB</h1>
    </header>

    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
    </Switch>
  </main>


);

export default App;
