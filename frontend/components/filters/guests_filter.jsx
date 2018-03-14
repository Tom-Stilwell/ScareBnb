import React from "react";

class GuestsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guests: this.props.minGuests };
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }

  handlePlus() {
    let guests = this.state.guests + 1;
    this.setState({ guests });
  }

  handleMinus() {
    if (this.state.guests > 1) {
      let guests = this.state.guests - 1;
      this.setState({ guests });
    }
  }

  handleClear() {
    this.setState({ guests: 1 });
  }

  handleApply() {
    this.props.updateGuests(this.state.guests);
    this.props.hideBox();
  }

  render() {
    let clear;

    if (this.state.guests > 1) {
      clear = (
        <div className="guests-filter-clear" onClick={this.handleClear}>
          Clear
        </div>
      );
    }
    return (
      <div className="guests-filter">
        <div className="guests-filter-content">
          <div className="guests-filter-adults">
            <div className="guests-filter-text">Adults</div>
            <div className="guests-filter-minus" onClick={this.handleMinus}>
              -
            </div>

            <div className="guests-filter-value">{this.state.guests}+</div>
            <div className="guests-filter-plus" onClick={this.handlePlus}>
              +
            </div>
          </div>
          <div className="guests-filter-apply-clear">
            {clear}
            <div className="guests-filter-apply" onClick={this.handleApply}>
              Apply
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestsFilter;
