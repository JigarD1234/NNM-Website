import React from 'react'
import { NavLink } from 'react-router-dom'

const PolicyNavigation = () => {
  return (
    <>
    
      <div className='col-lg-3 terms-col'>
        <ul>
          <li><NavLink to='/terms-and-conditions'>Terms & Conditions</NavLink></li>
          <li><NavLink to='/privacy-policy'>Privacy Policy</NavLink></li>
          <li ><NavLink to='/refund-and-cancellation'>Refund & Cancellation Policy</NavLink></li>
          <li><NavLink  to='/disclaimer'>Disclaimer</NavLink></li>
          <li ><NavLink to='/disclosure'>Disclosure</NavLink></li>
          <li><NavLink  to='/kmp-details'>KMP Details</NavLink></li>
        </ul>
      </div>



    </>
  )
}

export default PolicyNavigation