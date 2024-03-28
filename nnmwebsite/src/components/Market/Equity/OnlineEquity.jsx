import React from 'react'

// import equitybg from '../../assets/Wavy_Bus-06_Single-08.jpg'
import '../Market.css'
import SensexChart from './SensexChart'
import NiftyChart from './NiftyChart'
import TradingViewWidget from './EventChart'
import GainerShortTable from './GainerShortTable'
import { NavLink } from 'react-router-dom'
import MarketNavigation from '../MarketNavigation/MarketNavigation'


const OnlineEquity = () => {
  return (
    <>
      <div className='online-equity'>
       <MarketNavigation/>
      
        <div className='sensex-nifty'>
          <div className='container'>
            <div className=' sensex-row row'>
              <div className='col-lg-4  sensex-col'>
                <h3>Sensex</h3>
                <hr style={{ paddingBottom: '5%' }}></hr>
                <SensexChart />

              </div>
              <div className='col-lg-4 sensex-col'>
                <h3>Nifty</h3>
                <hr style={{ paddingBottom: '5%' }}></hr>
                <NiftyChart />

              </div>
              <div className='col-lg-4 calendar-col'>
                <h3>Economic Calendar</h3>
                <hr style={{ paddingBottom: '5%' }}></hr>
                <TradingViewWidget />

              </div>


            </div>
          </div>

          <div className='container'>
            <div className='row gainer-row'>
              <div className='col-lg-6 gainer-wrapper'>
              <GainerShortTable button1 = "Gainer" button2 = "Loser" headingGainer="Gain Company" headingLoser = "Lose Company"/>
              <div className='viewAll'>
                    <button><NavLink to='/equity/gainers-and-losers'>View All..</NavLink></button>
                </div>


              </div>
              <div className='col-lg-6 gainer-wrapper'>
              <GainerShortTable button1 = "Volume" button2="Value" headingVolume = "Volume Company" headingValue = "Value Company"/>
              <div className='viewAll'>
                    <button>View All..</button>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default OnlineEquity