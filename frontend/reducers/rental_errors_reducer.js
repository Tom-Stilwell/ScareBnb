import { merge } from "lodash";
import { RECEIVE_RENTAL_ERRORS } from "../actions/error_actions";
import { RECEIVE_RENTAL } from "../actions/rental_actions";

const rentalErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RENTAL_ERRORS:
      return merge({}, state, action.errors.responseJSON.errors);
    case RECEIVE_RENTAL:
      return [];
    default:
      return state;
  }
};

export default rentalErrorsReducer;
