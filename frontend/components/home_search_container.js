import { connect } from "react-redux";
import React from "react";
import { selectAllHomes } from "../reducers/selectors";
import { fetchHomes } from "../actions/home_actions";

import HomeSearch from "./home_search";

const mapStateToProps = (state, ownProps) => ({
  homes: selectAllHomes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchHomes: filters => dispatch(fetchHomes(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);
