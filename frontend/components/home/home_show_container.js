import { connect } from "react-redux";

import HomeShow from "./home_show";

import { fetchHome } from "../../actions/home_actions";
import { selectRentals } from "../../reducers/selectors";
import { createRentalRequest } from "../../actions/rental_actions";

const mapStateToProps = (state, ownProps) => {
  const home = state.entities.homes[ownProps.match.params.id];

  return {
    home,
    rentals: selectRentals(state, home),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHome: homeId => dispatch(fetchHome(homeId)),
  createRentalRequest: (homeId, rental) =>
    dispatch(createRentalRequest(homeId, rental))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeShow);
