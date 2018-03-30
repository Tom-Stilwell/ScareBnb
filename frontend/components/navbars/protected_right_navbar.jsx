import React from "react";
import Modal from "../modal";
import Dropdown from "../dropdown";
import { withRouter } from "react-router-dom";

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
                onClick={() => this.props.history.push("/trips")}
                className="session-button"
              >
                Trips
              </button>
            </div>
            <div className="help-div">
              <button
                type="button"
                onClick={() => this.props.showModal("construction")}
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

export default withRouter(ProtectedRightNavBar);
