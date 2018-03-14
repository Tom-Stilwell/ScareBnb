import React from "react";
import Modal from "../modal";
import Dropdown from "../dropdown";

class ProtectedRightNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    return () => {
      this.props.showDropdown(field);
    };
  }

  render() {
    return (
      <div>
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
              <button
                type="button"
                onClick={this.handleClick("user")}
                className="session-button"
              >
                User
              </button>
            </div>
          </ul>
        </div>
        <div className="nav-dropdown">
          <Dropdown />
        </div>
      </div>
    );
  }
}

export default ProtectedRightNavBar;
