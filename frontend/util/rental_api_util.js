export const fetchHomeRentals = homeId =>
  $.ajax({
    type: "GET",
    url: `/api/homes/${homeId}/rentals`
  });

export const fetchUserRentals = userId =>
  $.ajax({
    type: "GET",
    url: `/api/users/${userId}/rentals`
  });

export const createRentalRequest = (homeId, rental) =>
  $.ajax({
    type: "POST",
    url: `/api/homes/${homeId}/createRental`,
    data: { rental }
  });

export const destroyRentalRequest = rentalId =>
  $.ajax({
    type: "DELETE",
    url: `/api/rentals/${rentalId}`
  });
