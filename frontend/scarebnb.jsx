import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {
  fetchHomes,
  fetchHome,
  createHome,
  updateHome,
  destroyHome
} from "./actions/home_actions";

document.addEventListener("DOMContentLoaded", () => {
  // debugger

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchHomes = fetchHomes;
  window.fetchHome = fetchHome;
  window.createHome = createHome;
  window.updateHome = updateHome;
  window.destroyHome = destroyHome;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
