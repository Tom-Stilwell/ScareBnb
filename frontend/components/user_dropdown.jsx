import React from "react";
import Dropdown from "react-simple-dropdown";

var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

const UserDropdown = props => {
  debugger;
  return (
    <Dropdown>
      <DropdownTrigger>
        <button type="button" className="session-button">
          User
        </button>
      </DropdownTrigger>
      <DropdownContent>
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
          <li>
            <a href="/logout">Log Out</a>
          </li>
        </ul>
      </DropdownContent>
    </Dropdown>
  );
};

export default UserDropdown;
