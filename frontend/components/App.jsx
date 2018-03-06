import React from 'react';
// import GreetingContainer from './greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
// import SearchContainer from './search_container';
// import BenchFormContainer from './bench_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
    </header>

    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
    </Switch>
  </div>


);

export default App;
