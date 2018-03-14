import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import ReactStars from "react-stars";

class RentalRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      guests: 1,
      guestFocused: false
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDates = this.getDates.bind(this);
    this.disabledDays = this.disabledDays.bind(this);
    this.toggleGuests = this.toggleGuests.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
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
    // debugger;
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

  parseDate(date) {
    if (date === "") {
      return date;
    }
    let parsed = "";
    let stringDate = date.toString();
    let arrDate = stringDate.split(" ");

    parsed += arrDate[1] + " " + arrDate[2];
    return parsed;
  }

  updateField(field) {
    return e => {
      this.setState({ [field]: e });
    };
  }

  toggleGuests(boolean) {
    return e => {
      e.stopPropagation();
      this.setState({ guestFocused: boolean });
    };
  }

  handlePlus() {
    const guests =
      this.state.guests < this.props.occupancy
        ? this.state.guests + 1
        : this.state.guests;
    this.setState({ guests });
  }

  handleMinus() {
    const guests = this.state.guests > 1 ? this.state.guests - 1 : 1;
    this.setState({ guests });
  }

  handleSubmit() {
    if (!this.props.currentUser) {
      this.props.showModal("login");
    } else {
      this.props
        .createRentalRequest(this.props.homeId, {
          start_date: this.state.startDate,
          end_date: this.state.endDate,
          user_id: this.props.currentUser.id
        })
        .then(() => {
          if (Object.values(this.props.rentalErrors).length < 1) {
            this.setState({
              startDate: "",
              endDate: "",
              guests: 1,
              guestFocused: false
            });
            this.props.showModal("reserve");
          }
        });
    }
  }

  render() {
    // debugger;
    const price = this.props.price;
    const past = { before: new Date() };
    const afterEnd = this.state.endDate
      ? { after: new Date(this.state.endDate) }
      : null;
    const beforeBegin = this.state.startDate
      ? { before: new Date(this.state.startDate) }
      : null;
    const unavailable = this.disabledDays();
    // debugger;

    unavailable.push(past);

    const unavailableStart = unavailable.slice();
    const unavailableEnd = unavailable.slice();
    unavailableStart.push(afterEnd);
    unavailableEnd.push(beforeBegin);
    // debugger;

    let guestForm = this.state.guestFocused ? (
      <div
        className="everything-but-guests-form"
        onClick={this.toggleGuests(false)}
      >
        <div className="guests-form" onClick={e => e.stopPropagation()}>
          <div className="guests-form-content">
            <div className="guests-form-adults">
              <div className="guests-form-text">Adults</div>
              <div className="guests-form-minus" onClick={this.handleMinus}>
                -
              </div>

              <div className="guests-form-value">{this.state.guests}</div>
              <div className="guests-form-plus" onClick={this.handlePlus}>
                +
              </div>
            </div>
            <div
              className="guests-form-close"
              onClick={this.toggleGuests(false)}
            >
              Close
            </div>
          </div>
        </div>
      </div>
    ) : null;

    let errors = Object.values(this.props.rentalErrors);
    if (errors.length > 0) {
      // debugger;
      errors = errors.join(" AND ");
    }

    return (
      <div className="rental-form-box">
        <div className="rental-form-header">
          <div className="rental-form-errors">{errors}</div>
          <div>
            <span className="rental-form-price">${price}</span>
            <span> per night</span>
          </div>
          <div className="rental-form-stars"><ReactStars
            edit={false}
            value={this.props.stars}
            color1={"#999999"}
            color2={"#239090"}
            size={16}
          /></div>
        </div>
        <div className="rental-form-input-headers">
          <span>Dates</span>
        </div>
        <div className="dates-div">
          <span className="check-in">
            <DayPickerInput
              value={this.parseDate(this.state.startDate)}
              onDayChange={this.updateField("startDate")}
              classNames={{
                container: "date-input",
                overlayWrapper: "calendar-wrapper",
                overlay: "calendar"
              }}
              placeholder="Check In"
              dayPickerProps={{
                selectedDay: this.state.startDate,
                disabledDays: unavailableStart
              }}
            />
          </span>
          <span className="arrow">
            <i className="material-icons">trending_flat</i>
          </span>
          <span className="check-out">
            <DayPickerInput
              value={this.parseDate(this.state.endDate)}
              onDayChange={this.updateField("endDate")}
              classNames={{
                container: "date-input",
                overlayWrapper: "calendar-wrapper",
                overlay: "calendar"
              }}
              placeholder="Check Out"
              dayPickerProps={{
                selectedDay: this.state.startDate,
                disabledDays: unavailableEnd
              }}
            />
          </span>
        </div>
        <div className="rental-form-input-headers">
          <span>Guests</span>
        </div>
        <div className="guests-div">
          <div onClick={this.toggleGuests(true)} className="guests-value">
            {this.state.guests} guest{this.state.guests > 1 ? "s" : null}
          </div>
          {guestForm}
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
