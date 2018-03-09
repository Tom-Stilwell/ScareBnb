import { connect } from "react-redux";
import React from "react";
import { selectAllHomes } from "../reducers/selectors";
import { fetchHomes } from "../actions/home_actions";
import { updateFilter } from "../actions/filter_actions";

import HomeSearch from "./home_search";

const mapStateToProps = (state, ownProps) => ({
  homes: selectAllHomes(state),
  filters: state.ui.filters
});

const mapDispatchToProps = dispatch => ({
  fetchHomes: filters => dispatch(fetchHomes(filters)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);
