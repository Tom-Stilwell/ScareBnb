import React from "react";
import { Link, withRouter } from "react-router-dom";
import DateInput from "./date_input";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      birthday: "00/00/0000"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({ user }).then(this.props.hideModal);
    this.setState({
      email: "",
      password: ""
    });
  }

  handleUpdate(field) {
    if (field === "month") {
      return e => {
        e.stopPropagation();
        let birthday = this.state.birthday;
        let month =
          e.target.value.length === 1 ? "0" + e.target.value : e.target.value;
        birthday = month + birthday.slice(2, 10);
        this.setState({ birthday });
      };
    } else if (field === "day") {
      return e => {
        e.stopPropagation();
        let birthday = this.state.birthday;
        let day =
          e.target.value.length === 1 ? "0" + e.target.value : e.target.value;
        birthday = birthday.slice(0, 3) + day + birthday.slice(5, 10);
        this.setState({ birthday });
      };
    } else if (field === "year") {
      return e => {
        e.stopPropagation();
        let birthday = this.state.birthday;
        birthday = birthday.slice(0, 6) + e.target.value;
        this.setState({ birthday });
      };
    } else {
      return e => {
        e.stopPropagation();
        this.setState({ [field]: e.target.value });
      };
    }
  }

  handleFocus(id) {
    return e => {
      document.getElementById(e.currentTarget.id).style.border =
        "1px solid #006666";
    };
  }

  handleBlur(id) {
    return e => {
      document.getElementById(e.currentTarget.id).style.border =
        "1px solid #dbdbdb";
    };
  }

  render() {
    let otherFormLink;
    let instructions;
    let additionalInputs;
    if (this.props.formType === "Log In") {
      otherFormLink = (
        <div className="other-form-instructions">
          Don't have an account? {this.props.otherForm}
        </div>
      );
      instructions = <p className="session-instructions">Log in to continue</p>;
      additionalInputs = (
        <div
          id="password"
          className="session-div-input-password"
          onFocus={this.handleFocus("password")}
          onBlur={this.handleBlur("password")}
        >
          <input
            className="session-input-password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUpdate("password")}
          />
          <i className="fas fa-lock" />
        </div>
      );
    } else {
      otherFormLink = (
        <div className="other-form-instructions">
          Already have a ScareBnb account? {this.props.otherForm}
        </div>
      );
      additionalInputs = (
        <div>
          <div
            id="fname"
            className="session-div-input-fname"
            onFocus={this.handleFocus("fname")}
            onBlur={this.handleBlur("fname")}
          >
            <input
              className="session-input-fname"
              type="text"
              placeholder="First Name"
              value={this.state.fname}
              onChange={this.handleUpdate("fname")}
            />
            <i className="fas fa-user" />
          </div>
          <div
            id="lname"
            className="session-div-input-lname"
            onFocus={this.handleFocus("lname")}
            onBlur={this.handleBlur("lname")}
          >
            <input
              className="session-input-lname"
              type="text"
              placeholder="Last Name"
              value={this.state.lname}
              onChange={this.handleUpdate("lname")}
            />
            <i className="fas fa-user" />
          </div>
          <div
            id="newPassword"
            className="session-div-input-password"
            onFocus={this.handleFocus("newPassword")}
            onBlur={this.handleBlur("newPassword")}
          >
            <input
              className="session-input-password"
              type="password"
              placeholder="Create A Password"
              value={this.state.password}
              onChange={this.handleUpdate("password")}
            />
            <i className="fas fa-lock" />
          </div>
          <div id="birthday" className="session-div-input-birthday">
            <p className="session-birthday-header">Birthday</p>
            <p className="session-birthday-info">
              To sign up, you must be 18 or older. Other people won’t see your
              birthday.
            </p>
            <DateInput handleUpdate={this.handleUpdate} />
            <div className="marketing-emails-opt">
              <input id="marketing-checkbox" type="checkbox" />
              <div className="checkbox-label">
                <label htmlFor="marketing-checkbox">
                  I’d like to receive marketing and policy communications from
                  Scarebnb and its spooky partners.
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }

    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.join(" AND ");
    }

    return (
      <div>
        <div onClick={this.props.hideModal} className="close-x">
          X
        </div>
        <div className="session-errors">{errors}</div>
        <div className="session-form">
          {instructions}
          <form onSubmit={this.handleSubmit}>
            <div
              id="email"
              className="session-div-input-email"
              onFocus={this.handleFocus("email")}
              onBlur={this.handleBlur("email")}
            >
              <input
                className="session-input-email"
                type="text"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleUpdate("email")}
              />
              <i className="far fa-envelope session-icon-email" />
            </div>
            {additionalInputs}
            <button className="submit-button">{this.props.formType}</button>
          </form>
        </div>

        {otherFormLink}
      </div>
    );
  }
}

export default withRouter(SessionForm);
