import React from "react";
import ReactStars from "react-stars";

const ReviewsList = ({ reviews, stars }) => {
  return (
    <div className="reviews">
      <div className="reviews-header">
        <div className="reviews-header-length">{reviews.length} Reviews</div>
        <span>
          <ReactStars
            edit={false}
            value={stars.total}
            color1={"#999999"}
            color2={"#239090"}
            size={"30px"}
          />
        </span>
      </div>
      <div className="reviews-stars">
        <div className="star-cell">
          <span>Accuracy</span>
          <span>
            <ReactStars
              edit={false}
              value={stars.accuracy_stars}
              color1={"#999999"}
              color2={"#239090"}
              size={"24px"}
            />
          </span>{" "}
        </div>
        <div className="star-cell">
          <span>Location</span>
          <span>
            <ReactStars
              edit={false}
              value={stars.location_stars}
              color1={"#999999"}
              color2={"#239090"}
              size={"24px"}
            />
          </span>{" "}
        </div>
        <div className="star-cell">
          <span>Communication</span>
          <span>
            <ReactStars
              edit={false}
              value={stars.communication_stars}
              color1={"#999999"}
              color2={"#239090"}
              size={"24px"}
            />
          </span>{" "}
        </div>
        <div className="star-cell">
          <span>Check In</span>
          <span>
            <ReactStars
              edit={false}
              value={stars.checkin_stars}
              color1={"#999999"}
              color2={"#239090"}
              size={"24px"}
            />
          </span>{" "}
        </div>
        <div className="star-cell">
          <span>Cleanliness</span>
          <span>
            <ReactStars
              edit={false}
              value={stars.cleanliness_stars}
              color1={"#999999"}
              color2={"#239090"}
              size={"24px"}
            />
          </span>{" "}
        </div>
        <div className="star-cell">
          <span>Value</span>
          <span>
            <ReactStars
              edit={false}
              value={stars.value_stars}
              color1={"#999999"}
              color2={"#239090"}
              size={"24px"}
            />
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
