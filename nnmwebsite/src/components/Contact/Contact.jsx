import React, { useState } from 'react'
import './Contact.css'
import contactVector from '../../assets/vector/contactusvector.png'
import contactCol from '../../assets/vector/contactemail.png'
import deskImage from '../../assets/vector/byphonevector.png'
import branchImage from '../../assets/vector/branchlocationvector.png'


import { FaAddressBook, FaArrowAltCircleRight, FaMailBulk, FaPhone, FaPhoneAlt, FaPhoneSquareAlt, FaVoicemail } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Contact = () => {
    const [selectedDesk, setSelectedDesk] = useState('Dealer-Desk');
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

            {/* <div className='email-section'>
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
            </div> */}

            <div className='branch-section' >
                <div className='container'>
                    <div className='row branch-sec-row'>
                        <div className='col-lg-6 branch-sec-col'>
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
                                            value="Dealer-Desk"
                                            checked={selectedDesk === 'Dealer-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt1" className="option">Dealer Desk</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt2"
                                            value="Wealth-Desk"
                                            checked={selectedDesk === 'Wealth-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt2" className="option">Wealth Desk</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt3"
                                            value="E-KYC"
                                            checked={selectedDesk === 'E-KYC'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt3" className="option">E KYC</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt4"
                                            value="Compliance-Desk"
                                            checked={selectedDesk === 'Compliance-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt4" className="option">Compliance Desk</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt5"
                                            value="Billing-Desk"
                                            checked={selectedDesk === 'Billing-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt5" className="option">Billing Desk</label>
                                        <input
                                            className="selectopt"
                                            name="test"
                                            type="radio"
                                            id="opt6"
                                            value="CDSL-Desk"
                                            checked={selectedDesk === 'CDSL-Desk'}
                                            onChange={handleDeskChange}
                                        />
                                        <label htmlFor="opt6" className="option">CDSL Desk</label>
                                    </div>
                                    {
                                    selectedDesk === 'Dealer-Desk'?(<DeskAddressDetails tel='022- 40790012/12-19'  email = "dealer@nnmsecurities.com"/>):
                                    selectedDesk === 'E-KYC'?(<DeskAddressDetails tel='022- 40790022'  email = "kyc@nnmsecurities.com"/>):
                                    selectedDesk === 'Compliance-Desk'?(<DeskAddressDetails tel='022- 40790034'  email = "compliance@nnmsecurities.com"/>):
                                    selectedDesk === 'Billing-Desk'?(<DeskAddressDetails tel='022- 40790029'  email = "billing@nnmsecurities.com"/>):
                                    selectedDesk === 'Wealth-Desk' ? (<DeskAddressDetails tel='022- 40790021'  email = "wealth@nnmsecurities.com"/>):
                                    (<DeskAddressDetails tel='022- 40790032/ 33'  email = "cdsl@nnmsecurities.com"/>)

                                    
                                    }

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 branch-sec-col'>
                            <DeskHeader deskHeading="Our Branches" />

                            <div className='desk-first'>
                                <DeskImage deskBranchImage={branchImage} />

                                <div className='desk-first-title'>
                                    <h4>Our offices are located to provide support and services to our clients. . </h4>
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
                                        
                                        
                                    </div>  
                                    
                                    {
                                        selectedBranch === 'Delhi'?(
                                            <BranchDetails address="453, AGARWAL METRO HEIGHTS,NETAJI SUBHASH PLACE, PITAMPURA, DELHI-110034" phone='11-45491175' />
                                        ):<BranchDetails address="NNM House, B-6 & 7, Plot No. 31,
                                        Shri Siddhivinayak Plaza, 2nd Floor, C.T. No. 602,
                                        Village Oshiwara, Off Link Road, Andheri (West), Mumbai - 400058" phone='022-40790020, 022-22722280/81, 022-22723944' />
                                    }
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
const DeskAddressDetails = ({ tel , email }) => {
    return (<>
        <div className='first-desk-details'>
            <p><strong>Email : </strong><br />{email}</p>
            <p><strong>Tel : </strong><br />{tel}</p>
        </div>

    </>)
}
const BranchDetails = ({address , email , phone})=>{
    return(<>
    <div className='first-desk-details'>
            <p><strong>Address : </strong><br />{address}</p>
            <p><strong>Tel : </strong><br />{phone}</p>
    </div>
       
    </>)
}