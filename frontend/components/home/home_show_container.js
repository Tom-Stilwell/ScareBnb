import { connect } from "react-redux";

import HomeShow from "./home_show";

import { fetchHome } from "../../actions/home_actions";

const mapStateToProps = (state, ownProps) => ({
  home: state.entities.homes[ownProps.match.params.id]
});
