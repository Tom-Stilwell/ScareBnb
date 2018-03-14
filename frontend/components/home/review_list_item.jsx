import React from 'react';
import ghost from "../../../app/assets/images/ghost.png";

const ReviewListItem = ({review, reviewer}) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const randomColor = ["#ccffb3", "#ecb3ff", "#b3f0ff", "#ffffcc" ,"#ffcce6", "#ffd9b3", "#f2f2f2"][Math.floor(Math.random() * 7)];
  const style = {backgroundColor: randomColor};
  const createdAt = new Date(review.created_at);
  // debugger
  return (
    <div className="review-list-item">
      <div className="review-header">
        <div className="reviewer-thumbnail-div" style={style}>
          <img className="reviewer-thumbnail" src={ghost} />
        </div>
        <div className="review-info">
          <div className="review-author-name">
            {reviewer.fname + " " + reviewer.lname}
          </div>
          <div className="review-date">
            {`${months[createdAt.getMonth()]}` + " " + `${createdAt.getFullYear()}`}
          </div>
        </div>
      </div>
      <div className="review-body">
        {review.body}
      </div>
    </div>
  )

}

export default ReviewListItem;
