import React from "react";

class HomeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchHome(this.props.match.params.id);
  }

  render() {
    // debugger;
    const home = this.props.home;

    if (!home) {
      return <div>...LOADING...</div>;
    }

    const title = home.title;
    const price = home.price;
    const beds = home.beds;
    const baths = home.baths;
    const occupancy = home.occupancy;
    const image_url = home.image_url;
    const lat = home.lat;

    return (
      <div className="home-show-page">
        <div className="home-show-image-container">
          <div className="left-gradient" />
          <img className="home-show-image" src={image_url} />
          <div className="right-gradient" />
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
              <span>{occupancy} guests</span>
            </div>
            <div className="icon">
              <i className="material-icons">hotel</i>
              <span>{beds} beds</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeShow;
