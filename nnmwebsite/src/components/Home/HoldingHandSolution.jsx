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
                                <HandMainHeader>User Issues</HandMainHeader>
                                <ul>
                                    <HandItem><HandHeader> Lack of Investment Guidance : </HandHeader>Retail investors often lack access to seasoned professionals for tailored advice on portfolio managmenet , investment strategies and current market trends.</HandItem>

                                    <HandItem><HandHeader>  Lack of Research Reports : </HandHeader>Retail investors often face challenges accessing comprehensive research reports and market analysis, which can hinder their ability to make well-informed investment decisions.</HandItem>

                                    <HandItem><HandHeader>Lack of Offline Assistance Accessibility for Retail Investors : </HandHeader>Certain retail investors may prioritize offline support or in-person interactions, which may not be readily accessible on online-only platforms.</HandItem>

                                    <HandItem><HandHeader> Concerns about Value added services : </HandHeader>Can I as an investor access a comprehensive suite of value-added services, including IPO applications, estate planning, tax advisory, and wealth management solutions, all in one convenient location?</HandItem>
                                </ul>
                            </div>
                            <div className='col-lg-4 holding-hand'>
                                <img data-aos="fade-up" data-aos-delay="500" src='/holdinghand.png' />
                            </div>
                            <div className='col-lg-4 helping-box'>
                                <HandMainHeader>Our Helping Hand</HandMainHeader>
                                <ul>
                                    <HandItem><HandHeader> Guidance from Skilled Professionals : </HandHeader>  Our brokerage firm offers personalized investment guidance from skilled professionals on strategies, portfolio management, and market trends.</HandItem>

                                    <HandItem><HandHeader>  Research and Analytics : </HandHeader>We equip retail investors with a diverse array of research reports, thorough market analyses, and investment recommendations to empower informed decision-making.</HandItem>

                                    <HandItem><HandHeader>   Customer Support :  </HandHeader>Our dedicated customer service representatives and physical branches provide invaluable offline support, catering to investors who prefer face-to-face interactions or seek assistance with intricate transactions.</HandItem>

                                    <HandItem><HandHeader>   Value-added Services :  </HandHeader>With over seven decades of trusted reputation , We also provide a variety of value-added services, including IPO applications, estate planning, tax advisory, and wealth management solutions, to meet diverse financial needs and elevate the investment experience all under one roof .</HandItem>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function HandItem({ children }) {
    return (
        <li data-aos="fade-up" data-aos-delay="500">{children}</li>
    )
}
function HandHeader({ children }) {
    return (
        <strong><FaArrowCircleRight className='imported-icons' /> {children} </strong>
    )
}
function HandMainHeader({ children }) {
    return (
    <>
        <h3 data-aos="fade-up" data-aos-delay="500">{children}</h3><hr></hr>
    </>
    )
}
export default HoldingHandSolution