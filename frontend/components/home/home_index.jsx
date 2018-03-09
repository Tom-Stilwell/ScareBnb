import React from "react";
import HomeIndexItem from "./home_index_item";

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchHomes();
  }

  render() {
    return (
      <div className="index-page">
        <div className="home-index-div">
          {this.props.homes.map(home => (
            <HomeIndexItem key={home.id} home={home} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomeIndex;
