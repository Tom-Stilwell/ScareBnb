import React from "react";
import HomeIndexItem from "./home_index_item";

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.homes.map(home => (
            <li key={home.id}>
              <HomeIndexItem home={home} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomeIndex;
