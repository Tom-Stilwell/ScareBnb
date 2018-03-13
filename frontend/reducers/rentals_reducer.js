import { merge } from "lodash";
import { RECEIVE_HOME } from "../actions/home_actions";
import { RECEIVE_RENTAL } from "../actions/rental_actions";

const rentalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_HOME:
      // debugger;
      return merge({}, oldState, action.home.rentals);
    case RECEIVE_RENTAL:
      return merge({}, oldState, { [action.rental.id]: action.rental });
    default:
      return oldState;
  }
};

export default rentalsReducer;
