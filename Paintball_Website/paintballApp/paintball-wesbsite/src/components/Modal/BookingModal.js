import React from 'react'
import Modal from 'react-modal';
import {Link} from 'react-router-dom'
import {createPayment} from '../Dashboard/../store/actions/paymentActions'
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
      firstName: '',
      lastName: '',
      mobileNumber:'',
      address:'',
      selectUser: '',
      date: '',
      time: '',

     
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
this.props.createPayment(this.state);
}
handleFCheckClick = () => {
  this.setState({ checked: "Female" });
}
handleMCheckClick = () => {
  this.setState({ checked: "Male" });
}
handleToken =(token,addresses)=>{
      console.log({token, addresses})
}
  render() {
  return (
    <div>
      <li><button  type="button" 
              class=" red-text2 "  onClick={this.openModal}>Book Now</button></li>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      
      >
      <div className="container modalBackground">
        <form onSubmit={this.handleSubmit} className="white">
            <h3 class="green-text font-weight-bold" ref={subtitle => this.subtitle = subtitle}>Book Now</h3>
                            
                            <div className="input-field">
                               <label htmlFor="firstName">First Name</label> 
                               <input type="text" size ="100"id="firstName" onChange={this.handleChange}/>
                            </div>

                            <div className="input-field">
                               <label htmlFor="lastName">Last Name</label> 
                               <input type="text" size ="100" id="lastName" onChange={this.handleChange}/>
                            </div>

                            <div className="input-field">
                               <label htmlFor="mobileNumber">Phone Number</label> 
                               <input type="tel" name="someid"  size ="30" id="mobileNumber" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                               <label htmlFor="address">Address</label> 
                               <textarea id="address" cols="50" rows="5" onChange={this.handleChange}/>

                            </div>
                            <div className="input-field">
                               <label >Date</label> 
                               <input type="date" id="date" onChange={this.handleChange}/>

                            </div>

                            <div className="input-field">
                           <label >Number of people(s)</label>
                            <input type="number" id="selectUser" onChange={this.handleChange}/>
                            </div><br/>
                            <div className="input-field">
                           <label >Time</label>
                            <select id="time" onChange={this.handleChange}>
                                <option value="10:00 AM"> 10:00 AM</option>
                                <option value="10:30 AM"> 10:30 AM</option>
                                <option value="11:00 AM"> 11:00 AM</option>
                                <option value="11:30 AM"> 11:30 AM</option>
                                <option value="12:00 PM"> 12:00 PM</option>
                                <option value="12:30 PM"> 12:30 PM</option>
                                <option value="1:00 PM"> 1:00 PM</option>
                                <option value="1.30 PM"> 1.30 PM</option>
                                <option value="2:00 PM"> 2:00 PM</option>
                                <option value="2:30 PM"> 2:30 PM</option>
                                <option value="3:00 PM"> 3:00 PM</option>
                                <option value="3:30 PM"> 3:30 PM</option>
                                <option value="4:00 PM"> 4:00 PM</option>
                                <option value="4:30 PM"> 4:30 PM</option>
                                <option value="5.00 PM"> 5.00 PM</option>
                                <option value="5:30 PM"> 5:30 PM</option>
                            </select>

                            </div><br/>

                            <div className="input-field">
                               <label htmlFor="email">Email</label> 
                               <input type="email" size ="100" id="email" onChange={this.handleChange}/>
                            </div>
                        </form>
                    </div>
        
      
        
        <br/>
        <div class="row d-flex align-items-center mb-4">
       
        <div class="text-center mb-3 col-md-12">
              <button  onClick={this.closeModal}>Close</button>
              <button className="tab" action="/dashboard" onClick={this.handleSubmit} ><Link to="/dashboard"> Submit</Link></button>
              
            
            </div>
            
             

            
    
        </div>

      </Modal>
    </div>
  );
}

}

const mapDispatchToProps =(dispatch) =>{
  return{
  createPayment: (paintball) => dispatch(createPayment(paintball))
  }
}
export default  connect(null, mapDispatchToProps)(MModal)


/* <button className="navbar-nav align-items-right" type="button" 
              class="btn btn-success btn-block btn-rounded z-depth-1 tab" onClick={this.handleSubmit}>Submit</button> */
              // amount ={(users = document.getElementById("selectUser").value) * 3000}
             

              // connect(null, mapDispatchToProps)