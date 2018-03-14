import { merge } from "lodash";
import { RECEIVE_LOADING } from "../actions/loading_actions";
import { RECEIVE_HOME, RECEIVE_HOMES } from "../actions/home_actions";

const loadingReducer = (oldState = false, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LOADING:
      return true;
    case RECEIVE_HOME:
    case RECEIVE_HOMES:
      return false;
    default:
      return oldState;
  }
};

export default loadingReducer;
