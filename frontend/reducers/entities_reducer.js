import { combineReducers } from "redux";
import homes from "./homes_reducer";

const entitiesReducer = combineReducers({ homes });

export default entitiesReducer;
