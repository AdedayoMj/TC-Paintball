import React, { Component } from 'react'
import NewsletterForm from './NewsletterForm'
import Loading from './loading'
import {apiUrl, notify} from '../components/Dashboard/API/apiIndex'
import axios from 'axios'
import {Link} from 'react-router-dom'


var FontAwesome = require('react-fontawesome');


export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            loading: false
        }
    }
// Newsletter form2 

// Newsletter form 1
handleLoadingState =loading=>{
    this.setState({loading: loading});
}

handleSendEmail = email=>{
    this.handleLoadingState(true);
    axios.post(`${apiUrl}/subscribe`, {
        email: email
    }).then(res=>{
        if(res.data.success){
            //if the response from Mailchimp is ok...
            notify('success', 'Sucessfully Subcribed!', res.data.success);
            this.setState({email:''});
            this.handleLoadingState(false);
        } else {
            //if there is a bad response
            notify('error', 'Unable to subcribe!', res.data.error);
            this.handleLoadingState(false);
        }    
    }).catch(error=>{
        //catches the error if Node API returns an error
        notify('error', 'Error. Please try again later.', error.message);
        this.handleLoadingState(false); 
    });
       
}

    handleOnchangeEmail =email=>{
            this.setState({
                email: email
            })
        }
    
    render() {
        return (
             <div className="Row">
            <div>
                {this.state.loading
                 ? <Loading message="working on it ..."/>
                 :   <NewsletterForm  email={this.state.email} handleOnchangeEmail={this.handleOnchangeEmail}
             handleSendEmail={this.handleSendEmail}/>
                }
                
            </div>
           

            
            <div className="help Column">  
            <div className="text-size"><strong>Help</strong></div>
            <div className="text-size1">
            <div><Link to="/contact" className="foot_color">Contact Us</Link></div>    
            <div>FAQ</div> 
            </div>
            </div>
            <div className="information Column">
            <div className="text-size"><strong>Information</strong></div> 
            <div className="text-size1">
            <div><Link to="/about" className="foot_color">About Us</Link></div>    
            <div>Site Map</div>
            <div>
                <a  href="index.html" className="text-size foot_color" ><strong>Join Us</strong></a>&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com"><FontAwesome className='super-crazy-colors instagram-color'name ='instagram'
                size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></a>
                &nbsp;&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dayo.adegboye"><FontAwesome className='super-crazy-colors'name ='facebook'
                size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>  </a>
            </div>
            </div>
             
            </div>  
            <div className="policies Column">
            <div className="text-size"><strong>Policies</strong></div> 
            <div className="text-size1">
            <div>Return Policy</div>    
            <div>Terms and Conditions</div> 
            
            </div>
            
            </div> 

            </div>
            
        )
    }
}
