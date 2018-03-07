import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginForm from './session/login_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : 'visible',

  },

  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: "rgba(102, 102, 0, 0.75)",
    "z-index": "999"
  }
};

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
      <div className="login-div">
        <button type="button" onClick={this.openModal} className="session-button">Log In</button>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={(subtitle) => {this.subtitle = subtitle;}}>Log In</h2>
          <LoginForm closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default ModalSignUp;
