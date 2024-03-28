import React from 'react'
import { NavLink } from 'react-router-dom'


const MarketNavigation = () => {
    return (
        <>
            <div className='equity-header'>
                <div className='container'>

                    <div className='row equity-row'>

                        <div className='col-lg-12 equity-col'>
                            <h2>Online Equity Trading</h2>
                            <h3>Unlock Profit Potential with India's Best Equity Broker, NNM Group  </h3>
                            <p>Fuel your financial aspirations by stepping into the world of equity market trading with confidence. At NNM Group, we understand the importance of informed decision-making and risk management in investment endeavors. With our expertise and dedication, we empower individuals to navigate the complexities of the equity market, offering valuable insights and personalized support. Open your online equity demat account today and embark on a journey towards realizing your investment goals</p>

                        </div>
                    </div>

                    <div className='market-links'>

                        <ul>
                            <li><NavLink to='/'>Price Analysis</NavLink>
                                <ul className='market-dropmenu'>
                                    <li><NavLink to='/equity/gainers-and-losers'>Gainers & Losers</NavLink></li>
                                    <li><NavLink to='/equity/out-and-under'>Out & Under Performance</NavLink></li>
                                    <li><NavLink to='/'>Only Buyers & Sellers</NavLink></li>
                                    <li><NavLink to='/'>Highs & Lows</NavLink></li>
                                    <li><NavLink to='/'>Advances & Declines</NavLink></li>
                                    <li><NavLink to='/'>5 Days Up/Down</NavLink></li>
                                    <li><NavLink to='/'>Historical Returns</NavLink></li>
                                </ul>


                            </li> |
                            <li><NavLink to='/'>Volume Analysis</NavLink>
                                <ul className='market-dropmenu'>
                                    <li><NavLink to='/'>Most Active</NavLink></li>
                                    <li><NavLink to='/'>BLock Deals</NavLink></li>
                                    <li><NavLink to='/'>Bulk Deals</NavLink></li>
                                    <li><NavLink to='/'>Highest & Lowest Delivery</NavLink></li>


                                </ul>
                            </li> |
                            <li><NavLink to='/'>Index Analysis</NavLink>
                                <ul className='market-dropmenu'>
                                    <li><NavLink to='/'>Live Indices</NavLink></li>
                                    <li><NavLink to='/'>Price Shockers</NavLink></li>
                                    <li><NavLink to='/'>Volume Shockers</NavLink></li>
                                    <li><NavLink to='/'>Delivery Shockers</NavLink></li>
                                    <li><NavLink to='/'>Rising VDP</NavLink></li>
                                    <li><NavLink to='/'>Rising VD Fall in Price</NavLink></li>


                                </ul>
                            </li> |
                            <li><NavLink to='/'>News Analysis</NavLink></li> |
                            <li><NavLink to='/'>Corporate Action</NavLink></li> |
                            <li><NavLink to='/'>Other Market</NavLink></li>
                        </ul>


                    </div>



                </div>

            </div>

        </>
    )
}

export default MarketNavigation