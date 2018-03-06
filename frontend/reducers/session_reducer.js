import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const sessionReducer = (state = {current_user: null}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.currentUser});
    default:
      return state;
  }
};

export default sessionReducer;
