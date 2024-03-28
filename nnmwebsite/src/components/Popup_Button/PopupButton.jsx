import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'


const PopupButton = ({activePop , handlepopupShow , handlepopupChange}) => {
    // const [activePop, setActivePop] = useState("hide")

    // const handlepopupChange = () => {
    //     setActivePop("hide")

    // }

    // const handlepopupShow = () => {
    //     setActivePop("show")
    //   }
    return (
        <>
            <div className='popupStickyButton'>
                <a onClick={handlepopupShow} className="animated-button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Open Account
                </a>
            </div>
            <div className={activePop === 'hide' ? 'popup-hide' : 'popup-show'}>
                <div className='popup-form'>
                    <div className='popup-header'>
                        <h3>Open Your Account</h3>
                        <RxCross1 onClick={handlepopupChange} className='close-popup-icon' />

                    </div>
                    <div className='popup-input'>
                        <ul>
                            <li>

                                <input type='text' placeholder='Name' />
                            </li>
                            <li>

                                <input type='text' placeholder='Email' />
                            </li>
                            <li>

                                <input type='text' placeholder='City' />
                            </li>
                            <li>

                                <input type='number' placeholder='Phone' />
                            </li>
                            <button className='popup-btn'>Open Account</button>


                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PopupButton