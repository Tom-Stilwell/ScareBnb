import React from 'react';
import Modal from "./modal";
import ghost from "../../app/assets/images/ghost.png";

// console.log(ghost);

class NavBar extends React.Component {
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
    <div className="navbar">
      <div className="logo">
        <a href="/#/" ><img src={ghost} alt={"ghost"} height="40px" width="40px"/></a>
      </div>

      <div className="right-navbar">
        <ul className="right-navbar-list">
          <button type="button" onClick={this.handleClick("signup")} className="session-button">Sign Up</button>
          <button type="button" onClick={this.handleClick("login")} className="session-button">Log In</button>
        </ul>
      </div>
    </div>
  );
  }
}

export default NavBar;
