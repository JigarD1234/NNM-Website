import React, { useEffect, useRef, useState } from 'react'
import AboutHeader from './AboutHeader'
import { FaArrowRight } from 'react-icons/fa'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { RiCloseFill } from 'react-icons/ri'

const Management = () => {
  const [activeManagement, setActiveMangement] = useState('')
  const [showManagement, setShowManagement] = useState(false)
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleCloseManagement();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleManagement(managementName) {
    setShowManagement(true)
    setActiveMangement(managementName)
  }
  function handleCloseManagement() {
    setShowManagement(false)
  }
  return (
    <>
      <div>
        <AboutHeader heading="Management Message & KMP Team" />
        <div className='management-message'>
          <div className='management-wrapper container'>
            <div>
              <ManagementCardLabel>Head & CEO</ManagementCardLabel>
            </div>
            {/* <hr className='mt-3'/> */}
            <div className='management-card-wrapper'>
              <ManagementCard img='/Nikunj_Mittal.jpg' heading='Nikunj Mittal' designation='Founder & CEO - NNM Group' paragraph='Mr. Nikunj Mittal (Promoter of NNM Group) has a widespread and in-depth experience in the field of equity, derivatives and commodities advisory with proven credentials in the field of wealth creation. With over two decades of rich experience in financial markets, he has played a pivotal role in laying the foundation of the wealth management arm of the group and established himself as known figure in the field of equity and commodity broking. This experience of the Industry has prompted him for developing and setting a Wing for making the SME & MSME grow through the IPO’s.' />
              <ManagementCard img='/Apurva_Mittal.jpg' heading='Apurva Mittal' designation='Head Of Research & Operations - NNM Securities ( PMS ) ' paragraph='Mr. Apurva Mittal holds a Masters degree in Marketing from NarseeMonjee Institute of Management Studies and has done his engineering from K.J Somaiya Institute. He has worked in various MNC’s before joining NNM Group. Since then, he has been a prominent figure leading PMS and Advisory services. He has great experience in the sector of Equities, Mutual funds, Commodities, Derivatives and Currency Derivatives for more than 15 years. He also has an excellent understanding of the industry which helped NNM to generate extraordinary alpha.' />
            </div>
            <div>
              <ManagementCardLabel>Management Team</ManagementCardLabel>
            </div>
            <div className='management-card-wrapper'>
              <div className='management-card management-second' onClick={() => handleManagement('pramit_singh')}>
                <img src='/Pramit_Singh_Sabharwal.jpg' />
                <h4>Pramit Singh Sabharwal <br /><span> Principal Officer - NNM Securities ( PMS )</span></h4>
                <p>Read More<FaArrowRight className='management-ic' /></p>
              </div>
              <div className='management-card management-second' onClick={() => handleManagement('prem_pandey')}>
                <img src='/Prem_Pandey.jpg' />
                <h4>Prem Pandey <br /> <span>  CFO - NNM Securities </span></h4>
                <p>Read More<FaArrowRight className='management-ic' /></p>

              </div>
              <div className='management-card management-second' onClick={() => handleManagement('pravin_dadlika')}>
                <img src='/pravin_j_dadlika.jpg' />
                <h4>Pravin J Dadlika <br /><span>  Chief Dealer - NNM Securities </span></h4>
                <p>Read More<FaArrowRight className='management-ic' /></p>

              </div>

            </div>
            <TeamMembers>
              <CardWithoutImage name='Mangesh Kangutkar' designation='IT Network Head' />
              <CardWithoutImage name='Vikas Kumar' designation='National Head' />
              <CardWithoutImage name='Raeyan Gandhi' designation='Sales & Marketing' />
            </TeamMembers>
            <div className='securities-section'>
              <div className='container securities-box-wrapper'>
                <SecuritiesBox departmentName='Accounts Team'>
                  <DepartmentList>Pranali Kaple</DepartmentList>
                  <DepartmentList>Rakshanda Inamat</DepartmentList>
                  <DepartmentList>Priti Shukla</DepartmentList>
                </SecuritiesBox>
                <SecuritiesBox departmentName='KYC Team'>
                  <DepartmentList>Rahul Mishra</DepartmentList>
                  <DepartmentList>Shrushti Jain</DepartmentList>
                </SecuritiesBox>
                <SecuritiesBox departmentName='Dealer Team'>
                  <DepartmentList>Sameer Tiwaris</DepartmentList>
                  <DepartmentList>Akshay Kharat</DepartmentList>
                </SecuritiesBox>
                <SecuritiesBox departmentName='Demat Team'>
                  <DepartmentList>Mahendra Palkar</DepartmentList>
                  <DepartmentList>Vandana Gupta</DepartmentList>
                </SecuritiesBox>
                <SecuritiesBox departmentName='Billing Team'>
                  <DepartmentList>Shravan Gaikwad</DepartmentList>
                </SecuritiesBox>
                <SecuritiesBox departmentName='Compliance Team'>
                  <DepartmentList>Vinod Mali</DepartmentList>
                  <DepartmentList>Jigna Kusakiya</DepartmentList>
                  <DepartmentList>Vidhi Kemka</DepartmentList>
                </SecuritiesBox>
              </div>
            </div>
          </div >
          {
            showManagement && (
              <div className='management-popup'>
                <div className='management-popup-inner' ref={popupRef}>
                  <div className='management-close-icon' onClick={handleCloseManagement}>
                    <RiCloseFill />

                  </div>
                  {
                    activeManagement === 'pramit_singh' ?
                      (<ManagementCard img='/Pramit_Singh_Sabharwal.jpg' heading='Pramit Singh' designation='Principal Officer - NNM Securities ( PMS )' paragraph='MBA from Jamnalal Bajaj Institute of Management Studies (JBIMS), he has rich experience across various asset classes having managed in excess of $20 billion in the Indian Capital Markets. A strategist with a proven track of increasing wallet share. He along with professionals is also in-charge with the product and their content which is handled by the team. He started his career in 1988 and has a vast experience of more than 37 years in fund management ranging from working for public sector mutual funds to banks and hedge funds.' />) : activeManagement === 'prem_pandey' ? (
                        <ManagementCard img='/Prem_Pandey.jpg' heading='Prem Pandey' designation='CFO - NNM Securities' paragraph='He is a graduate from Allahabad University. He heads our accounts division and is responsible for the efficiency and financial stability in our organization. He is a great speaker and team leader. His approach is customer centric and strives to maintain customer relations.' />
                      ) : <ManagementCard img='/pravin_j_dadlika.jpg' heading='Prem Pandey' designation='Chief Dealers - NNM Securities' paragraph='He is an avid trader and advisor since 2004. He has been leveraging his experience and skills to help clients trade smoothly & actively on all funding platforms. He is motivated to create growth portfolios and wealth for our clients.' />}
                </div>
              </div>
            )
          }
        </div >
      </div>
    </>
  )
}
function SecuritiesBox({ departmentName, children }) {
  return (
    <div className='securities-box'>
      <div className='row securities-row'>
        <div className='col-lg-6 department-name'>
          <h1>{departmentName}</h1>
        </div>
        <div className='col-lg-6 department-members'>
          <ul>
            {children}
          </ul>
        </div>
      </div>
    </div>
  )
}
function ManagementCard({ img, heading, paragraph, designation }) {
  return (
    <div className='management-card'>
      <img src={img} />
      <div className='management-team-details'>
        <h2>{heading}</h2>
        <span>{designation}</span>
        <p>{paragraph}</p>
      </div>
    </div>
  )

}
function ManagementCardLabel({ children }) {
  return (
    <h3>{children}</h3>
  )
}
function CardWithoutImage({ name, designation }) {
  return (
    <li><h5>{name}</h5> <p>- {designation}</p></li>
  )
}
function TeamMembers({ children }) {
  return (
    <>
      <div className='nnm-network-team mt-5'>
        <ul>
          {children}
        </ul>
      </div>
    </>
  )
}
function DepartmentList({ children }) {
  return (
    <li><BsArrowRightCircleFill className='department-icons' />{children}</li>
  )
}

export default Management