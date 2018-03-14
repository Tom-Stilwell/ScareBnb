import { connect } from "react-redux";

import HomeShow from "./home_show";

import { fetchHome } from "../../actions/home_actions";
import { selectRentals, selectReviews } from "../../reducers/selectors";
import { createRentalRequest } from "../../actions/rental_actions";
import { showModal } from "../../actions/modal_actions";
import { startLoading, stopLoading } from "../../actions/loading_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  const home = state.entities.homes[ownProps.match.params.id] || { stars: {} };
  return {
    home,
    rentals: selectRentals(state, home),
    reviews: selectReviews(state, home),
    currentUser: state.session.currentUser,
    rentalErrors: state.errors.rental,
    isLoading: state.ui.loading.homeShow

  };
};

const mapDispatchToProps = dispatch => ({
  fetchHome: homeId => dispatch(fetchHome(homeId)),
  showModal: modal => dispatch(showModal(modal)),
  createRentalRequest: (homeId, rental) =>
    dispatch(createRentalRequest(homeId, rental)),
  startLoading: component => dispatch(startLoading(component)),
  stopLoading: component => dispatch(stopLoading(component))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeShow);
