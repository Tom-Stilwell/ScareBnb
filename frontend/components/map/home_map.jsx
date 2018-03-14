import React from "react";
import MarkerManager from "../../util/marker_manager";
import { withRouter } from "react-router-dom";

class HomeMap extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.props.updateFilter.bind(this);
    this.lat = 0;
    this.lng = 0;
    this.state = { isLoading: true };
  }

  componentDidMount() {
    let homes = this.props.homes;
    // debugger;
    // let lat, lng;
    if (!!this.props.location.search) {
      const search = this.props.location.search;
      const params = new URLSearchParams(search);
      this.lat = parseFloat(params.get("lat"));
      this.lng = parseFloat(params.get("lng"));
      // debugger;
    } else {
      this.lat = 40.765302;
      this.lng = -73.982688;
    }
    const mapOptions = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 13,
      clickableIcons: false
    };
    // debugger;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(homes);
    const that = this;
    this.map.addListener("idle", () => {
      const mapBounds = this.map.getBounds();
      const northEast = mapBounds.getNorthEast().toString();
      const southWest = mapBounds.getSouthWest().toString();
      const boundsObj = { northEast, southWest };
      this.updateFilter("bounds", boundsObj).then(() => {
        // debugger;
        that.setState({ isLoading: false });
      });
    });

    // this.map.addListener("click", (e) => {
    //   const latLng = e.latLng.toString().slice(1,-1).split(", ");
    //   // debugger
    //   this._handleClick(latLng);
    //
    // });
  }
  //
  // _handleClick(coords){
  //   this.props.history.push({
  //     pathname: "benches/new",
  //     search: `lat=${coords[0]}&lng=${coords[1]}`
  //   });
  // }
  //
  componentWillReceiveProps({ homes, location }) {
    const oldLat = this.lat;
    const oldLng = this.lng;
    const search = location.search;
    const params = new URLSearchParams(search);
    this.lat = parseFloat(params.get("lat"));
    this.lng = parseFloat(params.get("lng"));

    // debugger;
    if (this.lat && (this.lat !== oldLat || this.lng !== oldLng)) {
      this.map.setCenter({ lat: this.lat, lng: this.lng });
    }
    this.MarkerManager.updateMarkers(homes);
  }

  render() {
    const loading = this.state.isLoading ? (
      <div className="loader-background">
        <div className="loader" />
      </div>
    ) : null;
    // debugger;
    return (
      <div id="map-fix">
        <div id="home-map-container" ref={map => (this.mapNode = map)} />
        {loading}
      </div>
    );
  }
}

export default withRouter(HomeMap);
