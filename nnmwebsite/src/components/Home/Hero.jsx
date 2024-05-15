import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = ({ handlepopupShow }) => {
  return (
    <>
      <div className='hero'>
        <div className='container-fluid'>
          <div className='row hero-home'>
            <div className='col-lg-6 hero-text'>
              <div className='hero-text'>
                <h3 data-aos="fade-up">We Strongly Believe In Chanakya Niti For Financial Success:</h3>
                <h1 data-aos="fade-up" data-aos-delay="100" >|| दैवम् विनतिप्रयत्नम् करोति यत्तद्विफलम् ||</h1>
                <h2 data-aos="fade-up" data-aos-delay="100"> <Typewriter className="custom-typewriter"
                  options={{
                    strings: ['A Well-Planned Work Produces a Good Result'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    pauseFor: 1000
                  }}
                /></h2>
                <button data-aos="fade-up" data-aos-delay="200"
                  onClick={handlepopupShow}
                  className='custom-btn'>Open Account</button>
              </div>
            </div>
            <div className='col-lg-6 hero-img'>
              <img data-aos="fade-up" data-aos-delay="100" src='/herobulls.png' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero