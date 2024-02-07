import React from "react"
import './navicon.css'


import ReactWhatsapp from 'react-whatsapp'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
const NavIcon= ()=>{

    return(
        <section className="icon">
        <nav>
            <a href="https://www.facebook.com/profile.php?id=100064047399083&mibextid=LQQJ4d">
            <li class="facebook">
                <span>Facebook</span>
               <FaFacebook/>
            </li></a>
            <li class="Whatsapp">
           <span>Whatsapp</span>
           <ReactWhatsapp className='mx-5 lg:text-orange-600 text-white text-sm ' number="+201002386331" message="Hello World!!!"><FaWhatsapp/></ReactWhatsapp> 
               
            </li>
            <a href="">
            <li class="linkedin">
                <span>Linkedin</span>
<FaLinkedin/>
            </li></a>
            <a href="https://www.instagram.com/tracker4754/?igsh=ODA1NTc5OTg5Nw%3D%3D">
            <li  class="instagram">
                <span>Instagram</span>
<FaInstagram/>
            </li></a>
        </nav>
    </section>
    )
}
export default NavIcon