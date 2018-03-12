import { combineReducers } from "redux";
import homes from "./homes_reducer";
import rentals from "./rentals_reducer";

const entitiesReducer = combineReducers({ homes, rentals });

export default entitiesReducer;
