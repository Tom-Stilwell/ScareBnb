import React from "react";

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }

  componentDidMount() {
    $("#price-slider").slider({
      range: true,
      min: 10,
      max: 1000,
      values: [this.state.minPrice, this.state.maxPrice],
      slide: function(event, ui) {
        $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#price").val(
      "$" +
        $("#price-slider").slider("values", 0) +
        " - $" +
        $("#price-slider").slider("values", 1)
    );
  }

  handleClear() {
    // debugger;
    $("#price-slider").slider("option", "values", [10, 1000]);
    $("#price").val(
      "$" +
        $("#price-slider").slider("values", 0) +
        " - $" +
        $("#price-slider").slider("values", 1)
    );
  }

  handleApply() {
    const range = $("#price-slider").slider("option", "values");
    this.props.updatePrice({
      minPrice: range[0],
      maxPrice: range[1]
    });
    this.props.hideBox();
  }

  render() {
    return (
      <div className="price-filter">
        <div className="price-filter-content">
          <div className="price-slider">
            <p>
              <input type="text" id="price" className="price-range" />
              <p className="price-filter-average">
                The average nightly price is $78.
              </p>
            </p>

            <div id="price-slider" />
          </div>
          <div className="price-filter-apply-clear">
            <div className="price-filter-clear" onClick={this.handleClear}>
              Clear
            </div>
            <div className="price-filter-apply" onClick={this.handleApply}>
              Apply
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceFilter;
