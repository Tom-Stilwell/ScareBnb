import React from "react";
import { withRouter } from "react-router-dom";

const SplashButton = props => {
  const handleClick = props => () => {
    const geocoder = new google.maps.Geocoder();
    let address = props.address;
    address = address === "Transylvania" ? "Transylvania Romania" : address;

    geocoder.geocode({ address: address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        props.history.push(`/homes?lat=${lat}&lng=${lng}`);
      }
    });
  };

  return (
    <div className="splash-button" onClick={handleClick(props)}>
      <div className="splash-button-content">
        <img src={props.image} />
        <div className="splash-button-text"> See homes in {props.address}</div>
      </div>
    </div>
  );
};

export default withRouter(SplashButton);
