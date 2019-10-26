import React from 'react'
import BookingSummary from './BookingSummary'

const BookingList = ({PaintballPayment}) => {
    return (
        <div className="project-list section"> 
            {PaintballPayment && PaintballPayment.map(paintball =>{
              return(
                  <BookingSummary paintball= {paintball} key={paintball.id} />
              )  
            })}
        </div>
    )
}

export default BookingList
