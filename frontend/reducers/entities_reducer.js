import { combineReducers } from "redux";
import homes from "./homes_reducer";
import rentals from "./rentals_reducer";
import reviews from "./reviews_reducer";

const entitiesReducer = combineReducers({ homes, rentals, reviews });

export default entitiesReducer;
