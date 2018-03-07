import { merge } from "lodash";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from "../actions/session_actions";

import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors.responseJSON.errors);
    case RECEIVE_CURRENT_USER:
    case SHOW_MODAL:
    case HIDE_MODAL:
      return {};
    default:
      return state;
  }
};

export default sessionErrorsReducer;
