import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../actions/filter_actions";
import { withRouter } from "react-router";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    if (e.key !== "Enter") {
      return;
    }
    const geocoder = new google.maps.Geocoder();
    const address = e.target.value;
    // debugger;

    geocoder.geocode({ address: address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        this.props.updateFilter("location", { lat, lng });
        this.props.updateFilter("bounds", {
          northEast: `(${lat + 0.045525522}, ${lng + 0.051498413})`,
          southWest: `(${lat - 0.045556671}, ${lng - 0.051498413})`
        });
      }
    });
    this.props.history.push("/homes");
  }

  render() {
    let closer;

    return (
      <div className="search-bar" onSubmit={this.handleSubmit}>
        <div className="magnifying-glass">
          <img />
        </div>
        <input
          type="text"
          placeholder="Anywhere &middot; Homes"
          onChange={this.handleUpdate}
          onKeyPress={this.handleSubmit}
        />
        {closer}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
