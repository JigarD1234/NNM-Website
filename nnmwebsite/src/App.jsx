import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Calculator from './components/Calculator/Calculator'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Management from './components/About/Management'
import PopupButton from './components/Popup_Button/PopupButton'
import Milestone from './components/About/Milestone'
import Gallery from './components/About/Gallery'
import ProductsServices from './components/Services/ProductsServices'
import ReachUs from './components/Services/ReachUs'
import GainersLosers from './components/Market/Equity/GainersLosers'
// import ScrollToTop from './components/ScrollToTop'
import OutUnder from './components/Market/Equity/OutUnder'
import CompanyDetails from './components/CompanyDetails/CompanyDetails'
import OnlineEquity from './components/Market/Equity/OnlineEquity'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from './components/Blog/Blog'
import BlogDetails from './components/Blog/BlogDetails'
import blogsData from './components/Blog/blogs'


const App = () => {
  const [activePop, setActivePop] = useState("hide");

  useEffect(() => {
    AOS.init({
      duration:1000
    });
  }, []);

  const handlepopupChange = () => {
    setActivePop("hide")

  }

  const handlepopupShow = () => {
    setActivePop("show")
  }
  return (
    <>
      <Router> {/* Wrap your routes with <Router> */}
        <div>
          <Navbar />
          {/* <ScrollToTop/> */}

          <PopupButton activePop={activePop} setActivePop={setActivePop} handlepopupChange={handlepopupChange} handlepopupShow={handlepopupShow} />
          <Routes>
            <Route exact path="/" element={<Hero handlepopupShow={handlepopupShow} />} />
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path='/management' element={<Management />} />
            <Route exact path='/milestones' element={<Milestone />} />
            <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/products' element={<ProductsServices />} />
            {/* <Route exact path='/equity' element={<OnlineEquity/>}/> */}
            <Route exact path='/equity/gainers-and-losers' element={<GainersLosers />} />
            <Route exact path='/equity' element={<OnlineEquity />} />

            <Route exact path='/equity/out-and-under' element={<OutUnder />} />
            <Route path="/equity/gainers-and-losers/company-profile/:companyName" element={<CompanyDetails />} />
            <Route path='/blog' element={<Blog blogs = {blogsData}/>}/>
            {/* <Route path='/blog/:id' element={<BlogDetails/>}/> */}
            <Route path="/blog/:id"  element={<BlogDetails  blogs = {blogsData} />} />

            {/* Define other routes here */}
          </Routes>
          <ReachUs />
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App