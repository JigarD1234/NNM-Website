import React from 'react'
import HomeSensexChart from './Charts/HomeSensexChart';
import Ticker from './Charts/Ticker';
import HomeScreener from './Charts/HomeScreener';


const MarketSection = () => {
    return (
        <>
            <div className='market-charts'>
                <div className='container'>
                    <div className='row market-wrapper'>
                        <div className='col-lg-6 market-content'>
                            <h3 >Transform Your Financial Future with Our Trading Platform!</h3>
                            <h2 >India's Leading Brokerage for Equity Trading</h2>
                            <p >In today's era, having an additional source of income is crucial for financial stability. This platform guarantees sustainability while also offering favorable returns.</p>
                            <p >Investing in the equity market has the power to ignite your financial journey and fuel your aspirations. With our user-friendly platform and expert guidance, you can take control of your investments and unlock a world of opportunities. Don't wait any longer – start your journey to financial success now!</p>
                            <button  className='section-button'>Open Account</button>
                        </div>
                        <div className='col-lg-6 market-content-img'>
                            <img src='/investor_updae.png' />
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "#09090A" }} >
                    <div className='container trading-chart'>
                        <div className='sec-headers sec-headers-dark'>
                            <h3 data-aos="fade-up" data-aos-delay="500">Market Trends</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500" className='row chart-wrapper'>
                            <div className='col-lg-12 home-sensex-col'>
                                <HomeSensexChart/>
                            </div>
                            <div className='col-lg-12 home-ticker'>
                                <Ticker/>
                            </div>
                            <div className='col-lg-12 home-screener-col'>
                                <HomeScreener/>
                            </div>
                           
                           
                          
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MarketSection