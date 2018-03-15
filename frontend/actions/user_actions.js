import * as UserApiUtil from "../util/user_api_util.js";
export const RECEIVE_CURRENT_USER_INFO = "RECEIVE_CURRENT_USER_INFO";

export const receiveCurrentUserInfo = currentUser => ({
  type: RECEIVE_CURRENT_USER_INFO,
  currentUser
});

export const fetchCurrentUserInfo = id => dispatch =>
  UserApiUtil.fetchCurrentUserInfo(id).then(user =>
    dispatch(receiveCurrentUserInfo(user))
  );
