import * as HomeApiUtil from "../util/home_api_util.js";
import { receiveHomeErrors } from "./error_actions";
import { startLoading,stopLoading } from "./loading_actions";

export const RECEIVE_HOMES = "RECEIVE_HOMES";
export const RECEIVE_HOME = "RECEIVE_HOME";
export const REMOVE_HOME = "REMOVE_HOME";

export const receiveHomes = homes => ({
  type: RECEIVE_HOMES,
  homes
});

export const receiveHome = home => ({
  type: RECEIVE_HOME,
  home
});

export const removeHome = homeId => ({
  type: REMOVE_HOME,
  homeId
});

export const fetchHomes = filters => dispatch =>
 HomeApiUtil.fetchHomes(filters).then(
    homes => dispatch(receiveHomes(homes)),
    errors => dispatch(receiveHomeErrors(errors))
  );

export const createHome = home => dispatch =>
  HomeApiUtil.createHome(home).then(
    home => dispatch(receiveHome(home)),
    errors => dispatch(receiveHomeErrors(errors))
  );

export const fetchHome = id => dispatch =>
  HomeApiUtil.fetchHome(id).then(
    home => dispatch(receiveHome(home)),
    errors => dispatch(receiveHomeErrors(errors))
  );

export const updateHome = home => dispatch =>
  HomeApiUtil.updateHome(home).then(
    home => dispatch(receiveHome(home)),
    errors => dispatch(receiveHomeErrors(errors))
  );

export const destroyHome = id => dispatch =>
  HomeApiUtil.destroyHome(id).then(
    () => dispatch(removeHome(id)),
    errors => dispatch(receiveHomeErrors(errors))
  );
