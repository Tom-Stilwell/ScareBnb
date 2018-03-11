import React from "react";
import house1 from "../../app/assets/images/House1.jpg";
import house2 from "../../app/assets/images/House2.jpg";
import house3 from "../../app/assets/images/House3.jpg";
import amityHouse from "../../app/assets/images/amityHouse.jpg";
import welcome from "../../app/assets/images/welcome.jpg";
import SearchBar from "./search_bar";

const splash = props => {
  return (
    <div id="main-splash">
      <img className="first splash-img" src={house2} />
      <img className="third splash-img" src={house1} />
      <img className="second splash-img" src={house3} />
      <img className="bottom" src={welcome} />
      <div className="splash-text">
        Book spooky homes and experiences all over the world.
        <div className="splash-search" />
      </div>
    </div>
  );
};

export default splash;
