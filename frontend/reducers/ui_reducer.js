import { combineReducers } from "redux";
import { merge } from "lodash";
import modal from "./modal_reducer";
import dropdown from "./dropdown_reducer";

const uiReducer = combineReducers({ modal, dropdown });

export default uiReducer;
