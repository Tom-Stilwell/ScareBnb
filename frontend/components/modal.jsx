import React from "react";
import { hideModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ReservationConfirmation from "./reservation_confirmation";

function Modal({ modal, hideModal, currentUser }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "reserve":
      component = <ReservationConfirmation currentUser={currentUser} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={hideModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
