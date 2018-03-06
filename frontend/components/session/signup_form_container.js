import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const errs = [];
  Object.keys(state.errors).map( err => {
    errs.push(err);
  });
  return ({
    errors: errs,
    formType: 'signup'
  });
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
