import React, { useState } from 'react'
import './Hero.css'
import butterflyTransparent from '../../assets/butterflytransparentideology.png'
import heroBulls from '../../assets/herobulls.png'
import holdinghand from '../../assets/holdinghand.png'
import businessImage from '../../assets/businessmanagement1.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowCircleRight, FaChartArea, FaHandshake } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { GiArcheryTarget, GiGrowth } from "react-icons/gi";
import Services from './Services'
import investorUpdate from '../../assets/investor_updae.png'
import AreaChart from './Charts/AreaChart'
import Gainers from './Charts/Gainers'
import TradingViewTickerTapeWidget from './Charts/Ticker'
import teloswhite from '../../assets/MobileViewAppDesignwhite.png'
import googleplay from '../../assets/googleplay.svg'
import appStore from '../../assets/appstore.svg'
import Testimonials from './Testimonials'
import Team from './Team'
import Questions from './Questions'
import { NavLink } from 'react-router-dom'
import Typewriter from 'typewriter-effect';

const Hero = ({ handlepopupShow }) => {
  const [activeService, setActiveService] = useState("ALGO")
  const handleActiveService = (serviceName) => {
    setActiveService(serviceName)
  }

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
                    delay:50,
                    pauseFor: 1000
                  }}
                /></h2>
                <button data-aos="fade-up" data-aos-delay="200"
                  onClick={handlepopupShow}
                  className='custom-btn'>Open Account</button>
              </div>
            </div>
            <div  className='col-lg-6 hero-img'>
              <img data-aos="fade-up" data-aos-delay="100" src={heroBulls} />
           
            </div>
          </div>
        </div>
      </div>

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
            <img data-aos="fade-up" data-aos-delay="100" src={butterflyTransparent}></img>
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
              <img src={businessImage} />
            </div>
          </div>
        </div>
      </div>

      <div className='vision-mission'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 vision-box vision-wrapper">
              <h2 data-aos="fade-up" data-aos-delay="500"><IoEyeSharp style={{ paddingBottom: '10px' }} /> OUR VISION</h2>
              <p  data-aos="fade-up" data-aos-delay="500"><strong className='text-uppercase'>To pioneer a new benchmark</strong> in the realm of broking and finance, setting a standard that resonates not only within the dynamic landscape of India but also on a global scale. Our VISION  is to inspire confidence and propel success in the ever-evolving world of finance."</p>
            </div>
            <div className="col-lg-6 mission-box vision-wrapper">
              <h2 data-aos="fade-up" data-aos-delay="500"> <GiArcheryTarget style={{ paddingBottom: '10px', paddingRight: '5px' }} />OUR MISSION</h2>
              <p data-aos="fade-up" data-aos-delay="500"><strong className='text-uppercase'>Embracing a customer-centric approach</strong> over market-centricity, our ethos revolves around empowering every client to become a well-informed investor. Our MISSION is fostering a community where informed decisions pave the way to financial prosperity."</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 read-empty"></div>
            <div className="col-lg-4 read-more">
              <button>READ MORE <FaArrowRight style={{ fontSize: '20px', paddingLeft: '5px', paddingBottom: '2px' }} /></button>
            </div>
          </div>
        </div>
      </div>

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
                  <li  data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Lack of Investment Guidance : </strong>Retail investors often lack access to seasoned professionals for tailored advice on portfolio managmenet , investment strategies and current market trends.</li>
                  <li  data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Lack of Research Reports : </strong>Retail investors often face challenges accessing comprehensive research reports and market analysis, which can hinder their ability to make well-informed investment decisions. .</li>
                  <li  data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Lack of Offline Assistance Accessibility for Retail Investors :
                  </strong> Certain retail investors may prioritize offline support or in-person interactions, which may not be readily accessible on online-only platforms.</li>
                  {/* <li  data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' />  Lack of Trust :
                    : </strong>Retail investors may harbor apprehensions regarding the trustworthiness and reliability of online platforms, especially concerning asset security and regulatory compliance. </li> */}
                  <li  data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Concerns about Value added services :
                  </strong> Can I as an investor access a comprehensive suite of value-added services, including IPO applications, estate planning, tax advisory, and wealth management solutions, all in one convenient location?</li>
                </ul>
              </div>
              <div className='col-lg-4 holding-hand'>
                <img data-aos="fade-up" data-aos-delay="500" src={holdinghand} />
              </div>
              <div className='col-lg-4 helping-box'>
                <h3  data-aos="fade-up" data-aos-delay="500">Our Helping Hand</h3>
                <hr></hr>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Guidance from Skilled Professionals : </strong>
                    Our brokerage firm offers personalized investment guidance from skilled professionals on strategies, portfolio management, and market trends.</li>
                  <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Research and Analytics : </strong>We equip retail investors with a diverse array of research reports, thorough market analyses, and investment recommendations to empower informed decision-making.
                    .</li>
                  <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Customer Support : </strong> Our dedicated customer service representatives and physical branches provide invaluable offline support, catering to investors who prefer face-to-face interactions or seek assistance with intricate transactions.

                  </li>
                  {/* <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Regulatory Compliance and Security : </strong>
                    With over seven decades of trusted reputation , we inspire confidence in retail investors, guaranteeing the safeguarding of their assets and adherence to regulatory standards.
                  </li> */}
                  <li data-aos="fade-up" data-aos-delay="500"><strong><FaArrowCircleRight className='imported-icons' /> Value-added Services </strong>
                  With over seven decades of trusted reputation , We also provide a variety of value-added services, including IPO applications, estate planning, tax advisory, and wealth management solutions, to meet diverse financial needs and elevate the investment experience all under one roof .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='services' >
        <div className='service-inner' >
          <div className='sec-headers sec-headers-light'>
            <h3 data-aos="fade-up" data-aos-delay="500">Our Services</h3>
            <p data-aos="fade-up" data-aos-delay="500">a comprehensive platform offering a complete range of financial services to fulfill your business needs</p>
          </div>
          <div className='container'>
            <ul data-aos="fade-up" data-aos-delay="500">
              <li className={activeService === "Equity" ? "service-active" : ""} onClick={() => { handleActiveService("Equity") }}>Equity</li>
              <li className={activeService === "Derivatives" ? "service-active" : ""} onClick={() => { handleActiveService("Derivatives") }}>Derivatives</li>
              <li className={activeService === "Commodities" ? "service-active" : ""} onClick={() => { handleActiveService("Commodities") }}>Commodities</li>
              <li className={activeService === "Currency" ? "service-active" : ""} onClick={() => { handleActiveService("Currency") }}>Currency</li>
              <li className={activeService === "Mutual Funds" ? "service-active" : ""} onClick={() => { handleActiveService("Mutual Funds") }}>Mutual Funds</li>
              <li className={activeService === "ALGO" ? "service-active" : ""} onClick={() => { handleActiveService("ALGO") }}>ALGO</li>
              <li className={activeService === "IPO" ? "service-active" : ""} onClick={() => { handleActiveService("IPO") }}>IPO</li>

            </ul>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div data-aos="fade-up" data-aos-delay="500" className='service-content'>

                  <Services className={activeService === "Equity" ? 'service-show' : 'service-hide'} heading="Equity" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />

                  <Services className={(activeService === "Derivatives") ? 'service-show' : 'service-hide'} heading="Derivatives" desc1="Capital-efficient trading with reduced upfront investment." desc2="Effective risk management through hedging strategies " desc3="Speculative opportunities for shorter-term returns" />

                  <Services className={activeService === "Commodities" ? 'service-show' : 'service-hide'} heading="Commodities" desc1="Transparent price discovery in commodity futures market." desc2="Personalized services tailored to client needs." desc3="Cost-efficient futures trading for streamlined participation." />

                  <Services className={activeService === "Currency" ? 'service-show' : 'service-hide'} heading="Currency" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />

                  <Services className={activeService === "Mutual Funds" ? 'service-show' : 'service-hide'} heading="Mutual Funds" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />

                  <Services className={activeService === "ALGO" ? 'service-show' : 'service-hide'} heading="ALGO" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />

                  <Services className={activeService === "IPO" ? 'service-show' : 'service-hide'} heading="IPO" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='divider-box'>
        <div className='container'>
          <div  className='row divide-wrapper'>
            <div data-aos="fade-up" data-aos-delay="500" className='col-lg-3 divide-box'>
              <GiGrowth className='divide-icons' />
              <h3>Empowering Your Equity Journey</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className='col-lg-3 divide-box'>
              <FaChartArea className='divide-icons' />
              <h3>Mastering Derivative Dynamics</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className='col-lg-3 divide-box'>
              <FaHandshake className='divide-icons' />
              <h3>Seamless Trading Solutions</h3>
            </div>
          </div>
        </div>
      </div>
         
      <div className='market-charts'>
        <div className='container'>
          <div className='row market-wrapper'>
            <div className='col-lg-6 market-content'>
              <h3 data-aos="fade-up" data-aos-delay="500">Transform Your Financial Future with Our Trading Platform!</h3>
              <h2 data-aos="fade-up" data-aos-delay="500">India's Leading Brokerage for Equity Trading</h2>
              <p data-aos="fade-up" data-aos-delay="500">In today's era, having an additional source of income is crucial for financial stability. This platform guarantees sustainability while also offering favorable returns.</p>
              <p data-aos="fade-up" data-aos-delay="500">Investing in the equity market has the power to ignite your financial journey and fuel your aspirations. With our user-friendly platform and expert guidance, you can take control of your investments and unlock a world of opportunities. Don't wait any longer – start your journey to financial success now!</p>
              <button data-aos="fade-up" data-aos-delay="500" className='section-button'>Open Account</button>
            </div>
            <div className='col-lg-6 market-content-img'>
              <img data-aos="fade-up" data-aos-delay="500" src={investorUpdate} />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#09090A" }} >
          <div className='container trading-chart'>
            <div className='sec-headers sec-headers-dark'>
              <h3 data-aos="fade-up" data-aos-delay="500">Market Trends</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className='row border chart-wrapper'>
              <div className='col-lg-8 area-chart'>
                <AreaChart />
              </div>
              <div className='col-lg-4 gainer-chart' >
                <Gainers />
              </div>
              <div className='col-lg-12 ticker-chart'>
                <TradingViewTickerTapeWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='platforms'>
        <div className='sec-headers sec-headers-dark'>
          <h3 data-aos="fade-up" data-aos-delay="500">Our Platforms</h3>
        </div>
        <div  className='container'>
          <div className='row'>
            <div className='col-lg-6 mt-5 d-flex justify-content-center'>
              {/* <img src={telos} style={{ width: "90%" }} /> */}
              <img data-aos="fade-up" data-aos-delay="600" src={teloswhite} style={{ width: "90%" }} />
            </div>
            <div className='col-lg-6 platform-content'>
              <h3 >Telos</h3>
              <p >Experience the epitome of elegance with our sleek user interface, meticulously designed to provide a seamless and immersive trading experience. Navigate effortlessly through complex market landscapes, empowered by intuitive features and seamless functionality at every turn <br /><br /> Telos platform is your steadfast companion, empowering you to seize every opportunity and navigate the markets with confidence and poise</p>
              <div data-aos="fade-up" data-aos-delay="600" className='google-btn'>
                <a href='#'><img src={googleplay} /></a>
                <a href='#'><img src={appStore} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <Team />

      <Questions />

    </>
  )
}

export default Hero