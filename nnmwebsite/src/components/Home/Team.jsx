import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";

const Team = () => {
    return (
        <>
            <div className='team'>
                <div className='sec-headers sec-headers-dark'>
                    <h3>Meet Our Team</h3>
                </div>
                <div className='container'>
                    <div className='team-section-wrapper'>
                        <div className='row team-section-row'>
                            <div className='col-lg-4 team-section-image'>
                                <img src='/Nikunj_Mittal.jpg' />
                            </div>
                            <div className='col-lg-7 team-section-message'>
                                <h2>Nikunj Mittal</h2>
                                <p><FaQuoteLeft className='quote-icon' />With years of wisdom gained, I wholeheartedly advise everyone to embark on their financial journey with prudence and diligence for as Warren Buffett wisely said, 'Do not save what is left after spending, but spend what is left after saving.' Embrace the power of budgeting and frugality to establish the bedrock of your financial security. Remember, every penny saved today is a seed for wealth. Espouse the virtues of patience and disciplined investing, prioritizing quality assets with enduring value. Diversify your portfolio intelligently, and always maintain a vigilant eye on fundamental values.  <FaQuoteRight className='quote-icon' /></p>
                                <em>- Founder & CEO NNM Group</em>
                            </div>
                        </div>
                        <div className='row team-section-row pt-5'>
                            
                            <div className='col-lg-7 team-section-message'>
                                <h2>Apurva Mittal</h2>
                                <p><FaQuoteLeft className='quote-icon' />As prudent stewards of your financial future, I strongly advocate for a well-diversified portfolio strategy, meticulously tailored to weather the ebbs and flows of the ever-evolving market landscape. Let us embark together on a journey of strategic asset allocation, harnessing the power of prudent risk management and astute investment selection to unlock the gates to enduring prosperity. <FaQuoteRight className='quote-icon' /></p>
                                <em>- Head Of Research & Operations</em>
                            </div>
                            <div className='col-lg-4 team-section-image'>
                                <img src='/Apurva_Mittal.jpg' />
                            </div>
                        </div>
                    </div>
                    <button className='kmp-team-btn'>Explore Our KMP Team</button>

                </div>
            </div>
        </>
    )
}


export default Team