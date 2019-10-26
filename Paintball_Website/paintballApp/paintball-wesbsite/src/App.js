import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Paintballs from "./pages/Paintballs";
import Error from "./pages/Error";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import "./styles.css";
import {Route, Switch} from 'react-router-dom';

import dashboard from './components/Dashboard/dashboard'
import Navbar from './components/Navbar';
import PaymentLink from './pages/PaymentLink'
import BookingDetails from './components/Dashboard/BookingDetails'
import PaintballSignin from "./pages/PaintballSigin";


function App() {
  return  <>
  <Navbar/>
  <Switch>
      <Route exact path ="/" component ={Home}/>
      <Route exact path ="/paintballs" component ={Paintballs}/>
      <Route exact path ="/paintballsignin" component ={PaintballSignin}/>
      <Route exact path ="/about" component ={About}/>
      <Route exact path ="/gallery" component ={Gallery}/>
      
      <Route exact path ="/paymentOrder" component ={PaymentLink}/>
      <Route exact path ="/contact" component ={ContactUs}/>
      <Route exact path ="/dashboard" component ={dashboard}/>
      <Route exact path ="/bookingDetails" component ={BookingDetails}/>
    
      <Route component={Error}/>
  </Switch>
  
  </>
  
}

export default App;
