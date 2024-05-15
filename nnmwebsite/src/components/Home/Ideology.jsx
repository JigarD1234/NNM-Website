import React from 'react'
import { NavLink } from 'react-router-dom'

const Ideology = () => {
    return (
        <>
            <div className='ideology'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-5'>
                        </div>
                        <div className='col-lg-7 ideology-heading'>
                            <h3>our ideology</h3>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='butterfly-heading'>
                        <h3 data-aos="fade-up" data-aos-delay="100">Just as a caterpillar transforms into a butterfly<br></br>so does wealth grow and evolve through patient nurturing and strategic investments</h3>
                        <img data-aos="fade-up" data-aos-delay="100" src='/butterflytransparentideology.png' />
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-7 business-content'>
                            <div className='business-heading'>
                                <h3>the quintessence of business management</h3>
                            </div>
                            <h2 data-aos="fade-up" data-aos-delay="500">your trusted partner in firm and brokerage services</h2>
                            <p data-aos="fade-up" data-aos-delay="500"> As <strong>Plolip Kotlen</strong> says, <strong>"In the past, it was packaging a logo and done. Today, your brand provides a promise."</strong> At <strong>NNM Group</strong>, we strive for our brand to be a purposeful promise that extends beyond the profit agenda, aiming to build deep emotional connections based on meaningful and virtuous outcomes.At NNM Group, we echo Philip Kotler's sentiment, recognizing that in the modern landscape, a brand transcends mere packaging and logos; it embodies a promise. Our commitment is to cultivate a purposeful brand, one that resonates deeply beyond profit margins</p>
                            <NavLink to='/about' className='about-read-more'>Read More..</NavLink>
                        </div>
                        <div className='col-lg-5 business-image'>
                            <img src='/businessmanagement1.png' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ideology