import React from 'react';
import { FaStar as StarIcon } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AboutHeader from './AboutHeader';
import './About.css'

function Timeline() {
    return (<>
        <AboutHeader heading="Milestones" />

        <div className='milestones-timeline'>
            <div className='sec-headers'>
                <h3><span>NNM </span>Milestone</h3>
            </div>

            <VerticalTimeline lineColor='#ffae42'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2024"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                    icon={<img src='/Milestones/buildinglogo.png' width="100%" style={{ zIndex: "-1" }} />}
                >
                    <h3 className="vertical-timeline-element-title timeline-heading"> Market Maker</h3>
                    <p>
                    - Acted as Market Maker for 3 SME IPOs (and ongoing).<br/>
- Raised ₹139.38 crores in funds so far.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2023"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                    icon={<img src='/Milestones/smelogo.png' width="100%" style={{ zIndex: "-1" }} />}
                >
                    <h3 className="vertical-timeline-element-title timeline-heading"> Market Maker</h3>
                    <p>
                    - Acted as Market Maker for 7 SME IPOs.<br/>
- Raised ₹175.69 crores in funds.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2022"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                    icon={<img src='/Milestones/bse.png' width="100%" style={{ zIndex: "-1" }} />}
                >
                    <h3 className="vertical-timeline-element-title timeline-heading"> Market Maker</h3>
                    <p>
                    - Acted as Market Maker for 6 SME IPOs.<br/>
- Raised ₹169.57 crores in funds.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2021"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                    icon={<img src='/Milestones/buildinglogo.png' width="100%" style={{ zIndex: "-1" }} />}
                >
                    <h3 className="vertical-timeline-element-title timeline-heading"> Market Maker</h3>
                    <p>
                        - Acted as Market Maker for 5 SME IPOs.<br/>
                        - Raised approximately ₹66.33 crores in funds.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2020"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                    icon={<img src='/Milestones/currencylogo.png' width="100%" style={{ zIndex: "-1" }} />}
                >
                    <h3 className="vertical-timeline-element-title timeline-heading"> PMS License</h3>
                    <p>
                        NNM Securities Pvt. Ltd. obtained PMS LICENSE from SEBI on November 25, 2020.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2019 "
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                    icon={<img src='/Milestones/buildinglogo.png' width="100%" style={{ zIndex: "-1" }} />}
                >
                    <h3 className="vertical-timeline-element-title timeline-heading">Incorporation of PMS.</h3>
                    <p>
                        NNM Securities Pvt. Ltd. INZ Certificate obtained & incorporation of Investment and wealth advisory LLP
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/smelogo.png' width="100%" />}
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
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/cdsl.png' width="100%" />}
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
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/bse.png' width="80%" />}
                >
                    <h3 className="vertical-timeline-element-title">Tasty Diary Advisory and Market Maker</h3>
                    <p>
                        Advisory and Market Maker to the company, NNM Group was able to get 98 times over subscription for Tasty Diary Specialties Ltd.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/currencylogo.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">NNM NextGen Pvt. Ltd.</h3>
                    <p>
                        Formation of NNM NextGen Advisory Pvt. Ltd. a Compliance Partner and Advisory to Companies
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/certified.png' width="80%" />}
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
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/handplantlogo.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">MSE
                        NNM Securities Pvt. Ltd.</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        MSE NNM Securities Pvt. Ltd taken worked on biggest SME IPO of it's time Intimates Fashion Ltd.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2011"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/membership.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">NNM Securities Pvt. Ltd</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        NNM Securities Pvt. Ltd.-Currency Membership Taken.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2009"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/nselogo.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">NSE NNM Securities Pvt. Ltd</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        NSE Cash & F&O Membership taken
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2008"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/bse.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">NCDEX NNM Securities Pvt. Ltd.</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        BSE Currency Membership Taken
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2006"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/cdsl.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">CDSL Membership Taken</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        AMFI Registered member for Mutual Funds
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2004"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/bse.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">F&O Membership Taken</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        NNM Securities Pvt. Ltd BSE F&O Membership taken. Vibhuti Enterprise - MCX Commodities Membership taken in Sister concern
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="1998"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/bse.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">NNM Securities Pvt. Ltd.</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        BSE Member Under Cash Segment
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="1997"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/buildinglogo.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">NNM Securities Pvt. Ltd.</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        Converted to NNM Securities Pvt. Ltd.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="1950"
                    iconStyle={{ background: 'white', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}

                    icon={<img src='/Milestones/bse.png' width="100%" />}
                >
                    <h3 className="vertical-timeline-element-title">NNM Mansurwala</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                        CBSE member broker came into existence
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
