import React from "react";
import { Redirect } from "react-router-dom";
import TripItem from "./trip_item";

class Trips extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchCurrentUserInfo(this.props.currentUser.id);
    }
  }

  render() {
    if (!this.props.currentUser) {
      return <Redirect to="/" />;
    }

    const {
      currentUser,
      expiredRentals,
      upcomingRentals,
      homes,
      showReviewModal
    } = this.props;
    return (
      <div className="trips-page">
        <div className="your-trips">Your Trips</div>
        <div className="trips-category-containers">
          <span className="trips-header">Upcoming Trips</span>
          {upcomingRentals.length === 0 ? (
            <div className="no-trips">No trips to show.</div>
          ) : null}
          {upcomingRentals.map(rental => (
            <TripItem
              key={rental.id}
              rental={rental}
              home={homes[rental.home_id]}
              past={false}
            />
          ))}
        </div>
        <div className="trips-category-containers">
          <span className="trips-header">Past Trips</span>
          {expiredRentals.length === 0 ? (
            <div className="no-trips">No trips to show.</div>
          ) : null}
          {expiredRentals.map(rental => (
            <TripItem
              key={rental.id}
              rental={rental}
              home={homes[rental.home_id]}
              showReviewModal={showReviewModal}
              past={true}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Trips;
