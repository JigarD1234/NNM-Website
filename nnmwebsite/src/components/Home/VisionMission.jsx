import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { GiArcheryTarget } from 'react-icons/gi'
import { IoEyeSharp } from 'react-icons/io5'

const VisionMission = () => {
    return (
        <>
            <div className='vision-mission'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 vision-box vision-wrapper">
                            <h2 data-aos="fade-up" data-aos-delay="500"><IoEyeSharp style={{ paddingBottom: '10px' }} /> OUR VISION</h2>
                            <p data-aos="fade-up" data-aos-delay="500"><strong className='text-uppercase'>To pioneer a new benchmark</strong> in the realm of broking and finance, setting a standard that resonates not only within the dynamic landscape of India but also on a global scale. Our VISION  is to inspire confidence and propel success in the ever-evolving world of finance."</p>
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

        </>
    )
}

export default VisionMission