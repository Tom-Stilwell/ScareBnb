import { merge } from "lodash";
import { RECEIVE_HOME_ERRORS } from "../actions/error_actions";

const homeErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_HOME_ERRORS:
      return merge({}, state, action.errors.responseJSON.errors);
    default:
      return state;
  }
};

export default homeErrorsReducer;
