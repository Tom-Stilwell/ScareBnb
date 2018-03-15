import React from "react";
import { withRouter } from "react-router-dom";
import Modal from "../modal";
import ghost from "../../../app/assets/images/ghost.png";
import AuthRightNavBar from "./auth_right_navbar";
import ProtectedRightNavBar from "./protected_right_navbar";
import SearchBar from "../search_bar";
import { NotRoot } from "../../util/route_util";

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
    // debugger
    return (
      <div className="navbar">
        <div className="logo">
          <a href="/#/">
            <img src={ghost} alt={"ghost"} height="40px" width="40px" />
          </a>
        </div>

        <NotRoot
          exact={this.props.match.isExact}
          path={this.props.match.path}
          component={SearchBar}
        />

        {this.props.currentUser ? (
          <ProtectedRightNavBar
            showDropdown={this.props.showDropdown}
            showModal={this.props.showModal}
          />
        ) : (
          <AuthRightNavBar showModal={this.props.showModal} />
        )}
      </div>
    );
  }
}

export default withRouter(NavBar);
