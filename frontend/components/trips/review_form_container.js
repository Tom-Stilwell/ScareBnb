import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { fetchCurrentUserInfo } from "../../actions/user_actions";
import ReviewForm from "./review_form";

const mapDispatchToProps = dispatch => ({
  createReview: (homeId, review) => dispatch(createReview(homeId, review)),
  fetchCurrentUserInfo: id => dispatch(fetchCurrentUserInfo(id))
});

export default connect(null, mapDispatchToProps)(ReviewForm);
