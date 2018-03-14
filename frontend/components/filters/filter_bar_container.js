import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import { startLoading, stopLoading } from "../../actions/loading_actions";

import FilterBar from "./filter_bar";

const mapStateToProps = state => ({
  filters: state.ui.filters
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  startLoading: () => dispatch(startLoading("homeSearch")),
  stopLoading: () => dispatch(stopLoading("homeSearch"))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
