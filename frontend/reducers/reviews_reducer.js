import { merge } from "lodash";
import { RECEIVE_HOME } from "../actions/home_actions";
// import { RECEIVE_REVIEW } from "../actions/review_actions";

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_HOME:
      // debugger;
      return merge({}, oldState, action.home.reviews);
    // case RECEIVE_RENTAL:
    //   return merge({}, oldState, { [action.rental.id]: action.rental });
    default:
      return oldState;
  }
};

export default reviewsReducer;
