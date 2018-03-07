import React from "react";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { hideModal, showModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const errs = [];
  Object.values(state.errors.session).map(err => {
    errs.push(err);
  });
  return {
    errors: errs,
    formType: "Sign Up"
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <span
      className="other-form-link"
      onClick={() => dispatch(showModal("login"))}
    >
      Log In
    </span>
  ),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
