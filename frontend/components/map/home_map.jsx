import React from "react";
import MarkerManager from "../../util/marker_manager";
import { withRouter } from "react-router-dom";

class HomeMap extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.props.updateFilter.bind(this);
    // this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    let homes = this.props.homes;

    const mapOptions = {
      center: { lat: 40.765302, lng: -73.982688 },
      zoom: 13,
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(homes);

    this.map.addListener("idle", () => {
      const mapBounds = this.map.getBounds();
      const northEast = mapBounds.getNorthEast().toString();
      const southWest = mapBounds.getSouthWest().toString();
      const boundsObj = { northEast, southWest };
      this.updateFilter("bounds", boundsObj);
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
  componentWillReceiveProps(props) {
    this.MarkerManager.updateMarkers(props.homes);
  }

  render() {
    return (
      <div id="map-fix">
        <div id="home-map-container" ref={map => (this.mapNode = map)} />
      </div>
    );
  }
}

export default withRouter(HomeMap);
