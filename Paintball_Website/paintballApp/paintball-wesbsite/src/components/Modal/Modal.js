import React from 'react'
import Modal from 'react-modal';
import {Link} from 'react-router-dom'
import {signUp} from '../store/actions/authAction'
import {connect} from 'react-redux'


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

export class MModal extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
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

  handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    })
 }

 handleSubmit = (e) => {
e.preventDefault();
this.props.signUp(this.state)
}
  render() {

    const{authError} = this.props;
  
  return (
    <div>
      <li ><Link onClick={this.openModal}><strong>Signup</strong></Link></li>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className="container modalBackground">
        <form onSubmit={this.handleSubmit} className="white">
            <h3 class="green-text font-weight-bold" ref={subtitle => this.subtitle = subtitle}>SIGN <a href="index.html"
              >UP</a></h3>
                            <div className="input-field">
                               <label htmlFor="email">Email</label> 
                               <input type="email" size ="100" id="email" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                               <label htmlFor="password">Password</label> 
                               <input type="password" size ="100" id="password" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                               <label htmlFor="firstName">First Name</label> 
                               <input type="text" size ="100"id="firstName" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                               <label htmlFor="lastName">Last Name</label> 
                               <input type="text" size ="100" id="lastName" onChange={this.handleChange}/>
                            </div>
                   </form>
                    </div>
        
      
        
        <br/>
        <div class="row d-flex align-items-center mb-4">
       
        <div class="text-center mb-3 col-md-12">
              <button  onClick={this.closeModal}>Close</button>
              <button className="tab" onClick={this.handleSubmit}>Sign up</button>
              <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
             </div>
            
            </div>
    
        </div>

      </Modal>
    </div>
  );
}

}
const mapStateToProps=(state)=>{
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MModal)
