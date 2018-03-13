import * as ReviewApiUtil from "../util/review_api_util";
// import { receiveReviewErrors } from "./error_actions";
import { fetchHome } from "./home_actions";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const createReview = (homeId, review) => dispatch =>
  ReviewApiUtil.createReview(homeId, review).then(
    response => dispatch(fetchHome(response.home_id))
    // errors => dispatch(receiveReviewErrors(errors))
  );

export const destroyReview = reviewId => dispatch =>
  ReviewApiUtil.destroyReviewRequest(reviewId).then(id =>
    dispatch(removeReview(id))
  );
