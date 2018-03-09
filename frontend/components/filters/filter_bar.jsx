import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import GuestsFilter from "./guests_filter";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { box: null };
    this.handleClick = this.handleClick.bind(this);
    this.hideBox = this.hideBox.bind(this);
  }

  handleClick(box) {
    return e => {
      this.setState({ box });
    };
  }

  hideBox() {
    this.setState({ box: null });
  }

  render() {
    let Component = this.state.box ? this.state.box + "Filter" : null;
    Component = Component ? (
      <Component
        className={this.state.box}
        updateFilter={this.props.updateFilter}
      />
    ) : null;
    // debugger;
    return (
      <div>
        <div className="filter-bar">
          <div onClick={this.handleClick("Dates")} className="filter-button">
            Dates
          </div>
          <div onClick={this.handleClick("Guests")} className="filter-button">
            Guests
          </div>
          <div onClick={this.handleClick("Price")} className="filter-button">
            Price
          </div>
        </div>
        {Component && (
          <div className="everything-but-filter" onClick={this.hideBox}>
            <div onClick={e => e.stopPropagation()}>{Component}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.ui.filters });
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
