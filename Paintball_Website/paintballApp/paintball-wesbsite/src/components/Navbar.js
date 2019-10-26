import React,{ useState }  from 'react'
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import '../App.css';
import {connect} from 'react-redux'
import Footer from './Footer'
import { Collapse, CardBody, Card } from 'reactstrap';

var FontAwesome = require('react-fontawesome');

export const Navbar =(props, )=> {
        const {auth, profile} =props;
        const [collapse, setCollapse] = useState(false);
        const [status, setStatus] = useState('Closed');

        const onEntering = () => setStatus('Opening...');

        const onEntered = () => setStatus('Opened');

        const onExiting = () => setStatus('Closing...');

        const onExited = () => setStatus('Closed');

        const toggle = () => setCollapse(!collapse);
    
        const links = auth.uid ? <SignedInLink profile={profile}/>: <SignedOutLink/>;
    return (<div>
        <nav className="navbar">
        <button onClick={toggle} className="dropbtn"  style={{ marginBottom: '1rem' }}><FontAwesome className='super-crazy-colors fontAwesome-color'name ='align-justify'
                    size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
                    
                        <Collapse
                            isOpen={collapse}
                            onEntering={onEntering}
                            onEntered={onEntered}
                            onExiting={onExiting}
                            onExited={onExited}
                            >
                            <Card >
                            <CardBody >
                               <ul>
                                <li>Anim pariatur clich</li>
                               

                                   </ul> 
                            </CardBody>
                            </Card>
                            </Collapse>
                <Link to="/">
                  <img src={logo} alt="Paintballs"
                  height={80}
                  width ={250}
                  /></Link>
          <div className="nav-center">
          
              <div className="nav-header">
                  
                  
                  </div>
                  <div className="nav-header">
                  
                  </div>
             
             
                    {links}
                 
                  
                    </div>
                    
                
                
                 </nav>
            <div>

            </div>
            <div className="nav-header">
            <div className="footer2">
            <Footer />
            </div>
            
            <div className="footer">
           
            <div>
            © 2019 TC Paintball. All rights Reserved<br></br>
            Built with firebase. Designed by Adedayo Adegboye
            </div>
            
       
            </div>
            </div>
            </div>
            
        )
    }

    const mapStateToProps =(state) => {
        console.log(state)
        return{
            auth: state.firebase.auth,
            profile:state.firebase.profile
        }
    }

    export default connect(mapStateToProps)(Navbar)
