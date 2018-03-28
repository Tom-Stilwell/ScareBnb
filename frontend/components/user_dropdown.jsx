import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session_actions";
import { showModal } from "../actions/modal_actions";

const UserDropdown = ({ logout, showModal }) => {
  return (
    <ul className="user-dropdown-list">
      <li className="user-dropdown-button" onClick={showModal}>
        Edit Profile
      </li>

      <li className="user-dropdown-button" onClick={logout}>
        Log Out
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  showModal: () => dispatch(showModal("construction"))
});

export default connect(null, mapDispatchToProps)(UserDropdown);
