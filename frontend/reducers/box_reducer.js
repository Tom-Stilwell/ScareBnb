import { HIDE_BOX, SHOW_BOX } from "../actions/box_actions";

const boxReducer = (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case SHOW_BOX:
      return action.box;
    case HIDE_BOX:
      return null;
    default:
      return oldState;
  }
};

export default boxReducer;
