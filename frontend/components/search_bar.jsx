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
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById("searchInput");
    const options = { types: ["(regions)"] };
    const autocomplete = new google.maps.places.Autocomplete(input, options);

    let address;
    autocomplete.addListener("place_changed", e => {
      if (!autocomplete.getPlace().formatted_address) {
        address = autocomplete.getPlace().name;
        this.setState({ search: address });
        this.handleSubmit(address);
      } else {
        address = autocomplete.getPlace().formatted_address;
        this.setState({ search: address });
        this.handleSubmit(address);
      }
    });
  }

  handleUpdate(e) {
    this.setState({ search: e.target.value });
  }

  handleClear(e) {
    this.setState({ search: "" });
  }

  handleSubmit(address) {
    // if (e.key !== "Enter") {
    //   return;
    // }
    const geocoder = new google.maps.Geocoder();
    // let address;

    // if (!this.autocomplete.getPlace().formatted_address) {
    //   address = this.autocomplete.getPlace().name;
    // } else {
    //   address= this.autocomplete.getPlace().formatted_address;
    // }

    geocoder.geocode({ address: address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        this.props.history.push(`/homes?lat=${lat}&lng=${lng}`);
      }
    });
  }

  render() {
    let closer;
    let className = "search-bar";
    if (this.state.search.length > 0) {
      closer = (
        <div className="closer" onClick={this.handleClear}>
          x
        </div>
      );
    }

    // debugger

    return (
      <div className={className} onSubmit={this.handleSubmit}>
        <div className="magnifying-glass-div">
          <i className="material-icons magnifying-glass">search</i>
        </div>
        <input
          id="searchInput"
          type="text"
          className="search-bar-input"
          value={this.state.search}
          placeholder="Anywhere &middot; Homes"
          onChange={this.handleUpdate}
          autoComplete="on"
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
