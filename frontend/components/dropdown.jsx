import React from "react";
import { connect } from "react-redux";
import UserDropdown from "./user_dropdown";
import { hideDropdown } from "../actions/dropdown_actions";

function Dropdown({ dropdown, hideDropdown }) {
  // debugger;
  if (!dropdown) {
    return null;
  }
  let component;
  switch (dropdown) {
    case "user":
      component = <UserDropdown />;
      break;
    default:
      return null;
  }
  return (
    <div className="everything-but-dropdown" onClick={hideDropdown}>
      <div className="dropdown" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dropdown: state.ui.dropdown
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     hideDropdown: () => dispatch(hideDropdown())
//   };
// };

export default connect(mapStateToProps, { hideDropdown })(Dropdown);
