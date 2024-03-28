import React from 'react'
import NikunjMittal from '../../assets/Nikunj_Mittal.jpg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import ApurvaMittal from '../../assets/Apurva_Mittal.jpg'
import PramitSingh from '../../assets/Pramit_Singh_Sabharwal.jpg'
import PremPandey from '../../assets/Prem_Pandey1.jpg'

const Team = () => {
    return (
        <>
            <div className='team'>
                <div className='sec-headers sec-headers-dark'>
                    <h3>Meet Our Team</h3>
                </div>
                <div className='container'>
                    <div className='inner-team-box'>
                        <div className='row team-box-wrapper'>
                            <div className='col-lg-3 team-box'>
                                <TeamCard heading = "Nikunj Mittal" description = "Founder & Ceo - NNM Group" image = {NikunjMittal}/>

                            </div>
                            <div className='col-lg-3 team-box'>
                                <TeamCard heading = "Apurva Mittal" description = "Head of Research & Operation - NNM Securities" image = {ApurvaMittal}/>

                            </div>
                            <div className='col-lg-3 team-box'>
                                <TeamCard heading = "Pramit Singh" description = "Principal Officer - NNM Securities" image = {PramitSingh}/>

                            </div>
                            <div className='col-lg-3 team-box'>
                                <TeamCard heading = "Prem Pandey" description = "Chief Dealer - NNM Securities" image = {PremPandey}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const TeamCard = ({heading,description , image}) => {
    return (
        <>
            <img src={image} />
            <div className='team-content'>
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
            <div className='team-socials'>
                <FaTwitter className='social-icons' />
                <FaFacebook className='social-icons' />
                <FaLinkedin className='social-icons' />
                <FaInstagram className='social-icons' />

            </div>



        </>
    )
}

export default Team