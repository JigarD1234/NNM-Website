import React, { useEffect, useState } from 'react'
import './Home.css'
import Hero from './Hero'
import Ideology from './Ideology'
import VisionMission from './VisionMission'
import HoldingHandSolution from './HoldingHandSolution'
import HomeServices from './HomeServices'
import DividerBox from './DividerBox'
import MarketSection from './MarketSection'
import Platforms from './Platforms'
import Testimonials from './Testimonials'
import Team from './Team'
import Questions from './Questions'
import OnLoadPopup from '../OnLoadPopup'
import NNMResearch from './NNMResearch'


const Home = ({handlepopupShow}) => {
  const [showModal, setShowModal] = useState(false)
  const [showSecondModal , setShowSecondModal] = useState(false)

  useEffect(()=>{
    setShowModal(true)
    setShowSecondModal(true)
  },[])

  return (
    <>
        {showModal && (<OnLoadPopup showSecondModal={showSecondModal} showModal = {showModal} setShowModal = {setShowModal} setShowSecondModal={setShowSecondModal}/>)}
        <Hero handlepopupShow={handlepopupShow}/>
        <Ideology/>
        <VisionMission/>
        <HoldingHandSolution/>
        <HomeServices/>
        <DividerBox/>
        <NNMResearch/>
        <MarketSection/>
        <Platforms/>
        <Testimonials/>
        <Team/>
        <Questions/>
    </>
  )
}

export default Home