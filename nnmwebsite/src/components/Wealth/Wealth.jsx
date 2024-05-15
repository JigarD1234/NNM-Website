import React from 'react'
import './Wealth.css'
import {  FaCircleArrowRight } from 'react-icons/fa6'
import { MdOutlineLibraryBooks ,MdAutoGraph } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import './Finance.css'

const Wealth = () => {
  return (
   <>
    <div className='wealth-management'>
        <div className='container'>
            <div className='row wealth-row'>
                <div className='col-lg-6 wealth-col'>
                    <h3>We Seek to Focus on</h3>
                    <h2>Business that have the potential to become Multibaggers in long term because they pursue excellence in all facets of business and also scale up continously by expanding market share and market size</h2>
                    <h5>Initiating a discussion is the first step toward maximizing the potential of your wealth:</h5>
                    <button className='wealth-btn'>Find an Advisor</button>
                </div>
                <div className='col-lg-6 wealth-col'>
                  <img src='/wealthvector.png'/>
                
                </div>
            </div>   
        </div>
    </div>
    <div className='our-approach'>
      <div className='container'>
        <div className='row approach-row'>
        <div className='col-lg-6 approach-col'>
          <img src='wealthsecondvector.png'/>
        </div>
        <div className='col-lg-6 approach-col'>
          <h2>What is Our Approach ?</h2>
          <hr className='mt-4'></hr>
          <ul style={{textAlign:"justify"}}>
            <li><FaCircleArrowRight className='approach-icons'/>We focus on building a portfolio of high quality companies that will grow at healthy rate in the long term</li>
            <li><FaCircleArrowRight className='approach-icons'/>Our Selection Framework is build across <strong>100 + Qualitative & Quantitative Factors</strong></li>
            <li><FaCircleArrowRight className='approach-icons'/>Continous Process of identifying , tracking and accessing these parameters to find the new companies that will become future leaders . </li>
            <li><FaCircleArrowRight className='approach-icons'/>Identifying Companies that display sustainable growth potential across our selection framework</li>
          </ul>
        </div>
        </div>
      </div>
          
    </div>
    <div className='wealth-box-wrapper'>
      <div className='container'>
      <div className='row wealth-box-row'>
        <div className='col-lg-4 wealth-box-col'>
          <IoPerson className='dedicated-icon'/>
          <h2>Personal Finance</h2>
          <p>At NNM, our approach to personal finance revolves around a meticulous process for building sustainable wealth and securing financial futures.</p>
          <NavLink to='/wealth/personal-finance'>Read More..</NavLink>
             
        </div>
        <div className='col-lg-4 wealth-box-col'>
        <MdOutlineLibraryBooks className='dedicated-icon'/>
          <h2>Wealth Management</h2>
          <p> Our wealth management services are designed to cater to your unique needs , whether you're an individual investor,or a business owner </p>
          <NavLink>Read More..</NavLink>
          
        </div>
        <div className='col-lg-4 wealth-box-col'>
        <MdAutoGraph className='dedicated-icon'/>
          <h2>Protection </h2>
          <p>Our approach to life insurance revolves around offering tailored coverage options that meet the needs and priorities of individuals and families.</p>
          <NavLink>Read More..</NavLink>



        </div>
      </div>
      </div>
    </div>

    <div className='wealth-advisor-form'>
      <h3>Ready to talk to an advisor? Let us connect you to one.</h3>
      <ul>
        <li><input type='text' placeholder='First Name'/></li>
        <li><input type='text' placeholder='Last Name'/></li>
        <li><input type='email' placeholder='Email Address'/></li>
        <li><input type='text' placeholder='City'/></li>
        <li><input type='number' placeholder='Phone'/></li>
        <li><input type='number' placeholder='Zip Code'/></li>
      </ul>
      <h5 style={{width:'40%'}}>By providing your contact information above, you agree that a representative of NNM, the Brokerage affiliate may contact you via telephone and/or email to discuss and/or offer investment products and services that may be appropriate for you. You agree that you are providing to us your consent for us to contact you regardless of any Do Not Call or Do Not Email privacy choices you may have previously expressed until you revoke this consent, or up to 90 days. You may revoke your consent at any time by notifying the NNM representative.</h5>
      <button className='wealth-advisor-btn'>Submit</button>
    </div>
   </>
  )
}

export default Wealth