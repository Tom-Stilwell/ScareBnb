import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalSignUp from './modal_signup';
import ModalLogIn from './modal_login';

const NavBar = (props) => {
  return (
    <div>
      <ul className="navbar">
        <li><ModalSignUp /></li>
        <li><ModalLogIn /></li>
      </ul>
    </div>
  );
};

export default NavBar;
