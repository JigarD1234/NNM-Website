import React from 'react'
import FinanceHeader from '../FinanceHeader'
import { CiMobile1 } from 'react-icons/ci'
import { FiMessageCircle } from 'react-icons/fi'
import { FaUserEdit } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { IoMdTime } from 'react-icons/io'
import { FcFlashAuto, FcFlashOn } from 'react-icons/fc'

const Protection = () => {
  return (
    <>
      <FinanceHeader quote='" Personal finance is only 20% head knowledge. It’s 80% behavior! "' person='Dave Ramsey' img='/personalfinance.svg' />
      <div className='container'>

        <div className='life-insurance'>
          <h2>We Help you get the best life insurance </h2>
          <p>we'll not only help you get the best life insurance coverages & rates, but we'll help make the process simple and personalized</p>
        </div>
        <div className='life-insurance-list row'>
          <LifeInsuranceListItem icon={<CiMobile1 className='life-insurance-icon' />} heading='Here When You Need Us' paragraph="When you need help , we're only a call away" />
          <LifeInsuranceListItem icon={<FiMessageCircle className='life-insurance-icon' />} heading='Personal Service' paragraph="Get personalized service that reflects your needs." />
          <LifeInsuranceListItem icon={<FaUserEdit className='life-insurance-icon' />} heading='Customize your insurance' paragraph="We'll help you customize your insurance to meet your unique needs." />
          <LifeInsuranceListItem icon={<GiReceiveMoney className='life-insurance-icon' />} heading='Save Money' paragraph="We'll advise you on all the ways you can save money." />
          <LifeInsuranceListItem icon={<IoMdTime className='life-insurance-icon' />} heading='Save Time' paragraph="We'll do all the work for you. Saving you hours of time." />
          <LifeInsuranceListItem icon={<FcFlashOn className='life-insurance-icon' />} heading='Get Insured Quickly' paragraph="Get the insurance you need when you need it." />

        </div>
        <div className='talk-to-us'>
          <button>Talk To Us</button>
        </div>
        <div className='health-insurance-quote'>
          <div className='health-insurance-protection-content'>
            <div className='row health-insurance-protection-row'>
              <div className='col-lg-6 health-insurance-protection-col'>
                <h1>
                  Jiyo tension free with Health Insurance Plan
                </h1>
                <h3>Protect yourself from financial crunch during Medical Emergencies</h3>
              </div>
              <div className='col-lg-6 health-insurance-protection-img'>
                <img src='/insurance.svg'/> 
              </div>
            </div>
          </div>
          <hr />
          <h1 className='mt-5 mb-5 text-center'>"Good health is a treasure, but if you ever fall ill, having health insurance will safeguard your hard-earned assets."</h1>
          <div className='talk-to-us'>
            <button>Get A Plan</button>
          </div>
          {/* <hr className='mb-5'/> */}

        </div>

      </div>


    </>
  )
}
function LifeInsuranceListItem({ icon, heading, paragraph }) {
  return (
    <>
      <div className='life-insurance-list-item col-lg-3'>
        {icon}
        <h2>
          {heading}
        </h2>
        <p>{paragraph}</p>

      </div>



    </>
  )
}
export default Protection