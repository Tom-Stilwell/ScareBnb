import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalSignUp from './modal_signup';
import ModalLogIn from './modal_login';
import ghost from "../../app/assets/images/ghost.png";

// console.log(ghost);

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/#/" ><img src={ghost} alt={"ghost"} height="40px" width="40px"/></a>
      </div>

      <div className="right-navbar">
        <ul className="right-navbar-list">
          <li><ModalSignUp /></li>
          <li><ModalLogIn /></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
