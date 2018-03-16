import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { fetchCurrentUserInfo } from "../../actions/user_actions";
import { startLoading, stopLoading } from "../../actions/loading_actions";
import ReviewForm from "./review_form";

const mapDispatchToProps = dispatch => ({
  createReview: (homeId, review) => dispatch(createReview(homeId, review)),
  fetchCurrentUserInfo: id => dispatch(fetchCurrentUserInfo(id)),
  startLoading: () => dispatch(startLoading("trips")),
  stopLoading: () => dispatch(stopLoading("trips"))
});

export default connect(null, mapDispatchToProps)(ReviewForm);
