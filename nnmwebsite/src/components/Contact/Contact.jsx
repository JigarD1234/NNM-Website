import React, { useState } from 'react'
import './Contact.css'
import contactVector from '../../assets/vector/contactusvector.png'
import contactCol from '../../assets/vector/contactemail.png'
import deskImage from '../../assets/vector/byphonevector.png'
import branchImage from '../../assets/vector/branchlocationvector.png'


import { FaAddressBook, FaArrowAltCircleRight, FaMailBulk, FaPhone, FaPhoneAlt, FaPhoneSquareAlt, FaVoicemail } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Contact = () => {
    const [selectedDesk, setSelectedDesk] = useState('Equity-Desk');
    const [selectedBranch, setSelectedBranch] = useState('Mumbai')

    const handleDeskChange = (event) => {
        setSelectedDesk(event.target.value);
    };
    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value)
    }
    return (
        <>
            <div className='contact-us'>
                <div className='container'>
                    <div className='row contact-row'>
                        <div className='col-lg-6 contact-col'>
                            <h3>Connect With Us</h3>
                            <h1>Connect with Our Team for Personalized Investment Solutions</h1>
                            <ul>
                                <li><FaAddressBook className='contact-icon' /><span><strong>Address</strong> <br />NNM House, B-6 & 7, Plot No. 31,<br></br>
                                Shri Siddhivinayak Plaza, 2nd Floor,
                                C.T. No. 602,<br></br> Village Oshiwara,
                                Off Link Road, Andheri (West),
                                Mumbai - 400058 
                                </span>                            </li>
                                <li><FaPhoneSquareAlt className='contact-icon' /> <span><strong>Phone</strong> <br />022-40790020, 
                                    022-22722280/81, 022-22723944</span>
                                </li>
                                <li><FaMailBulk className='contact-icon' /> <span><strong>Email</strong><br />compliance@nnmsecurities.com</span>
                                </li>
                            </ul>
                            {/* <NavLink to='https://www.google.com/maps/dir//NNM+Securities+Pvt.+Ltd.,+Off+New+Link+Road,+Veera+Desai+Industrial+Estate,+Andheri+West,+Mumbai,+Maharashtra/@19.1396225,72.7922081,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x3be7b63ca3e6559f:0xae90829f0bb61842!2m2!1d72.833408!2d19.139546!3e0?entry=ttu'>Get Directions</NavLink> */}
                        </div>
                        <div className='col-lg-6 contact-vector'>
                            <img src={contactVector} />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='email-section'>
                <div className='container'>
                    <div className='row email-row'>
                        <div className='col-lg-5 email-col'>
                            <h4>Email Us Now !</h4>
                            <h2>Have questions or feedback? Reach out to us via email at <strong>compliance@nnmsecurities.com</strong>, and we'll respond promptly</h2>
                        </div>
                        <div className='col-lg-7 contact-image'>
                            <div className='contact-services'>
                                <h2>Empower Yourself with NNM Group , Choose Your Path : </h2>
                                <hr></hr>
                                <div className='contact-services-list'>
                                    <h3>Personal Counselling</h3>
                                    <h3>Give Us Feedback</h3>
                                    <h3>Open An Account</h3>
                                    <h3>Query</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='branch-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 desk-col branch-sec-col '>
                            <DeskHeader deskHeading="By Phone" />

                            <div className='desk-first'>
                                <DeskImage deskBranchImage={deskImage} />

                                <div className='desk-first-title'>
                                    <h4>Feel free to contact us by phone for any questions about our products and services</h4>
                                    <div className="select select-service" tabIndex="1">
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt1"
                                            value="Equity-Desk"
                                            checked={selectedDesk === 'Equity-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt1" className="option">Equity Desk</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt2"
                                            value="Depository-Desk"
                                            checked={selectedDesk === 'Depository-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt2" className="option">Depository Desk</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt3"
                                            value="IPO-Desk"
                                            checked={selectedDesk === 'IPO-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt3" className="option">Mutual Funds & IPO Desk</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt4"
                                            value="Commodities-Desk"
                                            checked={selectedDesk === 'Commodities-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt4" className="option">Commodities Desk</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt5"
                                            value="Currency-Desk"
                                            checked={selectedDesk === 'Currency-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt5" className="option">Currency Desk</label>
                                    </div>
                                    {
                                    selectedDesk === 'Equity-Desk'?(<DeskAddressDetails tel={0o22345667} phone = {123456789} email = "equity@gmail.com"/>):
                                    selectedDesk === 'Depository-Desk'?(<DeskAddressDetails tel={0o22345667} phone = {456789012} email = "depository@gmail.com"/>):
                                    selectedDesk === 'IPO-Desk'?(<DeskAddressDetails tel={0o22345667} phone = {545325242} email = "IPO@gmail.com"/>):
                                    selectedDesk === 'Commodities-Desk'?(<DeskAddressDetails tel={0o22345667} phone = {89431413} email = "Commodities@mail.com"/>):
                                    (<DeskAddressDetails tel={0o22345667} phone = {4324341212} email = "currency@gmail.com"/>)

                                    
                                    }

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 branch-col branch-sec-col '>
                            <DeskHeader deskHeading="Our Branches" />

                            <div className='desk-first'>
                                <DeskImage deskBranchImage={branchImage} />

                                <div className='desk-first-title'>
                                    <h4>Feel free to contact us by phone for any questions about our products and services. </h4>
                                    <div className="select select-service" tabIndex="1">
                                        <input
                                            className="selectopt"
                                            name="test2"
                                            type="radio"
                                            id="branch1"
                                            value="Mumbai"
                                            checked={selectedBranch === 'Mumbai'}
                                            onChange={handleBranchChange}
                                        />
                                        <label htmlFor="branch1" className="option">Mumbai</label>
                                        <input
                                            className="selectopt"
                                            name="test2"
                                            type="radio"
                                            id="branch2"
                                            value="Delhi"
                                            checked={selectedBranch === 'Delhi'}
                                            onChange={handleBranchChange}
                                        />
                                        <label htmlFor="branch2" className="option">Delhi</label>
                                        <input
                                            className="selectopt"
                                            name="test2"
                                            type="radio"
                                            id="branch3"
                                            value="Pune"
                                            checked={selectedBranch === 'Pune'}
                                            onChange={handleBranchChange}
                                        />
                                        <label htmlFor="branch3" className="option">Pune</label>
                                        
                                    </div>  
                                    <BranchDetails address="Andheri West NNM Securities" phone={1234550} email="nnm@gmail.com"/>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact

const DeskHeader = ({ deskHeading }) => {
    return (<>
        <div className='sec-headers'>
            <h3>{deskHeading}</h3>
        </div>

    </>)
}
const DeskImage = ({ deskBranchImage }) => {
    return (
        <>
            <div className='desk-first-img'>
                <img src={deskBranchImage} />
            </div>
        </>
    )
}
const DeskAddressDetails = ({ tel , email , phone}) => {
    return (<>
        <div className='first-desk-details'>
            <p><strong>Email : </strong><br />{email}</p>
            <p><strong>Tel : </strong><br />{tel}</p>
            <p><strong>Phone : </strong><br />{phone}</p>
        </div>

    </>)
}
const BranchDetails = ({address , email , phone})=>{
    return(<>
    <div className='first-desk-details'>
            <p><strong>Address : </strong><br />{address}</p>
            <p><strong>Email : </strong><br />{email}</p>
            <p><strong>Phone : </strong><br />{phone}</p>
        </div>
       
    </>)
}