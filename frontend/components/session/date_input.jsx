import React from "react";

const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function days() {
  let days = [
    <option key="-1" disabled value="Day">
      Day
    </option>
  ];

  for (let i = 1; i <= 31; i++) {
    days.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  // debugger;
  return days;
}

function months() {
  let months = [
    <option key="-1" disabled value="Month">
      Month
    </option>
  ];

  for (let i = 1; i <= 12; i++) {
    months.push(
      <option key={i} value={i}>
        {monthArray[i - 1]}
      </option>
    );
  }

  return months;
}

function years() {
  let years = [
    <option key="-1" disabled value="Year">
      Year
    </option>
  ];

  for (let i = 90; i >= 1; i--) {
    years.push(
      <option key={i} value={1910 + i}>
        {1910 + i}
      </option>
    );
  }

  return years;
}

export const DateInput = props => (
  <div>
    <select
      onChange={props.handleUpdate("month")}
      className="birthday-select"
      name="month"
      value={props.month}
    >
      {months()}
    </select>

    <select
      onChange={props.handleUpdate("day")}
      className="birthday-select"
      name="days"
      value={props.day}
    >
      {days()}
    </select>

    <select
      onChange={props.handleUpdate("year")}
      className="birthday-select"
      name="year"
      value={props.year}
    >
      {years()}
    </select>
  </div>
);

export const formatDate = function(month, day, year) {
  let birthday = "";

  birthday += day.length === 1 ? "0" + day : day;
  birthday += "/";
  birthday += month.length === 1 ? "0" + month : month;
  birthday += "/";
  birthday += year;

  return birthday;
};
