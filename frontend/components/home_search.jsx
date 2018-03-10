import React from "react";
import HomeMap from "./map/home_map";
import HomeIndex from "./home/home_index";
import FilterBar from "./filters/filter_bar";

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchHomes(this.props.filters);
  }

  render() {
    let { homes, updateFilter, filters } = this.props;
    return (
      <div className="home-search">
        <FilterBar />
        <HomeIndex homes={homes} />
        <HomeMap
          className="map"
          homes={homes}
          updateFilter={updateFilter}
          center={filters.location}
        />
      </div>
    );
  }
}

export default HomeSearch;
