export const SHOW_BOX = "SHOW_BOX";
export const HIDE_BOX = "HIDE_BOX";

export const hideBox = () => ({
  type: HIDE_BOX
});

export const showBox = box => ({
  type: SHOW_BOX,
  box
});
