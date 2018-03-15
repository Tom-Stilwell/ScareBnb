import { merge } from "lodash";
import {
  RECEIVE_HOME,
  RECEIVE_HOMES,
  REMOVE_HOME
} from "../actions/home_actions";

import { RECEIVE_CURRENT_USER_INFO } from "../actions/user_actions";

const homesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  // debugger;
  switch (action.type) {
    case RECEIVE_HOMES:
      return merge({}, action.homes);
    case RECEIVE_HOME:
      return merge({}, oldState, { [action.home.home.id]: action.home.home });
    case REMOVE_HOME:
      const tempState = merge({}, oldState);
      delete tempState[action.homeId];
      return tempState;
    case RECEIVE_CURRENT_USER_INFO:
      return merge({}, oldState, action.currentUser.homes);
    default:
      return oldState;
  }
};

export default homesReducer;
