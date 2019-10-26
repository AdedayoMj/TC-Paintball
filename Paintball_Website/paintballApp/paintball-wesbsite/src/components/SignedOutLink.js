import React from 'react'

import MModal from '../components/Modal/Modal'
import LoginModal from "../components/Modal/LoginModal"
import '../App.css';
import {Link} from 'react-router-dom'







export const SignedOutLink =(props)=> {
// Toggle Bar



    return (
    <div className="nav-center">
             <ul className="nav-header Row">
            <li className="Column"><Link to="/"><strong>Home</strong></Link></li>
            <li class="dropdown Column">
                <li><Link to="/paintballs" className="dropbtn ">
                <strong>Paintball</strong></Link></li>
                <div class="dropdown-content">
                <Link to="/equipmet" >Equipment</Link>
                <Link to="/sales" >Special Sales</Link>
                </div>
                </li>
                <li className="Column" ><Link to="/gallery"><strong>Gallery</strong></Link></li>
                <li className="Column"><Link to="/about"><strong>About</strong></Link></li>
                <li className="Column"><MModal></MModal></li>
                <li className="Column"><LoginModal></LoginModal></li>
                
            </ul>
            </div>
                 
             
           
        )
    }

export default SignedOutLink

