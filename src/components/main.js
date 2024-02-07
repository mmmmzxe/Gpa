import { Outlet } from 'react-router-dom'




import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Header from './Header'




const MainLayout = () => {
  return (
    <div>

    
      <Outlet />

   <Footer/>
    </div>
  )
}

export default MainLayout