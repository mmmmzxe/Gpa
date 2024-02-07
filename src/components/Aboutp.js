import React from 'react';
import {aboutData} from '../data'
import {motion} from 'framer-motion'
import {plateVariants , staggerContainer , fadeIn} from '../variants'
import Header from './Header';



const Aboutp = () => {
  const {pretitle , title , subtitle , btnText , image} = aboutData
  return(
    <>
   <Header/>
    <section className='min-h-[200px] m-10'>
    <div className=' min-h-[20px] container'>
      <motion.div variants={staggerContainer}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} 
    className='min-h-[500px] flex flex-col lg:flex-row items-center '>
        <motion.div variants={fadeIn('right','tween', 0.2 , 1.8 )} 
        className='flex-1 text-center lg:text-left'>
          <div className='pretitle'>{pretitle}</div>
          <h2 className='h2 capitalize'>{title}</h2>
          <p className='mb-8 max-w-[560px] text-gray-500'>{subtitle}</p>
          <button className='btn capitalize mx-auto lg:mx-0'>{btnText}</button>

        </motion.div>
<motion.div variants={plateVariants}
 className='mb-[200px]  -mr-[80px] z-10'>
  <img src={image} className=' h-[500px]'></img>
</motion.div>
      </motion.div>

    </div>
   
  
     
     
      
  </section></>
  );
};

export default Aboutp;
