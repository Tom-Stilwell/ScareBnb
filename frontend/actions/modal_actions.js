export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const hideModal = () => ({
  type: HIDE_MODAL
});

export const showModal = component => ({
  type: SHOW_MODAL,
  component
});

// no thunk action creators
