
import React, { Component } from 'react'
import BookingList from './BookingList'
import PaymentLink from '../../pages/PaymentLink'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
const {PaintballPayment, auth} =this.props;
if (!auth.uid) return<Redirect to='/'/>
    return (
       <div className="homeSplit2">

      <div className="dashboard container ">
        <div className="row">
          <div className="col s12 m6">
            <BookingList  PaintballPayment={PaintballPayment}/>
            <br/>
            <div >
          <PaymentLink/>
          </div>
          </div>
         
        </div>
      </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    PaintballPayment:state.firestore.ordered.paintball,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'paintball'}
  ])
)(Dashboard)