import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

class DatesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.updateField = this.updateField.bind(this);
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

  handleClear() {
    this.setState({ startDate: "", endDate: "" });
  }

  handleApply() {
    this.props.updateDates(this.state);
    this.props.hideBox();
  }

  render() {
    return (
      <div className="dates-filter">
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
                disabledDays: [
                  { before: new Date() },
                  { after: this.state.endDate }
                ]
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
                disabledDays: [
                  { before: new Date() },
                  { before: this.state.startDate }
                ]
              }}
            />
          </span>
        </div>
        <div className="dates-filter-apply-clear">
          <div className="dates-filter-clear" onClick={this.handleClear}>
            Clear
          </div>
          <div className="dates-filter-apply" onClick={this.handleApply}>
            Apply
          </div>
        </div>
      </div>
    );
  }
}

export default DatesFilter;
