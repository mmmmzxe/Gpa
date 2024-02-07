import React from "react";
import '../footer.css'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {TbWorldDownload } from "react-icons/tb";
import { FaAndroid, FaAppStore, FaAppStoreIos, FaApple, FaApplePay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Platform =()=>{
    return(
        <section className=' relative top-[28px] z-10 lg:top-[50px] m-24 '>
        <div className='mx-auto container'>
          <div className='flex flex-col lg:flex-row lg:gap-x-[110px] items-center lg:items-start'>
          <motion.div 
  variants={fadeIn('up' , 'tween' , 0.7 , 1.6)} 
  initial='hidden'
  whileInView={'show'}
   className='flex-1'>
  <div class="card">
      <p> <span><TbWorldDownload/></span><Link to={'https://etrack.vip/'}><span className="hover">website</span></Link> </p>
        <p> <span ><FaApple/></span><Link to={'https://apps.apple.com/bw/app/etrack-gps/id1584776063'}><span className="hover">Ios</span></Link></p>
        <p> <span><FaAndroid/></span><Link to={'https://play.google.com/store/apps/details?id=vip.etrack.gps'}><span className="hover">Android</span></Link></p>
    </div>
  </motion.div>
            <motion.div variants={fadeIn('down' , 'tween' , 0.6 , 3.6)} 
            initial='hidden'
            whileInView={'show'}
             className='flex-1 text-center lg:text-left lg:pt-20 p-5'>
            <div className='pretitle'> click Here</div>
            <h2 className='h2 capitalize'>OUR PLATFORM</h2>
          
            <p className="text-gray-500">You can use our platform through the website or by downloading our applications on your smart phone through the links below;</p>

          </motion.div>
  
          </div>
        </div>
      </section>
       
    )
}
export default Platform