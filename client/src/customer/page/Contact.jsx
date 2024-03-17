import React from 'react'
import Layout from '../../component/Layout'
import ContactC from '../../component/ContactC'
import Footer from '../../component/Footer'
import MapLocation from '../../component/MapLocation'

const Contact = () => {
  return (
    <Layout>
      <ContactC/>
      <MapLocation/>
      <Footer/>
    </Layout>
  )
}

export default Contact