import React from "react";
import HomeIndexItem from "./home_index_item";

const HomeIndex = ({homes}) => {
  const noHomes = homes.length === 0 ? <div className="no-homes">There are no homes to select in this area.</div> : null
    return (
      <div className="index-page">
        <div className="home-index-div">
          {noHomes}
          {homes.map(home => (
            <HomeIndexItem key={home.id} home={home} />
          ))}
        </div>
      </div>
    );
};

export default HomeIndex;
