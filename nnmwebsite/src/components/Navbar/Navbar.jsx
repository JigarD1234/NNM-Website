import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/nnmlogo.png'
import Hamburger from './Hamburger'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav style={{ position: "fixed",zIndex:'20' }} className="navbar">
        <div className="container">
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
                  <NavLink to="/management">KMP Team</NavLink>
                  <NavLink to="/milestones">Milestones</NavLink>
                  <NavLink to="/gallery">Gallery</NavLink>
                </ul>
              </li>
              <li>
                <NavLink to="/products">Products & Services</NavLink>
              </li>
             
              <li>
                <NavLink to="/wealth">Wealth Management</NavLink> <IoIosArrowDown style={{ color: "grey", cursor: "pointer" }} />
                <ul className='dropdown-menu'>
                  <NavLink to="/wealth_products">Products</NavLink>
                  <NavLink to="/wealth_funds">Funds</NavLink>
                  <NavLink to="/wealth_returns">Returns</NavLink>
                  <NavLink to="/wealth_performance">Past Performance</NavLink>
                  
                </ul>
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
              <NavLink to="/connect">Connect With Us</NavLink>
              </li>
               

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar