import { connect } from 'react-redux';

import HomeDetail from './home_detail';

import { fetchHome } from "../../actions/home_actions";

const mapStateToProps = (state, ownProps) => {
  const home = state.entities.homes[ownProps.match.params.id];
};
