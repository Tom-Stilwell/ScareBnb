import React from "react";
import { Link } from "react-router-dom";
import ghost from "../../../app/assets/images/ghost.png";

const HomeIndexItem = ({ home }) => {
  // debugger;
  return (
    <div className="home-index-item-div">
      <Link to={`homes/${home.id}`}>
        <span>
          <img className="thumbnail-image-backup" src={ghost} />
          <img className="thumbnail-image" src={home.image_url} />
        </span>

        <div className="thumbnail-info">
          <span className="thumbnail-occupancy">
            {home.occupancy} people, {home.beds} beds
          </span>
          <span className="thumbnail-title">{home.title}</span>
          <span className="thumbnail-price">From ${home.price} per night</span>
        </div>
      </Link>
    </div>
  );
};

export default HomeIndexItem;
