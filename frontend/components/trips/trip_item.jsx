import React from "react";
import { Link, withRouter } from "react-router-dom";

const TripItem = ({
  rental,
  home,
  showReviewModal,
  past,
  history,
  destroyRental,
  fetchCurrentUserInfo,
  currentUser
}) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let checkIn = new Date(rental.start_date);
  checkIn.setDate(checkIn.getDate() + 1);

  checkIn = checkIn.toLocaleDateString("en-US", dateOptions);

  let checkOut = new Date(rental.end_date);
  checkOut.setDate(checkOut.getDate() + 1);

  checkOut = checkOut.toLocaleDateString("en-US", dateOptions);

  const handleReviewClick = () => {
    history.push(`/trips?rental=${rental.id}&home=${home.id}`);
    showReviewModal();
  };

  const handleCancel = () => {
    destroyRental(rental.id).then(() => fetchCurrentUserInfo(currentUser.id));
  };

  let review;
  let destroy;
  if (past) {
    if (rental.reviewed) {
      review = (
        <div className="already-reviewed">You have reviewed this stay.</div>
      );
    } else {
      review = (
        <div className="needs-review">
          {" "}
          Please <span onClick={handleReviewClick}>review</span> your stay
        </div>
      );
    }
  } else {
    destroy = (
      <div className="cancel-rental">
        <span onClick={handleCancel}>Cancel Rental</span>
      </div>
    );
  }

  return (
    <div className="trip-item">
      <div className="trip-item-content">
        <img className="trip-thumbnail" src={home.image_url} />
        <div className="trip-info">
          <div className="trip-home-title">
            <Link to={`/homes/${home.id}`}>{home.title}</Link>
          </div>
          <p>
            Check{past ? "ed" : null} In: <span>{checkIn}</span>
          </p>
          <p>
            Check{past ? "ed" : null} Out: <span>{checkOut}</span>
          </p>
          {review}
          {destroy}
        </div>
      </div>
    </div>
  );
};

export default withRouter(TripItem);
