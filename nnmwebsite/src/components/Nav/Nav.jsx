import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nnm-navbar'>
        <div className='row nnm-navbar-row'>
            <div className='col-lg-3 nnm-navbar-logo'>
                <img src='/nnmlogo.png'/>

            </div>
            <div className='col-lg-9 nnm-navbar-list'>
                <ul className='account-links'>
                    <li>Downloads</li>
                    <li>Partner Us</li>
                    <li>Careers</li>
                    <li>Open Account</li>
                </ul>
                <ul className='social-links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Product & Services</li>
                    <li>Wealth Management</li>
                    <li>Our Forte</li>
                    <li>Blog</li>
                    <li>Connect With Us</li>
                </ul>

            </div>
        </div>

    </div>
  )
}

export default Nav