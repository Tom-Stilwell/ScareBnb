import * as RentalApiUtil from "../util/rental_api_util";
import { receiveRentalErrors } from "./error_actions";
import { fetchHome } from "./home_actions";

export const RECEIVE_RENTAL = "RECEIVE_RENTAL";
export const RECEIVE_RENTALS = "RECEIVE_RENTALS";
export const REMOVE_RENTAL = "REMOVE_RENTAL";

export const receiveRental = rental => ({
  type: RECEIVE_RENTAL,
  rental
});

// export const receiveRentals = rentals => ({
//   type: RECEIVE_RENTALS,
//   rentals
// });

export const removeRental = rentalId => ({
  type: REMOVE_RENTAL,
  rentalId
});

// export const fetchHomeRentals = homeId => dispatch =>
//   RentalApiUtil.fetchHomeRentals(homeId).then(rentals =>
//     dispatch(receiveRentals(rentals))
//   );

export const createRentalRequest = (rental, homeId) => dispatch =>
  RentalApiUtil.createRentalRequest(rental, homeId).then(
    response => dispatch(fetchHome(response.home_id)),
    errors => dispatch(receiveRentalErrors(errors))
  );

export const destroyRental = rentalId => dispatch =>
  RentalApiUtil.destroyRentalRequest(rentalId).then(id =>
    dispatch(removeRental(id))
  );
