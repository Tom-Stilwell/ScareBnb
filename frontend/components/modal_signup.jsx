import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SignUpForm from './session/signup_form_container';
import * as modalStyles from './modalStyles';


class ModalSignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="signup-div">
        <button type="button" onClick={this.openModal} className="session-button">Sign Up</button>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={(subtitle) => {this.subtitle = subtitle;}}>Sign Up</h2>
          <SignUpForm closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default ModalSignUp;
