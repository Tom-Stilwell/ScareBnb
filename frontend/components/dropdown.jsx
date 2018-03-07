import React from "react";
import { connect } from "react-redux";
import UserDropdown from "./user_dropdown";

function Dropdown({ dropdown, hideDropdown }) {
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
    <div className="dropdown-background" onClick={hideDropdown}>
      <div className="dropdown-child" onClick={e => e.stopPropagation()}>
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

const mapDispatchToProps = dispatch => {
  return {
    hideDropdown: () => dispatch(hideDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
