import React from "react";
import RentalRequestForm from "./rental_request_form";
import ReviewsList from "./reviews_list";
import Loader from "../loader";

class HomeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.startLoading("homeShow");
    this.props.fetchHome(this.props.match.params.id)
    .then(() => this.props.stopLoading("homeShow"));
  }

  componentWillReceiveProps(newProps) {
    // debugger;
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.startLoading("homeShow");
      this.props.fetchHome(newProps.match.params.id)
      .then(() => this.props.stopLoading("homeShow"));
    }
  }

  render() {

    if (this.props.isLoading) {
      return <Loader />;
    }

    const home = this.props.home;

    // debugger;
    const title = home.title;
    const price = home.price;
    const beds = home.beds;
    const baths = home.baths;
    const occupancy = home.occupancy;
    const imageUrl = home.image_url;
    const lat = home.lat;
    const description = home.description;
    const rentals = this.props.rentals;
    const stars = home.stars || {};
    const reviews = this.props.reviews;

    return (
      <div className="home-show-page">
        <div className="home-show-image-container">
          <div className="trees" />
          <div
            className="home-show-image"
            style={{ backgroundImage: "url(" + imageUrl + ")" }}
          />
        </div>
        <div className="home-show-info">
          <div className="info-header">
            <div className="info-space">ENTIRE HOME</div>
            <div className="info-title">{title}</div>
            <div className="info-location">New York</div>
          </div>
          <div className="icon-section">
            <div className="icon">
              <i className="material-icons">people</i>
              <span>
                {occupancy} guest{occupancy > 1 ? "s" : ""}
              </span>
            </div>
            <div className="icon">
              <i className="material-icons">hotel</i>
              <span>
                {beds} bed{beds > 1 ? "s" : ""}
              </span>
            </div>
            <div className="icon">
              <i className="material-icons">spa</i>
              <span>
                {baths} bath{baths > 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <div className="description">{description}</div>
          <div className="contact-host">Contact host</div>
        </div>
        <ReviewsList stars={stars} reviews={reviews} />
        <RentalRequestForm
          price={price}
          createRentalRequest={this.props.createRentalRequest}
          rentals={rentals}
          currentUser={this.props.currentUser}
          homeId={home.id}
          occupancy={occupancy}
          showModal={this.props.showModal}
          rentalErrors={this.props.rentalErrors}
        />
      </div>
    );
  }
}

export default HomeShow;
