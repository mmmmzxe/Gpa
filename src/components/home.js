import React from 'react'
import Hero from './Hero'
import About from './About'
import Menu from './Menu'
import Products from './products'
import Testimonial from './Testimonial'

import Team from './Team'
import Partners from './PARTNERS'
import Platform from './PLATFORM'
import NavIcon from './navicon'
const Home = () => {

  return (
    <main>
      <NavIcon/>
      <Hero />
      <About />
      <Testimonial />
      <Menu /> 
      <Partners/>
      <Products />
      <Team />
     
      <Platform/>
    </main>
  )
}

export default Home