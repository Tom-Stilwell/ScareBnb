export const UPDATE_FILTER = "UPDATE_FILTER";
import { fetchHomes } from "./home_actions";
import { getState } from "../store/store";

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchHomes(getState().ui.filters)(dispatch);
  };
};
