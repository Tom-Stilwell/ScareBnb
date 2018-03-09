import React from "react";
import HomeMap from "./map/home_map";
import HomeIndex from "./home/home_index";

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchHomes(this.props.filters);
  }

  render() {
    let { homes, updateFilter } = this.props;
    return (
      <div className="home-search">
        <header className="home-search-header">
          Home Search Filter Buttons!
        </header>
        <HomeIndex homes={homes} />
        <HomeMap className="map" homes={homes} updateFilter={updateFilter} />
      </div>
    );
  }
}

export default HomeSearch;
