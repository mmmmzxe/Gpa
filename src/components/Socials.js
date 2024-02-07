import React from 'react';
import {navData} from '../data'
import {socialData} from '../data'
import { FaCartPlus } from 'react-icons/fa';
import Email from './email';
const Socials = () => {
  return (
    <nav className='w-full h-full '>
      <ul className='h-full flex flex-row justify-center items-center gap-y-4 '>
        {navData.map((item , index)=>{
          return(
            <li key={index}>
              <a className='capitalize m-4 font-primary text-orange-600 transition-all duration-300 text-l hover:text-white hover:bg-orange-600 hover:rounded-full p-2' href={item.href}>{item.name}</a>
            </li>
          )

          
        })}
     <Email/> </ul>
      
    </nav>
  );
};

export default Socials;
