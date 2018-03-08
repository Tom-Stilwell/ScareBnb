import { HIDE_DROPDOWN, SHOW_DROPDOWN } from "../actions/dropdown_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const dropdownReducer = (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case SHOW_DROPDOWN:
      return action.dropdown;
    case HIDE_DROPDOWN:
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return oldState;
  }
};

export default dropdownReducer;
