import { merge } from "lodash";
import {
  RECEIVE_HOME,
  RECEIVE_HOMES,
  REMOVE_HOME
} from "../actions/home_actions";

const homesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_HOMES:
      return merge({}, action.homes);
    case RECEIVE_HOME:
      return merge({}, oldState, { [action.home.home.id]: action.home.home });
    case REMOVE_HOME:
      const tempState = merge({}, oldState);
      delete tempState[action.homeId];
      return tempState;
    default:
      return oldState;
  }
};

export default homesReducer;
