import React from 'react'
import './Footer.css'
import { FaAddressCard, FaChevronCircleRight, FaMailBulk, FaPhoneSquareAlt } from "react-icons/fa";
import { FaAddressBook, FaMailchimp, FaMobile } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import PopupFooterContent from './PopupFooterContent';



const Footer = () => {


    return (
        <>
            <PopupFooterContent/>
            <footer id='footer' style={{ backgroundColor: "#09090A" }}>
            <div className='escalation-matrix'>
                    <div className='container'>
                    <ul>
                        <li><NavLink to='/investor-grievance'> Investor Grievance Escalation Matrix</NavLink></li>
                        <li><NavLink to='/dp-escalation-matrix'>DP Escalation Matrix</NavLink></li>
                        <li><NavLink to='/client-bank-account-details'>Client Bank Account Details</NavLink></li>
                    </ul>
                    </div>
                </div>
                
                <div className='investor-wrapper'>
                    <div className='container-fluid'>
                        <div className='row investor-row'>
                            <div className='col-lg-3 investor-headings'>
                                <h3>
                                    <a href='#'>Attention Investors </a> |
                                    <a href='#'> KYC  </a> |
                                    <a href='#'> IPO</a>
                                </h3>
                            </div>
                            <div className='col-lg-9 investor-marquee'>
                                <marquee> Prevent Unauthorised transactions in your account. Update your mobile numbers/email IDs with your
                                    stock brokers / Depository Participate. Receive information of your transactions directly from Exchange on
                                    your mobile/email at the end of the day..</marquee>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer-navigate'>
                    <div className='container-fluid'>
                        <div className='row footer-links'>
                            <div className='col-lg-5 policy-links links'>
                                <h3>Privacy Policy</h3>
                                <div className='list-content'>
                                    <ul>
                                        <li> <FaChevronCircleRight /> <NavLink to='https://evoting.cdslindia.com/Evoting/EvotingLogin'>CDSL E-VOTING</NavLink></li>
                                        <li> <FaChevronCircleRight /><NavLink to='https://www.sebi.gov.in/'> SEBI</NavLink></li>
                                        <li> <FaChevronCircleRight /><NavLink to='http://www.fmc.gov.in/index.aspx'> FMC</NavLink></li>
                                        <li> <FaChevronCircleRight /> <NavLink to='http://www.nse-india.com/'>NSE</NavLink></li>
                                        <li> <FaChevronCircleRight /><NavLink to='https://www.bseindia.com/'> BSE</NavLink></li>
                                        <li> <FaChevronCircleRight /> <NavLink to='https://www.mcxindia.com/'>NCX</NavLink></li>
                                        <li> <FaChevronCircleRight /> <NavLink to='https://scores.gov.in/scores/Welcome.html'>SCORES</NavLink></li>
                                    </ul>
                                    <ul>
                                        <li>  <FaChevronCircleRight /><NavLink to='/terms-and-conditions'> TERMS & CONDITIONS</NavLink></li>
                                        <li> <FaChevronCircleRight /><NavLink to='/privacy-policy'> PRIVACY POLICY</NavLink></li>
                                        <li> <FaChevronCircleRight /><NavLink to='/refund-and-cancellation-policy'> REFUND & CANCELLATION POLICY</NavLink></li>
                                        <li>  <FaChevronCircleRight /><NavLink to='/disclaimer'>DISCLAIMER</NavLink></li>
                                        <li>  <FaChevronCircleRight /><NavLink to='/disclosure'>DISCLOSURE</NavLink></li>
                                        <li>  <FaChevronCircleRight /><NavLink to='/kmp-details'>KMP DETAILS</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-3 social-links links'>
                                <h3>Social</h3>
                                <ul>
                                    <li>  <FaChevronCircleRight /><NavLink to='/'>HOME</NavLink></li>
                                    <li> <FaChevronCircleRight /> <NavLink to='/about'>ABOUT US</NavLink></li>
                                    <li> <FaChevronCircleRight /><NavLink to='/services'>SERVICES</NavLink></li>
                                    <li> <FaChevronCircleRight /><NavLink to='/wealth'> WEALTH MANAGEMENT</NavLink></li>
                                    <li> <FaChevronCircleRight /><NavLink to='/blog'> BLOG</NavLink></li>
                                    <li>  <FaChevronCircleRight /><NavLink to='/contact'>CONTACT</NavLink></li>
                                </ul>
                            </div>
                            <div className='col-lg-4 registration-numbers links'>
                                <h3>Registration</h3>
                                <p className="reg-numbers">
                                    NSE CM-INZ000234235 <br />
                                    NSE F&O - INZ000234235 <br />
                                    NSE CD-INZ000234235 <br />
                                    BSE CM–INZ000234235 <br />
                                    BSE F&O - INZ000234235 <br />
                                    BSE CD- INZ000234235 <br />
                                    MCX-SX CM-INZ000234235 <br />
                                    MCX-SX F&O - INZ000234235 <br />
                                    MCX-SX CD-INZ000234235 <br />
                                    NSDL - IN-DP-NSDL-319-2009ROC <br />
                                    REG - 21-097912 <br />
                                    CDSL : IN-DP-242-2016 <br />
                                    SEBI-PMS: INP000007100<br />
                                    LEI- 3358007DLCFNHY8J2F96
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='compliance-section'>
                        <div className='container'>
                            <div className='row compliance-row'>
                                <div className='col-lg-6 compliance-col'>
                                    <h3>filiing complaints on scores - easy & quick</h3>
                                    <ul className='compliance-outer-list'>
                                        <li> <span> - </span> Register on Scores Portal</li>
                                        <li> <span> - </span> Mandatory Details for filing complaints on Scores :
                                            <ul className='compliance-inner-list'>
                                                <li>Name</li>
                                                <li>PAN</li>
                                                <li>Address</li>
                                                <li>Mobile Number</li>
                                                <li>Email id</li>
                                            </ul>
                                        </li>
                                        <li>  <span> - </span> Benefits :
                                            <ul className='compliance-inner-list'>
                                                <li> Effective communication</li>
                                                <li> Speedy redressal of the grievances</li>
                                            </ul>

                                        </li>
                                    </ul>

                                </div>
                                <div className='col-lg-6 compliance-col compliance-contact'>
                                    <h3>Compliance Officer</h3>
                                    <ul className='compliance-contact-list compliance-outer-list'>
                                        <li><FaAddressCard /> Apurva Mittal</li>
                                        <li><FaPhoneSquareAlt /> 022-40790035/022-40790024</li>
                                        <li><FaAddressBook />9152943075</li>
                                        <li><FaMailBulk />compliance@nnmsecurities.com/ cdsl@nnmsecurities.com</li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='container'>
                        <div className='row marquee-second'>
                            <div className='col-lg-2 second-marquee-col '>
                                    <h3>Ivnvestor Protection</h3>
                            </div>
                            <div className='col-lg-10 second-marquee-col '>
                            <marquee> Trading and investments in Equities and Commodities are subject to market risk, there is no assurance or guarantee of the returns. Please read the Risk Disclosure Document and Do's & Don'ts prescribed by the Exchanges carefully before investing.</marquee>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2021 NNM Securities.com</p>
                    </div>



                </div>

            </footer>

        </>
    )
}

export default Footer