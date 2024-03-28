import React from 'react'
import './Footer.css'
import { FaAddressCard, FaChevronCircleRight, FaMailBulk, FaPhoneSquareAlt } from "react-icons/fa";
import { FaAddressBook, FaMailchimp, FaMobile } from 'react-icons/fa6';



const Footer = () => {


    return (
        <>
            <footer id='footer' style={{ backgroundColor: "#09090A" }}>
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
                                    your mobile/email at the end of the day.....</marquee>
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
                                        <li> <FaChevronCircleRight />  CDSL E-VOTING</li>
                                        <li> <FaChevronCircleRight /> SEBI</li>
                                        <li> <FaChevronCircleRight /> FMC</li>
                                        <li> <FaChevronCircleRight /> NSE</li>
                                        <li> <FaChevronCircleRight /> BSE</li>
                                        <li> <FaChevronCircleRight /> NCX</li>
                                        <li> <FaChevronCircleRight /> SCORES</li>
                                    </ul>
                                    <ul>
                                        <li>  <FaChevronCircleRight /> TERMS & CONDITIONS</li>
                                        <li> <FaChevronCircleRight /> PRIVACY POLICY</li>
                                        <li> <FaChevronCircleRight /> REFUND & CANCELLATION POLICY</li>
                                        <li>  <FaChevronCircleRight />DISCLAIMER</li>
                                        <li>  <FaChevronCircleRight />DISCLOSURE</li>
                                        <li>  <FaChevronCircleRight />KMP DETAILS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-3 social-links links'>
                                <h3>Social</h3>
                                <ul>
                                    <li>  <FaChevronCircleRight />HOME</li>
                                    <li> <FaChevronCircleRight /> ABOUT US</li>
                                    <li> <FaChevronCircleRight />PORTFOLIO</li>
                                    <li> <FaChevronCircleRight /> TEAM</li>
                                    <li> <FaChevronCircleRight /> BLOG</li>
                                    <li>  <FaChevronCircleRight />PROJECT</li>
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
                                    <h3>Ivnvestor Projection</h3>
                            </div>
                            <div className='col-lg-10 second-marquee-col '>
                            <marquee> Prevent Unauthorised transactions in your account. Update your mobile numbers/email IDs with your
                                    stock brokers / Depository Participate. Receive information of your transactions directly from Exchange on
                                    your mobile/email at the end of the day.....</marquee>
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