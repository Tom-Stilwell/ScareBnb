import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

const mapAuthStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUser) };
};

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export const AuthRoute = withRouter(connect(mapAuthStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapAuthStateToProps, null)(Protected)
);

export const Root = ({ component: Component, path, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (path === "/" && exact ? <Component {...props} /> : null)}
  />
);

export const NotRoot = ({ component: Component, path, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (path !== "/" || !exact ? <Component {...props} /> : null)}
  />
);
