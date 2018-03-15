import { connect } from "react-redux";
import { fetchCurrentUserInfo } from "../../actions/user_actions";
import { showModal } from "../../actions/modal_actions";
import {
  selectExpiredRentals,
  selectUpcomingRentals
} from "../../reducers/selectors";

import Trips from "./trips";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    expiredRentals: selectExpiredRentals(state, currentUser),
    upcomingRentals: selectUpcomingRentals(state, currentUser),
    homes: state.entities.homes
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentUserInfo: id => dispatch(fetchCurrentUserInfo(id)),
  showReviewModal: () => dispatch(showModal("review"))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
