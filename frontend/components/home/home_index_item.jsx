import React from 'react';
import { Link } from 'react-router-dom';

const HomeIndexItem = ({ home }) => {
  return (
    <Link to={`homes/${home.id}`}>
      <span className="thumbnail-occupancy">{home.occupancy} people, {home.beds} beds</span>
      <span className="thumbnail-title">{home.title}</span>
      <span className="thumbnail-price">From ${home.price} per night</span>
    </Link>
  );

};

export default HomeIndexItem;
