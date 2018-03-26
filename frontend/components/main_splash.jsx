import React from "react";
import house1 from "../../app/assets/images/House1.jpg";
import house2 from "../../app/assets/images/House2.jpg";
import house3 from "../../app/assets/images/House3.jpg";
import amityHouse from "../../app/assets/images/amityHouse.jpg";
import welcome from "../../app/assets/images/welcome.jpg";
import SearchBar from "./search_bar";
import { Root } from "../util/route_util";
import SplashButton from "./splash_button";

const splash = props => {
  // debugger
  return (
    <div className="splash-page">
      <div id="main-splash">
        <img className="first splash-img" src={house2} />
        <img className="third splash-img" src={house1} />
        <img className="second splash-img" src={house3} />
        <img className="bottom" src={welcome} />
        <div className="splash-text">
          Book spooky homes and experiences all over the world.
        </div>
        <div className="splash-search">
          <Root
            path={props.match.path}
            exact={props.match.isExact}
            component={SearchBar}
          />
        </div>
      </div>
      <div className="splash-buttons">
        <SplashButton
          address={"Manhattan"}
          image={
            "https://hecktictravels.com/wp-content/uploads/2012/02/NYC-Nightlife-THUMBNAIL.jpg"
          }
        />
        <SplashButton
          address={"San Francisco"}
          image={
            "https://m73x5fonqg-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/thumbnail-san-francisco-2017-600x520.jpg"
          }
        />
        <SplashButton
          address={"Brooklyn"}
          image={
            "https://cdn1.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg"
          }
        />
        <SplashButton
          address={"Zimbabwe"}
          image={
            "https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Zimbabwe-Harare-122239086-GeraldMashonga-copy.jpg"
          }
        />
        <SplashButton
          address={"Transylvania"}
          image={
            "https://www.dailydot.com/wp-content/uploads/0ab/2f/MBSrwJM.jpg"
          }
        />
      </div>
    </div>
  );
};

export default splash;
