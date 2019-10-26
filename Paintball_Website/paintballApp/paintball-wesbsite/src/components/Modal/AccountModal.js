import React from 'react'

import Modal from 'react-modal';
import {Link} from 'react-router-dom'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class LoginModal extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenLoginModal = this.afterOpenLoginModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenLoginModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    })
 }

 handleSubmit = (e) => {
e.preventDefault();
this.props.Login(this.state)
}
  render() {
  return (
    <div>
    <li className="text-alight-right1 active"><Link onClick={this.openModal}>NN</Link></li>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className="container " size ="100">
      <div class="modal-content center-align">
                    <h3 ref={subtitle => this.subtitle = subtitle}><strong>ACCOUNT</strong> <a
              class="green-text font-weight-bold"></a></h3>
                    <div class="account-details"></div>
                    </div>      
              
                    </div>
        
      
        
        
        <div class="row d-flex align-items-center mb-4 ">
       
        <div class="text-center mb-3 col-md-12">
              <button  onClick={this.closeModal}>Close</button> 
              
            
            </div>
    
        </div>


      </Modal>
    </div>
  );
}

}
export default LoginModal
