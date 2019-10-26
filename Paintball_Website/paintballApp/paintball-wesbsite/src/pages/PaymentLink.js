import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {toast} from 'react-toastify'


toast.configure();


export default function PaymentLink() {
    async function handleToken (token){
        const response =  await axios.post('https://8ukr7.sse.codesandbox.io/checkout', {
            token
          })
          const {status} = response.data
          if (status ==='success'){
                toast('Payment Successful! Check your emails for details',
                {type: 'success'})
          }else{
                toast('Something went wrong',
                {type: 'error'})
          }
          
     }
  
    return (
    

        <div className="dashboard container ">
            <div className="row ">
            <div>
            <StripeCheckout stripeKey="pk_test_KNw69e6S9KNjjFJjUxl32HV300Ja48DEWY"
                token={handleToken} billingAddress shippingAddress label="Pay with Stripe"
               />
            </div>
        </div>
        </div>
       
    )
}



