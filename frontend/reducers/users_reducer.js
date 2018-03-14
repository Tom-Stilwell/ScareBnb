import { merge } from "lodash";
import { RECEIVE_HOME } from "../actions/home_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_HOME:
      return merge({}, oldState, action.home.reviewers);
    default:
      return oldState;
  }
};

export default usersReducer;
