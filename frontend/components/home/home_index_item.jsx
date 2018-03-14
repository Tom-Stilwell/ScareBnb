import React from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import ghost from "../../../app/assets/images/ghost.png";

const HomeIndexItem = ({ home }) => {
  return (
    <div className="home-index-item-div">
      <Link to={`homes/${home.id}`}>
        <span>
          <img className="thumbnail-image-backup" src={ghost} />
          <img className="thumbnail-image" src={home.image_url} />
        </span>

        <div className="thumbnail-info">
          <span className="thumbnail-occupancy">
            {home.occupancy} {home.occupancy > 1 ? "people" : "person"}, {home.beds} bed{home.beds > 1 ? "s" : null}
          </span>
          <span className="thumbnail-title">{home.title}</span>
          <span className="thumbnail-price">From ${home.price} per night</span>
          <span><ReactStars
            edit={false}
            value={home.stars.total}
            color1={"#999999"}
            color2={"#239090"}
            size={10}
          /></span>
        </div>
      </Link>
    </div>
  );
};

export default HomeIndexItem;
