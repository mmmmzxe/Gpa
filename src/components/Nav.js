
import {navData} from '../data'
import React from 'react';
import Email from './email';


const Nav = () => {
   


  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-4 '>
    
        {navData.map((item , index)=>{
          return(
            <li key={index}>
              <a className='capitalize font-primary text-white italic transition-all duration-300 text-sm hover:text-white' href={item.href}>{item.name}</a>
            </li>
            
          )

          
        })}
 <Email/>
      </ul>
     
     
    </nav>
  );
};

export default Nav;
