import React from 'react'
import LandingPage from '../Components/LandingPage'
import OurVision from '../Components/OurVision'
import Tender from '../Components/Tender'
import Statistics from '../Components/Statistics'
import WeDo from '../Components/WeDo'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <LandingPage/>
        <OurVision/>
        <Tender/>
        <Statistics/>
        <WeDo/>
        <Footer/>
    </div>
  )
}

export default Home