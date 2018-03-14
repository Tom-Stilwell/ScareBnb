import React from 'react';

const ReviewListItem = ({review}) => {
  return (
    <div className="review-list-item">
      <div className="review-header">
        <div className="review-author">
          {review.reviwer_id}
        </div>
        <div className="review-date">
          {review.created_at}
        </div>
      </div>
      <div className="review-body">
        {review.body}
      </div>
    </div>
  )

}
