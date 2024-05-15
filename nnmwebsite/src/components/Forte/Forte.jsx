import React from 'react'
import './Forte.css'
import AboutHeader from '../About/AboutHeader'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Forte = () => {
    return (
        <>
        <AboutHeader heading='Our Forte'/>
        <div className='forte'>
            <div className='container'>
                <div className='row forte-row'>
                    <div className='col-lg-6 forte-col'>
                        <h1>कर्मणा धर्मणा सत्येन धनं प्राप्यते।<br/>
                            श्रमेण सत्येन धनं प्राप्यते।<br/>
                            आचार्याचार्यनीयशिष्यादिभ्यो धनं प्राप्यते॥"</h1>
                        <h3>
                        <FaQuoteLeft className='forte-icon'/> Through action, righteousness, and truth, wealth is attained.<br/>
                            Through labor and truth, wealth is attained.<br/>
                            Through the guidance of teachers and virtuous conduct, wealth is attained.<FaQuoteRight className='forte-icon'/>
                        </h3>
                    </div>
                    <div className='col-lg-6 forte-img'>
                        <img src='/fortesvg.svg'/>
                    </div>

                </div>

                <div className='forte-content'>
                    <h3>Conclusion</h3>
                    <p>In overall our conclusion describing our forte’ is  our company excels in providing tailored financial solutions, blending expertise with innovation. With a robust portfolio spanning diverse sectors, offering personalized services that cater to the unique needs of our clients. Our commitment to transparency and integrity fosters trust, ensuring enduring partnerships. Leveraging cutting-edge technology, we deliver seamless experiences and drive impactful results. Through diligent risk management and strategic insights, we empower our clients to navigate complex financial landscapes with confidence. At the heart of our ethos lies a dedication to delivering value and fostering growth, making us a trusted partner in financial.</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Forte