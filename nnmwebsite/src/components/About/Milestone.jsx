import React from 'react';
import { FaStar as StarIcon } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AboutHeader from './AboutHeader';
import './About.css'

function Timeline() {
    return (<>
        <AboutHeader heading="Milestones"/>
    
        <div className='milestones-timeline'>
            <div className='sec-headers'>
                <h3><span>NNM </span>Milestone</h3>
            </div>
        
        <VerticalTimeline lineColor='#ffae42'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ffae42', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid #ffae42' }}
                date="2019 - present"
                iconStyle={{ background: 'white', color: '#fff',display:"flex", justifyContent:"center", alignItems:"center"}}
                icon={<img src='/Milestones/buildinglogo.png' width="100%" style={{zIndex:"-1"}} />}
            >
                <h3 className="vertical-timeline-element-title timeline-heading">Incorporation of PMS.</h3>
                <p>
                NNM Securities Pvt. Ltd. INZ Certificate obtained & incorporation of Investment and wealth advisory LLP
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019"
                iconStyle={{ background: 'white', color: '#fff',display:"flex", justifyContent:"center", alignItems:"center"}}

                icon={<img src='/Milestones/smelogo.png' width="100%"/>}
            >
                <h3 className="vertical-timeline-element-title">SME's NNM Group.</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                <p>
                NNM Group in capacity of Advisor and Market Maker on it's 20th SME IPO
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018"
                iconStyle={{ background: 'white', color: '#fff',display:"flex", justifyContent:"center", alignItems:"center"}}

                icon={<img src='/Milestones/cdsl.png' width="100%"/>}
            >
                <h3 className="vertical-timeline-element-title">10th SMEs NNM Group.</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
                <p>
                NNM Group worked on its <br></br>10th SME IPO
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018"
                iconStyle={{ background: 'white', color: '#fff',display:"flex", justifyContent:"center", alignItems:"center"}}

                icon={<img src='/Milestones/bse.png' width="80%"/>}
            >
                <h3 className="vertical-timeline-element-title">Tasty Diary Advisory and Market Maker</h3>
                <p>
                Advisory and Market Maker to the company, NNM Group was able to get 98 times over subscription for Tasty Diary Specialties Ltd.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2017"
                iconStyle={{ background: 'white', color: '#fff',display:"flex", justifyContent:"center", alignItems:"center"}}

                icon={<img src='/Milestones/currencylogo.png' width="100%"/>}
            >
                <h3 className="vertical-timeline-element-title">NNM NextGen Pvt. Ltd.</h3>
                <p>
                Formation of NNM NextGen Advisory Pvt. Ltd. a Compliance Partner and Advisory to Companies
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016"
                iconStyle={{ background: 'white', color: '#fff',display:"flex", justifyContent:"center", alignItems:"center"}}

                icon={<img src='/Milestones/certified.png' width="80%"/>}
            >
                <h3 className="vertical-timeline-element-title">Certified</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
                <p>
                Certificate obtained in Sister Concern
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2013"
                iconStyle={{ background: 'white', color: '#fff',display:"flex", justifyContent:"center", alignItems:"center"}}

                icon={<img src='/Milestones/handplantlogo.png' width="100%"/>}
            >
                <h3 className="vertical-timeline-element-title">MSE
NNM Securities Pvt. Ltd.</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                <p>
                MSE NNM Securities Pvt. Ltd taken worked on biggest SME IPO of it's time Intimates Fashion Ltd.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
        </div>
        </>
    );
}

export default Timeline;
