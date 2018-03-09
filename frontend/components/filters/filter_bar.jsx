import React from "react";
import { connect } from "react-redux";
import { showBox } from "../../actions/box_actions";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(boxName) {
    return e => {
      this.showBox(boxName);
    };
  }

  render() {
    return (
      <div className="filter-bar">
        <div onClick={this.handleClick("dates")}>Dates</div>
        <div onClick={this.handleClick("guests")}>Guests</div>
        <div onClick={this.handleClick("price")}>Price</div>
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({ filters });
const mapDispatchToProps = dispatch => ({
  showBox: boxName => dispatch(showBox(boxName))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
