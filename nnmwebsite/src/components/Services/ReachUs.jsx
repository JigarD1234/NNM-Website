import React from 'react'
import '../Services/ProductServices.css'

const ReachUs = () => {
  return (
    <>
        <div className='reach-us'>
        <div className='container'>
          <div className='row reachus-row'>
            <div className='col-lg-4 reachus-col  '>
              <h3>Reach Us</h3>
              <div className='reach-details'>
                <p><strong>Address </strong>404A, Flower Street
                  San Fransisco, CA</p>
                <p><strong>Phone </strong>+00 125 456 8754</p>
                <p><strong>Email </strong>diviflowers@gmail.com</p>
              </div>

            </div>
            <div className='reachus-col-second reachus-col col-lg-7 '>
              <h3>Open Your Account Now </h3>
              <p>Join NNM Group for personalized financial solutions driven by a customer-first approach, serving over 19,000 satisfied clients worldwide</p>
              <ul >
                <li>
                  <input type='text' placeholder='Name'/>
                </li>
                <li>
                  <input type='email' placeholder='Email'/>
                </li>
                <li>
                  <input type='text' placeholder='City'/>
                </li>
                <li>
                  <input type='number' placeholder='Phone'/>
                </li>
               

              </ul>
              <div className='open-account-button '>
                <button className='animated'>Open Account</button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ReachUs