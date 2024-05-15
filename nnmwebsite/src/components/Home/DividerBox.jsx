import React from 'react'
import { FaChartArea, FaHandshake } from 'react-icons/fa'
import { GiGrowth } from 'react-icons/gi'

const DividerBox = () => {
  return (
   <>
   <div className='divider-box'>
        <div className='container'>
          <div className='row divide-wrapper'>
            <div  className='col-lg-3 divide-box'>
              <GiGrowth className='divide-icons' />
              <h3>Empowering Your Equity Journey</h3>
            </div>
            <div  className='col-lg-3 divide-box'>
              <FaChartArea className='divide-icons' />
              <h3>Mastering Derivative Dynamics</h3>
            </div>
            <div  className='col-lg-3 divide-box'>
              <FaHandshake className='divide-icons' />
              <h3>Seamless Trading Solutions</h3>
            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default DividerBox