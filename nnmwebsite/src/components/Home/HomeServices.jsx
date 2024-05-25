import React, { useState } from 'react'
import ServiceItem from './ServiceItem'

const HomeServices = () => {
    const [activeService, setActiveService] = useState("ALGO")
    const handleActiveService = (serviceName) => {
      setActiveService(serviceName)
    }
  return (
    <>
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
            <div className='row home-service-row'>
              <div className='col-lg-7'>
                <div data-aos="fade-up" data-aos-delay="500" className='service-content'>

                  <ServiceItem className={activeService === "Equity" ? 'service-show' : 'service-hide'} heading="Equity" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />

                  <ServiceItem className={(activeService === "Derivatives") ? 'service-show' : 'service-hide'} heading="Derivatives" desc1="Capital-efficient trading with reduced upfront investment." desc2="Effective risk management through hedging strategies " desc3="Speculative opportunities for shorter-term returns" />

                  <ServiceItem className={activeService === "Commodities" ? 'service-show' : 'service-hide'} heading="Commodities" desc1="Transparent price discovery in commodity futures market." desc2="Personalized services tailored to client needs." desc3="Cost-efficient futures trading for streamlined participation." />

                  <ServiceItem className={activeService === "Currency" ? 'service-show' : 'service-hide'} heading="Currency" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />

                  <ServiceItem className={activeService === "Mutual Funds" ? 'service-show' : 'service-hide'} heading="Mutual Funds" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />

                  <ServiceItem className={activeService === "ALGO" ? 'service-show' : 'service-hide'} heading="ALGO" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />

                  <ServiceItem className={activeService === "IPO" ? 'service-show' : 'service-hide'} heading="IPO" desc1="Personalized services tailored to individual needs." desc2="In-depth research for informed decision-making." desc3="Goal-oriented investment strategies for long-term success." />
                </div>
              </div>
              <div className='col-lg-5'>
                 <div className='img-service-svg'>
                   {activeService == 'Equity' && (<img src='/equity-service.svg'/>)}
                   {activeService == 'Derivatives' && (<img src='/service-derivative.svg'/>)}
                   {activeService == 'Commodities' && (<img src='/service-commodity.svg'/>)}
                   {activeService == 'Currency' && (<img src='/service-currency.svg'/>)}
                   {activeService == 'Mutual Funds' && (<img src='/service-mutual-funds.svg'/>)}
                   {activeService == 'IPO' && (<img src='/service-ipo.svg'/>)}
                   {activeService == 'ALGO' && (<img src='/service-algo.svg'/>)}
                 </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default HomeServices