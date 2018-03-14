import React from "react";
import Modal from "../modal";


class AuthRightNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    return () => {
      this.props.showModal(field);
    };
  }

  render() {
    return (
      <div className="right-navbar">
        <ul className="right-navbar-list">
          <div className="signup-div">
            <button
              type="button"
              onClick={this.handleClick("signup")}
              className="session-button"
            >
              Sign Up
            </button>
          </div>
          <div className="login-div">
            <button
              type="button"
              onClick={this.handleClick("login")}
              className="session-button"
            >
              Log In
            </button>
          </div>
        </ul>
      </div>
    );
  }
}

export default AuthRightNavBar;
