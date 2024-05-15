import React from 'react'
import PolicyBgHeader from './PolicyBgHeader'
import PolicyNavigation from './PolicyNavigation'
import { PiArrowCircleRightFill } from 'react-icons/pi'
import PolicySecondCol from './PolicySecondCol'

const Refund = () => {
  return (
    <>
     <PolicyBgHeader NavigationHeader='Refund & Cancellation Policy'/>
        <div className='terms'>
            <div className='container'>
                <div className='row terms-row'>
                   <PolicyNavigation/>
                   <PolicySecondCol>
                    <h3>Refund & Cancellation Policy</h3>
                    <p>The Refund & Cancellation policy for all payments made towards account opening or any other services using any mode of payment shall stand as under:</p>
                    <ul>
                        <li>
                        <PiArrowCircleRightFill className='policy-icon'/>The Fees paid towards account opening charges for enabling equities and commodities, or any other services is non-refundable.
                        </li>
                        <li>
                        <PiArrowCircleRightFill className='policy-icon'/>You may place a refund request with the support team 07 days along with the payments details like the Card / Bank Account Number, Transaction Number, etc. Refund shall be provided only for any excess payment of account opening charges made to us during application of your Trading and Demat Account and confirmation from the banking partner with respect to receipt of such payment from you.
                        </li>
                        <li>
                        <PiArrowCircleRightFill className='policy-icon'/>Once your Trading and Demat account is opened any payments made thereafter will be credited towards your account and there shall be no refunds. To withdraw any amount from such account you may place withdrawal request through the App or the Web.
                        </li>
                       
                    </ul>
                    </PolicySecondCol>
                   </div>
            </div>
        </div>
    
    </>
  )
}

export default Refund