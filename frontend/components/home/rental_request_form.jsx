import React from "react";

class RentalRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "", endDate: "", guests: 0 };
    this.updateField = this.updateField.bind(this);
    this.checkAvailability = this.checkAvailability.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkAvailability(date) {
    let available = true;
    const rentals = Object.values(this.props.rentals);
    rentals.forEach(rental => {
      if (
        date >= new Date(rental.start_date) &&
        date <= new Date(rental.end_date)
      ) {
        available = false;
      }
    });
    // debugger;
    return [available];
  }

  componentDidMount() {
    $("#datepicker1").datepicker({
      dateFormat: "M dd yy",
      onClose: this.updateField("startDate"),
      beforeShowDay: this.checkAvailability
    });

    $("#datepicker2").datepicker({
      dateFormat: "M dd yy",
      onClose: this.updateField("endDate"),
      beforeShowDay: this.checkAvailability
    });
  }

  componentDidUpdate() {
    // debugger;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;

    $("#datepicker1").datepicker("destroy");
    $("#datepicker1").datepicker({
      dateFormat: "M dd yy",
      onClose: this.updateField("startDate"),
      beforeShowDay: this.checkAvailability,
      maxDate: endDate
      // beforeShowDay: function(date) {
      //   const stringDate = $.datepicker.formatDate("yy-mm-dd", date);
      //   return [unavailable.indexOf(stringDate) == -1];
      // }
    });

    $("#datepicker2").datepicker("destroy");
    $("#datepicker2").datepicker({
      dateFormat: "M dd yy",
      onClose: this.updateField("endDate"),
      beforeShowDay: this.checkAvailability,
      minDate: startDate
    });
  }

  updateField(field) {
    return e => {
      // debugger;
      this.setState({ [field]: e });
    };
  }

  handleSubmit() {
    // debugger;
    if (!this.props.currentUser) {
      alert("Must be logged in!");
    }
    this.props.createRentalRequest(this.props.homeId, {
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      user_id: this.props.currentUser.id
    });
  }

  render() {
    const price = this.props.price;
    // debugger;
    return (
      <div className="rental-form-box">
        <div className="rental-form-header">
          <div>
            <span className="rental-form-price">${price}</span>
            <span> per night</span>
          </div>
          <div className="rental-form-stars">5 stars</div>
        </div>
        <div className="rental-form-input-headers">
          <span>Dates</span>
          <span>Guests</span>
        </div>

        <div className="dates-div">
          <div className="check-in">
            Check In:
            <input
              id="datepicker1"
              type="text"
              value={this.state.startDate}
              max={this.state.endDate}
              onChange={this.updateField("startDate")}
            />
          </div>
          <div className="check-out">
            Check Out:
            <input
              id="datepicker2"
              type="text"
              value={this.state.endDate}
              min={this.state.startDate}
              onChange={this.updateField("endDate")}
            />
          </div>
        </div>
        <div className="rental-button-div">
          <button className="rental-button" onClick={this.handleSubmit}>
            Request Reservation
          </button>
        </div>
      </div>
    );
  }
}

export default RentalRequestForm;
