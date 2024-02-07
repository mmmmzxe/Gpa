import React, { useEffect, useState  } from 'react';


import Nav from '../components/Nav'
import Socials from '../components/Socials'
import logowith from '../assets/img/header/logo3.png'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../variants'




export const headerVariants = {
  hidden: {
    padding: '20px 0px 20px 0px',
    background: 'none'
  },
  show: {
    padding: '10px 0px 10px 0px',
    background: '#eee',
    transition: {
      type: 'spring'
    },
    display:'block',
    
  }

}
export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0px)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
     

    }
  }
}
const Header = () => {
 

  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <motion.header 
    variants={headerVariants} initial='hidden' animate={isActive ? 'show' : ''} className='bg-orange-600  w-full h-full'>
    <motion.div variants={staggerContainer(0.5, 1)}
      initial='hidden'
      animate={'show'}
      className=' container w-full h-0 m-0 p-0'>
        
      <div className=' flex justify-between items-center relative m-0 p-0 h-12 w-full' >
        
        <motion.div variants={fadeIn('down', 'tween', 1.2, 1.2)} onClick={() => setNav(!nav)} className={`${nav ? 'gap-y-0' : 'gap-y-2'} flex flex-col justify-center items-center 
       w-12 h-12 px-3 order-2 lg:order-none cursor-pointer border-2 border-orange-600 lg:hidden
        rounded-full `}>
          
          <motion.div initial={{ rotate: 0, }} animate={{
            rotate: nav ? -45 : 0, translateY: nav ? 2 : 0
          }} className='w-full h-[2px] bg-orange-600 '>
            
          </motion.div>
       
          <motion.div initial={{ rotate: 0, }} animate={{
            rotate: nav ? 45 : 0 , translateY: nav ? 1 : 0
          }} className='w-full h-[2px] bg-orange-600 '></motion.div>

        </motion.div>
        
        <motion.div className=' order-1 lg:order-none' variants={fadeIn('down', 'tween', 1.4, 1.4)}>
          <a href='#'>
            <img src={logowith} className={`${isActive ? 'w-[90px] h-[100px]' : 'w-[100px] h-[110px]'}`}></img>
          </a>
        </motion.div>
        <motion.div variants={fadeIn('down', 'tween', 1.4, 1.4)} className='hidden lg:flex '>
          <Socials />
         
        </motion.div>
        
        <motion.div variants={navVariants} initial='hidden' animate={nav ? 'show' : ''} className='absolute bg-orange-600 w-[250px] h-[29vh] right-12 
         lg:left-16 top-[50px] bottom-0 
         rounded-lg shadow-xl text-white'>
         
          <Nav />
    
        </motion.div>
          
      </div>
     
    </motion.div>
  </motion.header>

  )
 
};

export default Header;
