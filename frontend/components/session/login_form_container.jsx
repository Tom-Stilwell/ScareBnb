import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const errs = [];
  Object.keys(state.errors).map( err => {
    errs.push(err);
  });
  return ({
    errors: errs,
    formType: 'Log In'
  });
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
  closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
