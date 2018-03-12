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

export const createRentalRequest = rental =>
  $.ajax({
    type: "POST",
    url: "/api/rentals",
    data: { rental }
  });

export const destroyRentalRequest = rentalId =>
  $.ajax({
    type: "DELETE",
    url: `/api/rentals/${rentalId}`
  });
