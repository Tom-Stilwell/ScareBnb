import React from "react";
import Modal from "./modal";
import ghost from "../../app/assets/images/ghost.png";
import UserDropdown from "./user_dropdown";

// console.log(ghost);

class ProtectedRightNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    return () => {
      console.log(field);
    };
  }

  render() {
    return (
      <div className="right-navbar">
        <ul className="right-navbar-list">
          <div className="trips-div">
            <button
              type="button"
              onClick={this.handleClick("trips")}
              className="session-button"
            >
              Trips
            </button>
          </div>
          <div className="messages-div">
            <button
              type="button"
              onClick={this.handleClick("messages")}
              className="session-button"
            >
              Messages
            </button>
          </div>
          <div className="help-div">
            <button
              type="button"
              onClick={this.handleClick("help")}
              className="session-button"
            >
              Help
            </button>
          </div>
          <div className="user-icon-div">
            <UserDropdown />
          </div>
        </ul>
      </div>
    );
  }
}

export default ProtectedRightNavBar;
