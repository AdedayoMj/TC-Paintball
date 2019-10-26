import React from 'react'
import BookingModal from "../components/Modal/BookingModal"
import '../App.css';
import {signOut} from './store/actions/authAction'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'



export const SignedInLink =(props)=> {

    return (<div>
            
        
            <li className="Column"><Link to="/"><strong>Home</strong></Link></li>
            <li class="dropdown Column">
                <li><Link to="/paintballsignin" className="dropbtn ">
                <strong>Paintball</strong></Link></li>
                <div class="dropdown-content">
                <Link to="/equipmet" >Equipment</Link>
                <Link to="/sales" >Special Sales</Link>
                </div>
                </li>
                <li className="Column" ><Link to="/gallery"><strong>Gallery</strong></Link></li>
                <li className="Column"><Link to="/about"><strong>About</strong></Link></li>
                
                
                <Link to='/'><li  className="Column"><a href="index.html" onClick={props.signOut}><strong>Logout</strong></a></li></Link>
    
                <button className="Column"><Link to="/about">{props.profile.initials}</Link></button>
                
                
                
     
            </div>    
             
           
        )
    }

const mapDispatchToProps =(dispatch)=>{
        return{
          signOut:()=>dispatch(signOut())
        }
      }

export default connect(null, mapDispatchToProps)(SignedInLink)