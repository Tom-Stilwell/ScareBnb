import * as APIUtil from "../util/session_api_util";
import { receiveSessionErrors } from "./error_actions";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = user => dispatch =>
  APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then(
    currentUser => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveSessionErrors(errors))
  ); // currentUser should be nooobooody

export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors))
  );
