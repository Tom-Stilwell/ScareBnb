import React from "react";
import house1 from "../../app/assets/images/House1.jpg";
import house2 from "../../app/assets/images/House2.jpg";
import house3 from "../../app/assets/images/House3.jpg";
import amityHouse from "../../app/assets/images/amityHouse.jpg";
import welcome from "../../app/assets/images/welcome.jpg";

const splash = props => {
  return (
    <div id="main-splash">
      <img className="first splash-img" src={house1} />
      <img className="third splash-img" src={house2} />
      <img className="second splash-img" src={house3} />
      <img className="bottom" src={welcome} />
    </div>
  );
};

export default splash;
