export const RECEIVE_LOADING = "RECEIVE_LOADING";
export const RECEIVE_LOADED = "RECEIVE_LOADED";

export const receiveLoading = component => ({
  type: RECEIVE_LOADING,
  component
});

export const receiveLoaded = component => ({
  type: RECEIVE_LOADED,
  component
});

export const startLoading = component => dispatch =>
  dispatch(receiveLoading(component));

export const stopLoading = component => dispatch =>
  dispatch(receiveLoaded(component));
