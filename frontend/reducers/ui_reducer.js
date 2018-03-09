import { combineReducers } from "redux";
import { merge } from "lodash";
import modal from "./modal_reducer";
import dropdown from "./dropdown_reducer";
import filters from "./filters_reducer";
import box from "./box_reducer";

const uiReducer = combineReducers({ modal, dropdown, filters, box });

export default uiReducer;
