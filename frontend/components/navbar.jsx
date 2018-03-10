import React from "react";
import Modal from "./modal";
import ghost from "../../app/assets/images/ghost.png";
import AuthRightNavBar from "./auth_right_navbar";
import ProtectedRightNavBar from "./protected_right_navbar";
import SearchBar from "./search_bar";

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
    // debugger;
    return (
      <div className="navbar">
        <div className="logo">
          <a href="/#/">
            <img src={ghost} alt={"ghost"} height="40px" width="40px" />
          </a>
        </div>
        <SearchBar />

        {this.props.currentUser ? (
          <ProtectedRightNavBar showDropdown={this.props.showDropdown} />
        ) : (
          <AuthRightNavBar showModal={this.props.showModal} />
        )}
      </div>
    );
  }
}

export default NavBar;
