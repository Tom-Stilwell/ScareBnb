import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    this.setState({
      username: '',
      password: ''
    });

  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }
  handleUsername(e) {
    // debugger
    this.setState({username: e.target.value});
  }


  render() {
    let otherButton = null;
    if (this.props.formType === 'signup'){
        otherButton = <Link to='/login'> Log In </Link>;
      } else {
        otherButton = <Link to='/signup'> Sign Up </Link>;
      }
    return (
      <div>
        { otherButton }
        <form onSubmit={ this.handleSubmit }>
          <label> Username
            <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
          </label>
          <label> Password
            <input type='password' value={this.state.password} onChange={this.handlePassword}></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
