import { hideModal, showModal } from "../actions/modal_actions";
import NavBar from "./navbar";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  component: state.ui.modal,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  showModal: component => dispatch(showModal(component)),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
