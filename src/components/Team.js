import React from 'react';
import {teamData} from '../data'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Team = () => {
  const {pretitle , title , sub1 , sub2 , name , occupation , signatureImg , jImg} =teamData
  return (
    <section className=' relative top-[28px] z-10 lg:top-[50px] '>
      <div className='mx-auto container'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[110px] items-center lg:items-start'>
          <motion.div variants={fadeIn('down' , 'tween' , 0.6 , 3.6)} 
          initial='hidden'
          whileInView={'show'}
           className='flex-1 text-center lg:text-left lg:pt-16'>
          <div className='pretitle'>{pretitle}</div>
          <h2 className='h2 capitalize'>{title}</h2>
          <p className='mb-[60px] text-gray-600'>{sub1}</p>
         
         
        </motion.div>
<motion.div 
variants={fadeIn('up' , 'tween' , 0.7 , 1.6)} 
initial='hidden'
whileInView={'show'}
 className='flex-1'>
  <img src={jImg}></img>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
