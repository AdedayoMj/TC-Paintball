import React,{ useState } from 'react'
import {carouselImage} from './carouselImage'
import {Gallery, GalleryImage} from 'react-gesture-gallery'
import { Button} from 'reactstrap';
import Member from '../components/Modal/Member'
import {Link} from 'react-router-dom'



const INITIAL_INDEX=0

const Home = () => {
    const [index, setIndex] = React.useState(INITIAL_INDEX)
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closed');
    
    const onEntering = () => setStatus('Opening...');
    
    const onEntered = () => setStatus('Opened');
    
     const onExiting = () => setStatus('Closing...');
    
    const onExited = () => setStatus('Closed');
    
    const toggle = () => setCollapse(!collapse);
    React.useEffect(()=>{
       const interval = setInterval(() => {
           if (index ===carouselImage.length -1){
               setIndex(INITIAL_INDEX)
           }else{
            setIndex(index + 1)
           }
           
        }, 2500)
       return()=>clearInterval(interval)
    }, [index])
       
        return (
            <div className='homeSplit2 '>

                <div className='homeSplit1 '>
                <Gallery
            index={index}
            onRequestChange={i=>{
                setIndex(i)
            }}
                >
                    {carouselImage.map(image=>(
                        <GalleryImage objectFit="fit"  src={image} />
                    ))}
                </Gallery>
                </div>
                
              
                <div className="homeSplit5" >
    
                      
                    <div>
                 
                            <p class="w3-xxxlarge w3-container w3-lobster font-effect-brick-sign text-center home-text-colour"> TC PAINTBALL</p>   
                        <p className="text-center">Guarantee your victory on the batterfield with paintball cronus gun <br/>
                        Signup to be become a member  and make your booking/reservations.<br/> Visit <Link to="/paintballs"><strong><u>HERE</u></strong></Link> to check out our packages and prices</p>
                            
                  
                    <br/>
                  <div className="padding-button">
                      <div className="Row"><Member/></div>
                  
                  </div>
                   
                    
                    
                            
                    </div>
                </div>
                    
            </div>
            
        )
    }
export default Home

//   <div className="homeSplit5" >

                    
                    
//                 </div>