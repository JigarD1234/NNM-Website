import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Calculator from './components/Calculator/Calculator'
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
import OutUnder from './components/Market/Equity/OutUnder'
import CompanyDetails from './components/CompanyDetails/CompanyDetails'
import OnlineEquity from './components/Market/Equity/OnlineEquity'
import Blog from './components/Blog/Blog'
import BlogDetails from './components/Blog/BlogDetails'
import blogsData from './components/Blog/blogs'
import Contact from './components/Contact/Contact'
import ErrorPage from './components/Error/ErrorPage'
import Wealth from './components/Wealth/Wealth';
import TermsConditions from './components/Policy/TermsConditions';



const App = () => {
  const [activePop, setActivePop] = useState("hide");

  const handlepopupChange = () => {
    setActivePop("hide")
  }

  const handlepopupShow = () => {
    setActivePop("show")
  }

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <PopupButton
            activePop={activePop}
            setActivePop={setActivePop}
            handlepopupChange={handlepopupChange}
            handlepopupShow={handlepopupShow} />
          <Routes>
            <Route exact path="/" element={<Hero handlepopupShow={handlepopupShow} />} />
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/about" element={<About />}/>
              
          
            <Route path='/about/management' element={<Management />} />
              <Route path='/about/milestones' element={<Milestone />} />
              <Route path='/about/gallery' element={<Gallery />} />
            <Route exact path='/products' element={<ProductsServices />} />
            <Route exact path='/equity/gainers-and-losers' element={<GainersLosers />} />
            <Route exact path='/equity' element={<OnlineEquity />} />
            <Route exact path='/equity/out-and-under' element={<OutUnder />} />
            <Route path="/equity/gainers-and-losers/company-profile/:companyName" element={<CompanyDetails />} />
            <Route path='/blog' element={<Blog blogs={blogsData} />} />
            <Route path="/blog/:id" element={<BlogDetails blogs={blogsData} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/wealth' element={<Wealth/>} />
            <Route path='/terms-and-conditions' element={<TermsConditions/>}/>
          </Routes>
          <ReachUs />
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App