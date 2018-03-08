import React from "react";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => {
  const errs = [];
  Object.values(state.errors.session).map(err => {
    errs.push(err);
  });
  return {
    errors: errs,
    formType: "Log In"
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <span class="other-form-link" onClick={() => dispatch(showModal("signup"))}>
      Sign Up
    </span>
  ),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
