import { combineReducers } from "redux";

import session from "./session_errors_reducer";
import home from "./home_errors_reducer";

const errorsReducer = combineReducers({
  session,
  home
});

export default errorsReducer;
