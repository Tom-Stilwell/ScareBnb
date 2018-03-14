export const RECEIVE_LOADING = "RECEIVE_LOADING";

export const receiveLoading = component => ({
  type: RECEIVE_LOADING,
  component
});

export const startLoading = component => dispatch => () =>
  dispatch(receiveLoading(component));
