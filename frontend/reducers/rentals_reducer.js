import { merge } from "lodash";
import { RECEIVE_HOME } from "../actions/home_actions";
import { RECEIVE_CURRENT_USER_INFO } from "../actions/user_actions";
import { RECEIVE_RENTAL } from "../actions/rental_actions";

const rentalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_HOME:
      return merge({}, action.home.rentals);
    case RECEIVE_RENTAL:
      return merge({}, oldState, { [action.rental.id]: action.rental });
    case RECEIVE_CURRENT_USER_INFO:
      return merge({}, action.currentUser.rentals);
    default:
      return oldState;
  }
};

export default rentalsReducer;
