import React from 'react';
import {motion} from 'framer-motion'
import {testimonialData} from '../data'
import TestimonialCarousel from '../components/TestimonialCarousel'
import {fadeIn} from '../variants'
const Testimonial = () => {
  const {title , subtitle  ,slider} =testimonialData
  return (
<section className=' relative top-[150px] lg:top-[100px] z-10 
h-[500px]'>
  <div className='mx-auto container'>
    <motion.div
    variants={fadeIn('up','tween' , 0.2 , 1.6)}
    initial='hidden'
    whileInView={'show'}
     className='flex text-center capit , alize flex-col items-center'>
      <h2 className='h2 text-orange-600'>{title}</h2>
      <p className='mb-12 capitalize'>{subtitle}</p>

    </motion.div>
    <motion.div 
     variants={fadeIn('up','tween' , 0.4 , 1.6)}
     initial='hidden'
     whileInView={'show'}
     className='flex justify-center items-center'>
      <TestimonialCarousel slider={slider}></TestimonialCarousel>
    </motion.div>
  </div>
</section>
  );
};

export default Testimonial;
