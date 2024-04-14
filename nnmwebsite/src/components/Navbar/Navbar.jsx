import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown, IoMdPhoneLandscape, IoMdPhonePortrait } from "react-icons/io";
import logo from '../../assets/nnmlogo.png'
import Hamburger from './Hamburger'
import { FaFacebook, FaLinkedin, FaMailBulk, FaMailchimp, FaPhoneSquareAlt, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav style={{ position: "fixed",zIndex:'20' , paddingLeft:'5%', paddingRight:"5%" }} className="navbar">
        <div className="container-fluid">
          <div className="logo">
            <img src={logo}/> 
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul id='main-links'>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a style={{color:"rgb(188,188,188"}}>About</a> <IoIosArrowDown style={{ color: "grey", cursor: "pointer" }} />
                <ul className='dropdown-menu'>
                  <NavLink to="/about">About Us</NavLink>
                  <NavLink to="/about/management">KMP Team</NavLink>
                  <NavLink to="/about/milestones">Milestones</NavLink>
                  <NavLink to="/about/gallery">Gallery</NavLink>
                </ul>
              </li>
              <li>
                <NavLink to="/products">Products & Services</NavLink>
              </li>
             
              <li>
                <NavLink to="/wealth">Wealth Management</NavLink> 
                {/* <IoIosArrowDown style={{ color: "grey", cursor: "pointer" }} /> */}
                {/* <ul className='dropdown-menu'>
                  <NavLink to="/wealth_products">Products</NavLink>
                  <NavLink to="/wealth_funds">Funds</NavLink>
                  <NavLink to="/wealth_returns">Returns</NavLink>
                  <NavLink to="/wealth_performance">Past Performance</NavLink>
                  
                </ul> */}
              </li>
              <li>
              <a style={{color:"rgb(188,188,188"}}>Market</a> <IoIosArrowDown style={{ color: "grey", cursor: "pointer" }} />
                <ul className='dropdown-menu'>
                  <NavLink to="/equity">Equity</NavLink>
                  <NavLink to="/market2">Derivative</NavLink>
                  <NavLink to="/market3">Commodity</NavLink>
                  <NavLink to="/market4">Mutual Funds</NavLink>
                  <NavLink to="/market5">IPO</NavLink>
                  <NavLink to="/market6">Algo Trading</NavLink>
                  <NavLink to="/calculator">Calculator</NavLink>
                </ul>
              </li>
              <li>
                <NavLink to="/forte">Our Forte</NavLink>
              </li>
              <li>
              <NavLink to="/blog">Blog</NavLink></li>
 
              <li>
              <NavLink to="/contact">Connect With Us</NavLink>
              </li>
              <li id='login-nav-btn'>
              <NavLink to="/contact">Login</NavLink>
              </li>
              {/* <li className='nav-list-icons'>
                <FaLinkedin className='n-icons'/>
                <FaXTwitter className='n-icons'/>
                <FaFacebook className='n-icons'/>
              </li> */}
               

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar