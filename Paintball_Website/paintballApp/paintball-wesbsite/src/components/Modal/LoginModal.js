import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal';
import {Link} from 'react-router-dom'
import {signIn} from '../store/actions/authAction'
import {Redirect} from 'react-router-dom'
var FontAwesome = require('react-fontawesome');

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
      modalIsOpen: false,
      email: '',
      password: ''
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

this.props.signIn(this.state)
}
  render() {
    const{authError, auth} = this.props;
    if (auth.uid) return <Redirect to='/'/>
  return (
    <div>
      <li><Link onClick={this.openModal}><strong>Login</strong></Link></li>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className="container modalBackground">
      <form onSubmit={this.handleSubmit} className="white">
                    <h3 class="green-text font-weight-bold" ref={subtitle => this.subtitle = subtitle}>LOGIN<a href="index.html"
                    ></a></h3>
                    <div className="input-field">
                       <label htmlFor="email"><FontAwesome className='super-crazy-colors 'name ='envelope'
                size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>&nbsp;Email</label> 
                       <input type="email" size ="100" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="password"><FontAwesome className='super-crazy-colors 'name ='key'
                size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>&nbsp;Password</label> 
                       <input type="password" size ="100" id="password" onChange={this.handleChange}/>
                    </div>
                    <div><p></p></div>
                   

          </form>
                    </div>
                    <div class="row d-flex align-items-center mb-4 ">
                    <div class="text-center mb-3 col-md-12">
             <button  onClick={this.closeModal}>Cancel</button> 
            <button class=" tab" onClick={this.handleSubmit}>Login</button>
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
const mapStateToProps = (state)=>{
  return {
    authError: state.auth.authError,
    auth:state.firebase.auth
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    signIn:(creds)=>dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
