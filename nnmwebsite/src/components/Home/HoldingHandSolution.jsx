import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'

const HoldingHandSolution = () => {
    return (
        <>
            <div className='our-solutions-wrapper'>
                <div className='our-solutions'>
                    <div className='container-fluid'>
                        <div className='sec-headers sec-headers-dark'>
                            <h3 data-aos="fade-up" data-aos-delay="500">Our Solutions</h3>
                            <p data-aos="fade-up" data-aos-delay="500">addressing user concerns with technology,support and security</p>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4  helping-box'>
                                <h3 data-aos="fade-up" data-aos-delay="500">User Issues</h3>
                                <hr></hr>
                                <ul>
                                    <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Lack of Investment Guidance : </strong>Retail investors often lack access to seasoned professionals for tailored advice on portfolio managmenet , investment strategies and current market trends.</li>
                                    <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Lack of Research Reports : </strong>Retail investors often face challenges accessing comprehensive research reports and market analysis, which can hinder their ability to make well-informed investment decisions. .</li>
                                    <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Lack of Offline Assistance Accessibility for Retail Investors :
                                    </strong> Certain retail investors may prioritize offline support or in-person interactions, which may not be readily accessible on online-only platforms.</li>
                                   
                                    <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Concerns about Value added services :
                                    </strong> Can I as an investor access a comprehensive suite of value-added services, including IPO applications, estate planning, tax advisory, and wealth management solutions, all in one convenient location?</li>
                                </ul>
                            </div>
                            <div className='col-lg-4 holding-hand'>
                                <img data-aos="fade-up" data-aos-delay="500" src='/holdinghand.png' />
                            </div>
                            <div className='col-lg-4 helping-box'>
                                <h3 data-aos="fade-up" data-aos-delay="500">Our Helping Hand</h3>
                                <hr></hr>
                                <ul>
                                    <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Guidance from Skilled Professionals : </strong>
                                        Our brokerage firm offers personalized investment guidance from skilled professionals on strategies, portfolio management, and market trends.</li>
                                    <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Research and Analytics : </strong>We equip retail investors with a diverse array of research reports, thorough market analyses, and investment recommendations to empower informed decision-making.
                                        .</li>
                                    <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Customer Support : </strong> Our dedicated customer service representatives and physical branches provide invaluable offline support, catering to investors who prefer face-to-face interactions or seek assistance with intricate transactions.

                                    </li>
                                  
                                    <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Value-added Services </strong>
                                        With over seven decades of trusted reputation , We also provide a variety of value-added services, including IPO applications, estate planning, tax advisory, and wealth management solutions, to meet diverse financial needs and elevate the investment experience all under one roof .
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HoldingHandSolution