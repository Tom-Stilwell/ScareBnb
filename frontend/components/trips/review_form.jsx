import React from "react";
import { withRouter } from "react-router-dom";
import ReactStars from "react-stars";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    const homeId = parseInt(params.get("home"));
    const rentalId = parseInt(params.get("rental"));
    // debugger;
    this.state = {
      body: "",
      reviewer_id: this.props.currentUser.id,
      home_id: homeId,
      accuracy_stars: 0,
      communication_stars: 0,
      cleanliness_stars: 0,
      location_stars: 0,
      checkin_stars: 0,
      value_stars: 0,
      rental_id: rentalId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  handleChange(field) {
    return rating => {
      // debugger;
      this.setState({ [field]: rating });
    };
  }

  handleType(e) {
    // debugger;
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.startLoading();
    this.props
      .createReview(this.state.home_id, this.state)
      .then(() => this.props.fetchCurrentUserInfo(this.props.currentUser.id))
      .then(this.props.hideModal)
      .then(() => this.props.stopLoading());
  }

  render() {
    return (
      <div className="review-form">
        <div className="review-form-content">
          <h1>Review your stay!</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="review-stars">
              <div className="star-cell">
                <span>Accuracy</span>
                <span>
                  <ReactStars
                    edit={true}
                    value={this.state.accuracy_stars}
                    color1={"#999999"}
                    color2={"#239090"}
                    size={20}
                    onChange={this.handleChange("accuracy_stars")}
                  />
                </span>{" "}
              </div>
              <div className="star-cell">
                <span>Location</span>
                <span>
                  <ReactStars
                    edit={true}
                    value={this.state.location_stars}
                    color1={"#999999"}
                    color2={"#239090"}
                    size={20}
                    onChange={this.handleChange("location_stars")}
                  />
                </span>{" "}
              </div>
              <div className="star-cell">
                <span>Communication</span>
                <span>
                  <ReactStars
                    edit={true}
                    value={this.state.communication_stars}
                    color1={"#999999"}
                    color2={"#239090"}
                    size={20}
                    onChange={this.handleChange("communication_stars")}
                  />
                </span>{" "}
              </div>
              <div className="star-cell">
                <span>Check In</span>
                <span>
                  <ReactStars
                    edit={true}
                    value={this.state.checkin_stars}
                    color1={"#999999"}
                    color2={"#239090"}
                    size={20}
                    onChange={this.handleChange("checkin_stars")}
                  />
                </span>{" "}
              </div>
              <div className="star-cell">
                <span>Cleanliness</span>
                <span>
                  <ReactStars
                    edit={true}
                    value={this.state.cleanliness_stars}
                    color1={"#999999"}
                    color2={"#239090"}
                    size={20}
                    onChange={this.handleChange("cleanliness_stars")}
                  />
                </span>{" "}
              </div>
              <div className="star-cell">
                <span>Value</span>
                <span>
                  <ReactStars
                    edit={true}
                    value={this.state.value_stars}
                    color1={"#999999"}
                    color2={"#239090"}
                    size={20}
                    onChange={this.handleChange("value_stars")}
                  />
                </span>{" "}
              </div>
            </div>
            <div className="review-form-body">
              <textarea
                value={this.state.body}
                onChange={this.handleType}
                placeholder="Comments..."
                rows="5"
                cols="50"
              />
            </div>
            <button className="submit-button">Submit Review</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
