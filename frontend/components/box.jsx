import React from "react";
import { connect } from "react-redux";
import { hideBox } from "../actions/box_actions";
import GuestsFilterBox from "./filters/guests_filter_box";

const Box = ({ box, hideBox }) => {
  // debugger;
  if (!box) {
    return null;
  }
  let component;
  let className = box;
  switch (box) {
    case "guests_filter":
      component = <GuestsFilter />;
      break;
    default:
      return null;
  }
  return (
    <div className="everything-but-box" onClick={hideBox}>
      <div className={className} onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = ({ box }) => ({ box });

const mapDispatchToProps = dispatch => ({
  hideDropdown: () => dispatch(hideBox())
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
