import React from "react";
import { Redirect } from "react-router-dom";
import TripItem from "./trip_item";
import Loader from "../loader";

class Trips extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.startLoading();
      this.props
        .fetchCurrentUserInfo(this.props.currentUser.id)
        .then(() => this.props.stopLoading());
    }
  }

  componentWillUnmount() {
    this.props.startLoading();
  }

  render() {
    if (!this.props.currentUser) {
      return <Redirect to="/" />;
    }
    if (this.props.isLoading) {
      return <Loader />;
    }

    const {
      currentUser,
      expiredRentals,
      upcomingRentals,
      homes,
      showReviewModal,
      destroyRental,
      fetchCurrentUserInfo
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
              destroyRental={destroyRental}
              fetchCurrentUserInfo={fetchCurrentUserInfo}
              currentUser={currentUser}
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
