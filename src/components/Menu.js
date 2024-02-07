import React from 'react';
import {menuData} from '../data'
import {motion} from 'framer-motion'
import {fadeIn , staggerContainer} from '../variants'

const Menu = () => {
  const { title , subtitle} =menuData
  return (
  <>
    <section className='min-h-[300px] mt-[100px]'>
      <div className='bg-menu h-[500px] w-full  -z-0 bg-cover ' >

     
      <motion.div 
      variants={fadeIn('up','tween' , 0.2 , 1.6)}
      initial='hidden'
      whileInView={'show'} className='relative flex justify-center'>
<div className='mx-auto container flex flex-col items-end text-end py-10 justify-center'>

  <p className='w-[370px] text-center m-20'>{subtitle}</p>
  
</div>
      </motion.div> </div>
     
    </section>
   
      </>
  )
};

export default Menu;
