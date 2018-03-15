import { merge } from "lodash";
import { HIDE_MODAL, SHOW_MODAL } from "../actions/modal_actions";
import { RECEIVE_HOMES } from "../actions/home_actions";

const modalReducer = (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case SHOW_MODAL:
      return action.component;
    case HIDE_MODAL:
    case RECEIVE_HOMES:
      return null;
    default:
      return oldState;
  }
};

export default modalReducer;
