import React, { useEffect, useState } from 'react'
import { BiRightArrowCircle, BiSolidRightArrowCircle } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'

const OnLoadPopup = ({ setShowModal, showModal, setShowSecondModal, showSecondModal }) => {
  function handleClosePopup() {
    setShowModal(false)
  }
  function handleCloseSecondPopup() {
    setShowSecondModal(false)

  }
  return (
    <>
      <div className={`on-load-popup ${showModal ? 'show' : 'hide'}`}>
        <div className='on-load-popup-box'>
          <div className='on-load-popup-content'>
            <p>Dear Clients,

              <br />As per SEBI guidelines, effective 1st June 2021, clients have to maintain required margins before taking a position (Buy, Sell or Intraday) in the Cash market, similar to the Derivatives market.</p>
            <h3>Important points to be followed:</h3>
            <ul>
              <ListItem>Initial peak margin (75%)/VAR + ELM (Extreme Loss Margin) will be required upfront on the same trading (T) day</ListItem>
              <ListItem>MTM (Mark to Market) & other margins can be provided within T+1 day basis.</ListItem>
            </ul>
            <h3>Following are considered as part of margins in the clients’ account with us:</h3>
            <ul>
              <ListItem>Initial peak margin (75%)/VAR + ELM (Extreme Loss Margin) will be required upfront on the same trading (T) day.</ListItem>
              <ListItem>MTM (Mark to Market) & other margins can be provided within T+1 day basis.</ListItem>
              <ListItem>Please note that SEBI has prescribed similar Penalty structure in the cash segment in case of margin shortfall as that of Derivatives market.</ListItem>
            </ul>
            <p>Kindly ensure sufficient margin is available before placing orders as penalties will be imposed in case of non-collection or short collection of margins from 1st June 2021.
              For details please contact to your RM/Dealer.</p>
            <h3>Note: From 1st September 2021 initial “Peak Margin” would be 100% From 75%.</h3>
            <p>Thanks</p>
          </div>
          <div className='on-load-close-icon '>
            <button onClick={handleClosePopup}><ImCross /></button>
          </div>
        </div>
        {showSecondModal && (<div className='on-load-popup'>
          <div className='on-load-popup-box2'>
            <p>
              <strong> Exciting news!</strong> We're thrilled to announce that we now offer online account opening and account closure services for your convenience. Seamlessly manage your account as per your comfort at anytime from anywhere. Need to close an account? We've got you covered! Simply log in to our platform and follow the easy steps. Your investment experience just got even more hassle-free. Thank you for choosing us for your financial needs!</p>
            <div className='on-load-close-icon2 '>
              <button onClick={handleCloseSecondPopup}><ImCross /></button>
            </div>
          </div>
        </div>)}


      </div>
    </>
  )
}
function ListItem({ children }) {
  return (
    <li><BiSolidRightArrowCircle className='on-load-list-icons' />{children}</li>

  )

}
export default OnLoadPopup