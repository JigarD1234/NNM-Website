import React from 'react'
import FinanceLabel from './FinanceLabel'

const SIP = () => {
    return (
        <>
            <FinanceLabel heading='Systematic Investment Plan (SIP)' />
            <div className='sip-section'>
                <div className='container'>
                    <div className='sip-row row'>
                        <div className='sip-details col-lg-6'>
                            <ul>
                                <li>
                                    <h3>What is SIP ?</h3>
                                    <p>A Systematic Investment Plan (SIP) is a disciplined approach to investing in mutual funds. It allows investors to contribute a fixed amount at regular intervals (usually monthly) into a selected mutual fund scheme. SIPs offer a convenient and hassle-free way to invest in the financial markets, enabling individuals to gradually build wealth over time.</p>
                                </li>
                                <li>
                                    <h3>Allocating Funds via SIP </h3>
                                    <p>Investing through a Systematic Investment Plan (SIP) is a disciplined and convenient way to build wealth over time. By allocating funds strategically based on your financial goals, risk tolerance, and investment horizon, you can pave the way towards financial success. Here's how you can allocate funds via SIP in debt and equity to align with your objectives</p>
                                    <button>Learn More</button>
                                </li>
                            </ul>
                        </div>
                        <div className='sip-img col-lg-6'>
                            <img src='/sip.svg' />
                        </div>
                    </div>
                    <div className='ready-to-start'>
                        <h3>Ready To Start Investing With SIP's ?</h3>
                        <p>If you're interested in exploring SIPs further or have any questions about getting started, our experienced financial advisors are here to help. Contact us today for personalized guidance and expert advice tailored to your financial goals.</p>
                        <button>Contact Our Advisor</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SIP