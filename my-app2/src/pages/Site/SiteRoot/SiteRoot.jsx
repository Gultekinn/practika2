import React from 'react'
import Header from '../../../layout/Site/Heade/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../../../layout/Site/Footer/Footer'
const SiteRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot
