import React from "react";
import { connect } from "react-redux";

const ReservationConfirmation = ({ currentUser }) => (
  <div className="confirmation-content">
    <div className="confirmation-thanks">Thank you for your reservation!</div>
    <div className="confirmation-email">
      An email has been sent to {`${currentUser.email}`} with the details of
      your stay.
    </div>
  </div>
);

export default ReservationConfirmation;
