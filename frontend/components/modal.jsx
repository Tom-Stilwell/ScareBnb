import React from "react";
import { hideModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import LoginForm from "./session/login_form_container";
import SignupForm from "./session/signup_form_container";
import ReservationConfirmation from "./reservation_confirmation";
import Construction from "./construction";
import ReviewForm from "./trips/review_form_container";

const Modal = ({ modal, hideModal, currentUser }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginForm />;
      break;
    case "signup":
      component = <SignupForm />;
      break;
    case "reserve":
      component = <ReservationConfirmation currentUser={currentUser} />;
      break;
    case "review":
      component = (
        <ReviewForm currentUser={currentUser} hideModal={hideModal} />
      );
      break;
    case "construction":
      component = <Construction hideModal={hideModal} />;
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
};

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
