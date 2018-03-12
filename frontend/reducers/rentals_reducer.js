import { merge } from "lodash";
import { RECEIVE_HOME } from "../actions/home_actions";

const rentalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_HOME:
      debugger;
      return merge({}, oldState, { rentals: action.home.rentals });
    default:
      return oldState;
  }
};

export default rentalsReducer;
