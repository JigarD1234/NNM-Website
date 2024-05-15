import React from 'react'
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


const Home = ({handlepopupShow}) => {
  return (
    <>
        <Hero handlepopupShow={handlepopupShow}/>
        <Ideology/>
        <VisionMission/>
        <HoldingHandSolution/>
        <HomeServices/>
        <DividerBox/>
        <MarketSection/>
        <Platforms/>
        <Testimonials/>
        <Team/>
        <Questions/>
    </>
  )
}

export default Home