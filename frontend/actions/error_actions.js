export const RECEIVE_HOME_ERRORS = "RECEIVE_HOME_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_RENTAL_ERRORS = "RECEIVE_RENTAL_ERRORS";

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveHomeErrors = errors => ({
  type: RECEIVE_HOME_ERRORS,
  errors
});

export const receiveRentalErrors = errors => ({
  type: RECEIVE_RENTAL_ERRORS,
  errors
});
