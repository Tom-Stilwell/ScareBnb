import React from "react";
import { updateFilter } from "../../actions/filter_actions";
import GuestsFilter from "./guests_filter";
import PriceFilter from "./price_filter";
import DatesFilter from "./dates_filter";

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
    this.updateGuests = this.updateGuests.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.updateDates = this.updateDates.bind(this);
  }

  componentWillReceiveProps(props) {
    const minGuests = props.filters.minGuests > 1 ? `${props.filters.minGuests}+ guests` : "Guests";

    let price;
    const minPrice = props.filters.price.minPrice;
    const maxPrice = props.filters.price.maxPrice;

    if (minPrice > 10 && maxPrice < 1000) {
      price = `$${minPrice} - $${maxPrice}`;
    } else if (minPrice > 10) {
      price = `$${minPrice} +`;
    } else if (maxPrice < 1000) {
      price = `Up to $${maxPrice} `;
    } else {
      price = "Price";
    }

    let dates = "Dates";

    this.setState({ minGuests, price, dates });
  }

  updateGuests(guests) {
    this.props.startLoading();

    this.props.updateFilter("minGuests", guests)
      .then(() => this.props.stopLoading());
  }

  updatePrice(price) {
    this.props.startLoading();

    this.props.updateFilter("price", price)
      .then(() => this.props.stopLoading());
  }

  updateDates(dates) {
    this.props.startLoading();

    this.props.updateFilter("dates", dates)
      .then(() => this.props.stopLoading());
  }

  handleClick(box) {
    return e => {
      e.stopPropagation();
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
          updateGuests={this.updateGuests}
          hideBox={this.hideBox}
          minGuests={this.props.filters.minGuests}
        />
      );
    } else if (this.state.box === "Price") {
      component = (
        <PriceFilter
          updatePrice={this.updatePrice}
          hideBox={this.hideBox}
          minPrice={this.props.filters.price.minPrice}
          maxPrice={this.props.filters.price.maxPrice}
        />
      );
    } else if (this.state.box === "Dates") {
      component = (
        <DatesFilter
          updateDates={this.updateDates}
          hideBox={this.hideBox}
          startDate={this.props.filters.dates.startDate}
          endDate={this.props.filters.dates.endDate}
        />
      );
    }
    // debugger;
    return (
      <div onClick={this.hideBox}>
        <div className="filter-bar">
          <div
            onClick={this.handleClick("Dates")}
            className={
              this.state.box === "Dates" ||
              this.props.filters.dates.startDate !== "" ||
              this.props.filters.dates.endDate !== ""
                ? "filter-button selected"
                : "filter-button"
            }
          >
            {this.state.dates}
          </div>
          <div
            onClick={this.handleClick("Guests")}
            className={
              this.state.box === "Guests" || this.props.filters.minGuests > 1
                ? "filter-button selected"
                : "filter-button"
            }
          >
            {this.state.minGuests}
          </div>
          <div
            onClick={this.handleClick("Price")}
            className={
              this.state.box === "Price" ||
              this.props.filters.price.minPrice > 10 ||
              this.props.filters.price.maxPrice < 1000
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


export default FilterBar;
