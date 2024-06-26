import React from 'react';
import Socials from './Socials'

import { motion } from 'framer-motion';
import { fadeIn , staggerContainer } from '../variants';

import '../footer.css'
import Email from './email';
import { MdEmail, MdLocationOn } from 'react-icons/md';
const Footer = () => {

  return (
    <footer className='text-white p-3  top-40 z-20  min-h-[400px] bg-footer bg-center bg-cover bg-no-repeat pt-20'>
      <div className='mx-auto container h-full'>
      <div class="container">
  	 	<div class="row">
  	 		<motion.div variants={fadeIn('down','tween' , 0.1 , 1)}
						initial='hidden'
						whileInView={'show'}
			class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</motion.div>
  	 		<motion.div variants={fadeIn('down','tween' , 0.2 , 1)}
						initial='hidden'
						whileInView={'show'}
			 class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</motion.div>
  	 		<motion.div variants={fadeIn('down','tween' , 0.3 , 1)}
						initial='hidden'
						whileInView={'show'}
			 className="footer-col ">
  	 			<h4>Detils</h4>
  	 			<ul >
  	 				<li ><a href="#"><MdEmail className='m-1'/>Info@eagle-iot.net</a></li>
  	 				<li><a href="#"><MdLocationOn className='m-1'/>Dubai, United Arab Emirates</a></li>
  	 				
  	 			</ul>
  	 		</motion.div>
  	 		<motion.div
			variants={fadeIn('down','tween' , 0.4, 1)}
			initial='hidden'
			whileInView={'show'}
			 class="footer-col">
  	 			<h4>follow us</h4>
<Email/>
  	 		</motion.div>
  	 	</div>
  	 </div>

        
      </div>
    </footer>
  )
};

export default Footer;
