import { connect } from "react-redux";
import { hideModal, showModal } from "../../actions/modal_actions";
import { hideDropdown, showDropdown } from "../../actions/dropdown_actions";
import NavBar from "./navbar";


const mapStateToProps = (state, ownProps) => ({
  component: state.ui.modal,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  showModal: component => dispatch(showModal(component)),
  hideModal: () => dispatch(hideModal()),
  showDropdown: component => dispatch(showDropdown(component)),
  hideDropdown: component => dispatch(hideDropdown(component))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
