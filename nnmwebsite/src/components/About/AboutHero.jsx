import React from 'react'
import './About.css'
import aboutus from '../../assets/aboutus.png'
import aboutus2 from '../../assets/financialsolutionpn.png'
import awardsImage from '../../assets/awardsimage.jpg'
import AboutHeader from './AboutHeader'
import vectorAbout from '../../assets/vector/vectorabout.png'
import vectorAboutBg from '../../assets/vector/vectoraboutbg.png'
import vectorAbout2 from '../../assets/vector/vectorabout2.png'

const AboutHero = () => {


    return (
        <>
           <AboutHeader heading ="About"/>
            <div className='about-page-section'>
                <div className='sec-headers'>
                    <h3>About nnm group</h3>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 about-page-content'>
                            <h3>About Us</h3>
                            <h2>Empowering Your Financial Journey with Personalized Strategies and Trusted Expertise</h2>
                            <p>NNM Group is a comprehensive financial service provider, offering not just services but customized and personalized strategies that are insightful, smarter, and aptly devised.

                                We strongly believe in Chanakya Niti for financial success: "दैवम् विनतिप्रयत्नम् करोति यत्तद्विफलम्" which means "A well-planned work produces a good result." Since its inception in 1950, NNM Group has invested time and resources in gaining expertise and innovating services, aiming for profitable returns for its investors.</p>
                        </div>
                        <div className='col-lg-6 about-page-image'>
                            {/* <img src={aboutus} /> */}
                            <img src={vectorAbout2} />

                        </div>
                    </div>

                </div>
            </div>
            <div className='about-second-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 about-second-image'>
                        <img src={vectorAbout}/>

                        </div>
                        <div className='col-lg-6 about-second-content '>
                            <h2>Personalized Financial Solutions and Unwavering Commitment</h2>
                            <p>NNM Group caters to a diverse client base, including institutions, corporations, and individuals, providing an extensive range of financial products and services. Originating from a small office with a handful of employees, our team's commitment to continuous innovation has led to a dream team of over 70+ employees today. <br /><br /> Our core value at NNM Group is a customer-first attitude, fostering strong trust relationships that result in a win-win situation for everyone associated with us. We offer tailor-made products and services, placing the customer's needs at the forefront. Employing real-time customer service through effective individual account information management, we have successfully satisfied more than 19,000 clients across various business segments. We continually build on our strengths to deliver commendable services to our expanding customer base.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-mission'>
                <div className='container'>
                    <hr></hr>
                    <div className='row about-vision-wrapper'>
                        <div className='col-lg-3 about-vision'>
                            <h3>Our Vision</h3>
                            <p>To inspire confidence and propel success in the ever-evolving world of finance.</p>
                        </div>
                        <div className='col-lg-3 about-vision'>
                            <h3>Our Mission</h3>
                            <p> Fostering a community where informed decisions pave the way to financial prosperity.</p>
                        </div>
                        <div className='col-lg-3 about-vision'>
                            <h3>Our Values</h3>
                            <p> Upholding the core values of integrity, transparency, professionalism, client-centricity</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='awards-recognition'>
                <div className='sec-headers awards-header'>
                    <h3>Awards & Recognition</h3>

                </div>
                <div className='container '>
                    <div className='row awards-wrapper'>
                        <div className='col-lg-6 awards-image '>
                            <img src={awardsImage} />

                        </div>
                        <div className='col-lg-6 awards-content '>
                            <h1>- Honoring the Dedication and Expertise of NNM Group</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutHero;