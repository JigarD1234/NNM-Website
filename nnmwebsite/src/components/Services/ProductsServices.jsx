import React from 'react'
import './ProductServices.css'
import leaf from '../../assets/leaf.png'
import nnmlogo from '../../assets/nnmlogo.png'
import { TbChartHistogram } from "react-icons/tb";
import { FaMagnifyingGlassChart, FaMoneyBillWave, FaMoneyBillWheat, FaMoneyCheckDollar } from "react-icons/fa6";
import { RiFundsBoxFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import productaboutmm from '../../assets/productservicesaboutnnmservices.png'
import productHeroBg from '../../assets/productsservicesbackground3.png'
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../Hero/AccordionItem';

const ProductsServices = () => {
  return (
    <>

      <div className='products-services'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 product-heading'>
              <h3>Services</h3>
              <h1>Products & <br></br>Services</h1>
              <h2>NNM Group's Service Offerings</h2>
            </div>
            <div className='col-lg-6  product-image'>
              <img src={productHeroBg} width="600px" />

            </div>
          </div>
        </div>

      </div>
      {/* <div className='product-about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 product-about-content'>
              <img src={productaboutmm} />

              <h3>About NNM Services</h3>
              <p>At NNM Group, we provide a comprehensive array of financial services tailored to meet the diverse needs of our clients. Whether you're seeking opportunities in equity, derivatives, currency trading, mutual funds, commodities, or IPO investments, our experienced team is dedicated to guiding you through the intricacies of the financial markets. From seasoned investors to those new to trading, we offer personalized strategies designed to optimize your investment portfolio and maximize returns.</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className='service-list'>
        <div className='sec-headers container'>
          <h3>Our Services</h3>
          <p style={{ color: "black", textAlign: "center" }}>Explore a Range of Services Including Equity, Derivatives, Currency, Mutual Funds, Commodities, and IPO Investments.Trust us to deliver tailored solutions aligned with your financial goals, ensuring your journey towards financial success is smooth and rewarding. </p>
        </div>
        <div className='container'>
          <div className='row service-row '>
            <div className='col-lg-3 ps-3 service-col-logo service-col'>
              <div className='service-box-logo'>
                <img src={nnmlogo} />

              </div>
              <div className='service-box-content-default'>
                <h3><TbChartHistogram className='icon-service' /><br />
                  Equity
                </h3>


              </div>
            </div>
            <div className='col-lg-3  service-col'>
              <div className='service-box-content'>
                <h3><FaMoneyBillWheat className='icon-service' /><br />
                  Commodity
                </h3>

                


              </div>
              <div className='service-box-content'>
                <h3>
                  <FaMoneyBillWave className='icon-service' /><br />
                  Currency
                </h3>


              </div>
            </div>
            <div className='col-lg-3  service-col'>
              <div className='service-box-content'>
                <h3><FaMoneyCheckDollar className='icon-service' /><br />
                  Derivative
                </h3>

              </div>
              <div className='service-box-content'>
                <h3><RiFundsBoxFill className='icon-service' /><br />
                  Mutual Funds
                </h3>

              </div>

            </div>
            <div className='col-lg-3 service-col'>

              <div className='service-box-content'>
                <h3><GoOrganization className='icon-service' /><br />
                  IPO
                </h3>

              </div>
              <div className='service-box-content'>
                <h3><FaMagnifyingGlassChart className='icon-service' /><br />
                  ALGO
                </h3>

              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='service-list'>
        <div className='container'>
          <div className='sec-headers'>
            <h3>Our Services</h3>
          </div>
          <div className='row service-section-row'>
            <div className='col-lg-6 service-section-col service-content-col'>
              <img width="70%" src={productaboutmm} />
              <div className='serv-inner-content'>
                <h3>about nnm services</h3>


                <p>At NNM Group, we provide a comprehensive array of financial services tailored to meet the diverse needs of our clients. Whether you're seeking opportunities in equity, derivatives, currency trading, mutual funds, commodities, or IPO investments, our experienced team is dedicated to guiding you through the intricacies of the financial markets. From seasoned investors to those new to trading, we offer personalized strategies designed to optimize your investment portfolio and maximize returns.</p>
              </div>
            </div>
            <div className='col-lg-6  service-section-accordion'>
            <Accordion flush className='custom-accordion' defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className='accordion-item'>
                                <AccordionItem heading = 'Equity' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='accordion-item'>
                                <AccordionItem heading = 'Commodity' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='accordion-item'>
                                <AccordionItem heading = 'Derivatives' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='accordion-item'>
                                <AccordionItem heading = 'Currency' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='accordion-item'>
                                <AccordionItem heading = 'Mutual Funds' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6" className='accordion-item'>
                                <AccordionItem heading = 'IPO' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7" className='accordion-item'>
                                <AccordionItem heading = 'ALGO Trading' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                           

                        </Accordion>

            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default ProductsServices