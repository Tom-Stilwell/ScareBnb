import { connect } from "react-redux";
import { fetchCurrentUserInfo } from "../../actions/user_actions";
import { showModal } from "../../actions/modal_actions";
import {
  selectExpiredRentals,
  selectUpcomingRentals
} from "../../reducers/selectors";
import { startLoading, stopLoading } from "../../actions/loading_actions";
import { destroyRental } from "../../actions/rental_actions";

import Trips from "./trips";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    expiredRentals: selectExpiredRentals(state, currentUser),
    upcomingRentals: selectUpcomingRentals(state, currentUser),
    homes: state.entities.homes,
    isLoading: state.ui.loading.trips
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentUserInfo: id => dispatch(fetchCurrentUserInfo(id)),
  showReviewModal: () => dispatch(showModal("review")),
  startLoading: () => dispatch(startLoading("trips")),
  stopLoading: () => dispatch(stopLoading("trips")),
  destroyRental: rentalId => dispatch(destroyRental(rentalId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
