import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

class RentalRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "", endDate: "", guests: 0 };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDates = this.getDates.bind(this);
    this.disabledDays = this.disabledDays.bind(this);
  }

  getDates(startDate, endDate) {
    let dates = [],
      currentDate = startDate,
      addDays = function(days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };

    while (currentDate <= endDate) {
      // debugger
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    // debugger
    return dates;
  }

  disabledDays() {
    let dates = [];
    // debugger
    const rentals = this.props.rentals;
    rentals.forEach(rental => {
      dates = dates.concat(
        this.getDates(
          new Date(rental.start_date.replace(/-/g, "/").replace(/T.+/, "")),
          new Date(rental.end_date.replace(/-/g, "/").replace(/T.+/, ""))
        )
      );
    });
    return dates;
  }

  updateField(field) {
    return e => {
      this.setState({ [field]: e });
    };
  }

  handleSubmit() {
    if (!this.props.currentUser) {
      this.props.showModal("login");
    } else {
      this.props.createRentalRequest(this.props.homeId, {
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        user_id: this.props.currentUser.id
      });
    }
  }

  render() {
    const price = this.props.price;
    const past = { before: new Date() };
    const unavailable = this.disabledDays();
    unavailable.push(past);
    debugger;
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
            <DayPickerInput
              onDayChange={this.updateField("startDate")}
              dayPickerProps={{
                selectedDay: this.state.startDate,
                disabledDays: unavailable
              }}
            />
          </div>
          <div className="check-out">
            Check Out:
            <DayPickerInput
              onDayChange={this.updateField("endDate")}
              dayPickerProps={{
                selectedDay: this.state.startDate,
                disabledDays: unavailable
              }}
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
