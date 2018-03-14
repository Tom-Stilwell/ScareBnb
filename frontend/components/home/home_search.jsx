import React from "react";
import HomeMap from "../map/home_map";
import HomeIndex from "./home_index";
import FilterBar from "../filters/filter_bar_container";
import Loader from "../loader";
import If from '../../util/If';

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);

    this.updateBounds = this.updateBounds.bind(this);
  }

  updateBounds(bounds) {
    this.props.startLoading();

    this.props.updateFilter("bounds", bounds)
      .then(() => this.props.stopLoading());
  }

  render() {
    let { homes, filters, isLoading, startLoading, stopLoading } = this.props;

    // const searchContent = isLoading ? <Loader /> : <HomeIndex homes={homes} />;

    return (
      <div className="home-search">
        <FilterBar />
        <If
          condition={isLoading}
          then={<Loader />}
          else={<HomeIndex homes={homes} />}
        />
        <HomeMap className="map" homes={homes} updateBounds={this.updateBounds} startLoading={startLoading} stopLoading={stopLoading} />
      </div>
    );
  }

  componentWillUnmount() {
    this.props.startLoading();
  }
}

export default HomeSearch;
