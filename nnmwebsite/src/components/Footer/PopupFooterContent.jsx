import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

const PopupFooterContent = () => {
  return (
    <>
    <div className='popup-footer-content '>
        <h3>Risk Disclosures On Derviatives</h3>
        <ul>
            <li><FaCircleArrowRight className='approach-icons'/>9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.</li>
            <li><FaCircleArrowRight className='approach-icons'/>On an average, loss makers registered net trading loss close to ₹ 50,000.</li>
            <li><FaCircleArrowRight className='approach-icons'/>Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.</li>
            <li><FaCircleArrowRight className='approach-icons'/>Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.</li>
        </ul>
        <p></p>
    </div>
    </>
  )
}

export default PopupFooterContent