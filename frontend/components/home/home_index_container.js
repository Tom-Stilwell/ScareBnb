import { connect } from "react-redux";
import React from "react";
import { selectAllHomes } from "../../reducers/selectors";

import HomeIndex from "./home_index";

const mapStateToProps = (state, ownProps) => ({
  homes: selectAllHomes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchHomes: filters => dispatch(fetchHomes(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
