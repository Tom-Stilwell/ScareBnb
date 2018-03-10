import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import GuestsFilter from "./guests_filter";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: null,
      dates: "Dates",
      minGuests: "Guests",
      price: "Price"
    };
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
    let component;

    if (this.state.box === "Guests") {
      component = (
        <GuestsFilter
          updateFilter={this.props.updateFilter}
          hideBox={this.hideBox}
          minGuests={this.props.filters.minGuests}
        />
      );
    }

    return (
      <div>
        <div className="filter-bar">
          <div
            onClick={this.handleClick("Dates")}
            className={
              this.state.box === "Dates"
                ? "filter-button selected"
                : "filter-button"
            }
          >
            {this.state.dates}
          </div>
          <div
            onClick={this.handleClick("Guests")}
            className={
              this.state.box === "Guests"
                ? "filter-button selected"
                : "filter-button"
            }
          >
            {this.state.minGuests}
          </div>
          <div
            onClick={this.handleClick("Price")}
            className={
              this.state.box === "Dates"
                ? "filter-button selected"
                : "filter-button"
            }
          >
            {this.state.price}
          </div>
        </div>
        {component && (
          <div className="everything-but-filter" onClick={this.hideBox}>
            <div onClick={e => e.stopPropagation()}>{component}</div>
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
