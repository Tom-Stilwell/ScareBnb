import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_CURRENT_USER_INFO } from "../actions/user_actions";

const sessionReducer = (oldState = { current_user: null }, action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    case RECEIVE_CURRENT_USER_INFO:
      return merge({}, oldState, { currentUser: action.currentUser.user });
    default:
      return oldState;
  }
};

export default sessionReducer;
