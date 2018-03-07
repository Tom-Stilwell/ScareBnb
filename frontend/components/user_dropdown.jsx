import React from "react";
import { connect } from "react-redux";

const UserDropdown = props => {
  return (
    <ul className="user-dropdown-list">
      <li className="user-dropdown-button">Edit Profile</li>
      <li className="user-dropdown-button">Travel Credit</li>
      <li className="user-dropdown-button">Account Settings</li>
      <li className="user-dropdown-button">My GuideBook</li>
      <li className="user-dropdown-button">Gift Cards</li>
      <li className="user-dropdown-button">Scarebnb for Work</li>
      <li className="user-dropdown-button" onClick={props.logout}>
        Log Out
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(UserDropdown);
