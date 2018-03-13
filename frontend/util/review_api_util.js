export const createReview = (homeId, review) =>
  $.ajax({
    type: "POST",
    url: `/api/homes/${homeId}/createRental`,
    data: { review }
  });

export const destroyRentalRequest = reviewId =>
  $.ajax({
    type: "DELETE",
    url: `/api/rentals/${reviewId}`
  });
