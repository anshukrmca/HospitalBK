import React from 'react'
import HeroSection from '../../component/HeroSection,'
import AboutC from '../../component/AboutC'
import Service from './Service'
import Work from '../../component/Work'
import Doctor from '../../component/Doctor'
import Location from '../../component/Location'
import Footer from '../../component/Footer'
import Layout from '../../component/Layout'
import Contact from '../../component/ContactC'

const Home = () => {
  return (
    <Layout>
        <HeroSection/>
       <div data-aos='fade-up'> <AboutC/></div>
        <Service/>
        <Work/> 
        <Doctor/>
        <Location/>
        <Contact/>
        <Footer/>
    </Layout>
  )
}

export default Home