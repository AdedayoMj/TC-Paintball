import React, { Component } from 'react'


var FontAwesome = require('react-fontawesome');

export default class ContactUs extends Component {
    render() {
        return (
            <div className ='homeSplit6'>
                <div className="contact-text">
                        <div >
                        <p><FontAwesome className='super-crazy-colors instagram-color'name ='home'
                            size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            &nbsp;&nbsp;<strong>Address:</strong> No: 39 GRA Ilorin, kwara State, Nigeria.</p>
                        </div>
                        <br/>
                        <div>
                        <p><FontAwesome className='super-crazy-colors instagram-color'name ='phone'
                            size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            &nbsp;&nbsp;<strong>Telephone:</strong> 080 5000 5000</p>
                        </div>
                        <br/>
                        <div>
                        <p><FontAwesome className='super-crazy-colors instagram-color'name ='at'
                            size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            &nbsp;&nbsp;<strong>Email:</strong> info@tcpaintball.com</p>
                        </div>
                        <div>
                        <br/>
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com"><FontAwesome className='super-crazy-colors instagram-color'name ='instagram'
                size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></a>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dayo.adegboye"><FontAwesome className='super-crazy-colors'name ='facebook'
                size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>  </a>
                        </div>
                     
                </div>
                
            </div>
        )
    }
}
