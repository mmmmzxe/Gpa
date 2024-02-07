import React from "react";
import img from '../assets/img/images/bg7.jpg'
import logo from '../assets/img/header/logo3.png'
import { Link } from 'react-router-dom'
import Header from "./Header";
const Form =()=>{
    return(
 <>
 <Header/>
 			<div className="flex justify-center items-center m-32">
				<div>
					<h2 className="h2 text-orange-600">Contact Us</h2>
				</div>
				
					
					
			
			</div>

     <div className="flex items-center justify-center my-10 ">
   
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
    
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-orange-600">Welcome back</span>
          <span className="font-light text-gray-600 mb-8">
            Welcom back! Please enter your details
          </span>
          <div class="py-4">
            <span class="mb-2 text-md text-black">Email</span>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md text-black">Name</span>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="Name"
              id="Name"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md text-black">Your Message</span>
            <textarea rows={4} className= "border-gray-300 rounded-md border p-5 w-full" placeholder="Type your message here ..." ></textarea>
          </div>
          
          <button
            className="w-full bg-orange-600 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300 btn"
          >
           Send Massege
          </button>
          
          
        
        </div>
       
        <div class="relative">
          <img
            src={img}
            alt="img"
            class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        
         
        </div>
      </div>
    </div>
    </>
    )
}
export default Form