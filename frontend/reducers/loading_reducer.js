import { merge } from "lodash";
import { RECEIVE_LOADING, RECEIVE_LOADED } from "../actions/loading_actions";

const defaultState = {
  homeShow: true,
  homeSearch: true,
  trips: false
};

const loadingReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LOADING:
      return merge({}, oldState, { [action.component]: true });

    case RECEIVE_LOADED:
      return merge({}, oldState, { [action.component]: false });
    default:
      return oldState;
  }
};

export default loadingReducer;
