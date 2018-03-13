import { UPDATE_FILTER } from "../actions/filter_actions";
import { merge } from "lodash";

const defaultState = {
  bounds: {
    northEast: "(40.810791571016026, -73.93118958691406)",
    southWest: "(40.71978127121087, -74.03418641308593)"
  },
  minGuests: 1,
  price: {
    minPrice: 0,
    maxPrice: 1000
  },
  dates: {
    startDate: "",
    endDate: ""
  }
};

const filterReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return merge({}, oldState, { [action.filter]: action.value });
    default:
      return oldState;
  }
};

export default filterReducer;
