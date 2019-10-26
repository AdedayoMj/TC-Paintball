import React from 'react'



const BookingSummary = ({paintball}) => {


  var calTotal = function (a,b) {
     a = 3000;
     b = paintball.selectUser;
    return a * b
    
  }

    return (
       <div className="card z-depth-0 project-summary pay">
      <div className="card-content grey-text text-darken-3">
      <span className="card-title text-start"><h3>PAYMENT ORDER INFORMATION </h3></span>
            <p ><strong> Name:
            </strong> {paintball.lastName}, {paintball.firstName}</p>
            <br/>
            <p ><strong> Date: </strong> {paintball.date}</p>
            <br/>
            <p ><strong> Time: </strong> {paintball.time}</p>
            <br/>
            <p ><strong> Telephone: </strong> {paintball.mobileNumber}</p>
            <br/>
            <p ><strong> Address: </strong> {paintball.address}</p>
            <br/>
            <p ><strong> Email: </strong> {paintball.email}</p>
            <br/>
        <br/>
        <br/>

        <div className= "text-start-left ">
          <p className="text-start-n"><strong> Price per Person:
            </strong>&nbsp;&nbsp;&nbsp;&nbsp; N3000</p>
          <p className="text-start-n"><strong> No. of People :
            </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {paintball.selectUser}</p>
          <p className="text-start-n"><strong> {`Total Price : ${paintball.selectUser} x N3000 :`}
            </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{calTotal()}</p>
     
        </div>
        


      </div>
    </div>
  )
}

export default BookingSummary
