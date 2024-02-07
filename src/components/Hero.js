import React from 'react';
import { heroData } from '../data'
import Header from './Header'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../variants'


const Hero = () => {
  const { pretitle, title, subtitle, btnText } = heroData
  return (
    <header className='min-h-[790px] bg-transparent bg-hero bg-cover bg-center'>
   <Header/>
    <div className='container min-h-[350px] flex justify-center text-right items-start p-32'>
      <motion.div variants={staggerContainer(0.3, 1)} initial='hidden' whileInView={'show'} className='text-center flex flex-col items-center'>
        <motion.div variants={fadeIn('down ', 'tween', 0.2, 1.1)} className=' text-[24px] text-white lg:text-[28px] mb-1'><p>{pretitle}</p></motion.div>
        <motion.h1 variants={fadeIn('down ', 'tween', 0.3, 1.1)} className='h1 mb-5 '>{title}</motion.h1>
        <motion.p variants={fadeIn('down ', 'tween', 0.4, 1.1)} className=' max-w[540px] mb-8 text-white'>{subtitle}</motion.p>
        <motion.div variants={fadeIn('down ', 'tween', 0.5, 1.1)}>
          <button className='btn items-center flex'>{btnText}</button>
        </motion.div>

      </motion.div>


    </div>

  </header>
  )
};

export default Hero;
