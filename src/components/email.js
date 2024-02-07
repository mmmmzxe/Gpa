import React from 'react'

import {FaEnvelope} from 'react-icons/fa'


import ReactWhatsapp from 'react-whatsapp'
const Email =()=>{
    function sendEmail(message) {
        var email = 'ahmed.m.saad.m@gmail.com';
        var subject = message.subject;
        var emailBody = 'Hi '+message.from;
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    }
    return(
        <div className='email '><ul className='flex flex-row   '>

            
               <li>  <button className=" text-white text-sm " onClick={sendEmail}><FaEnvelope className=''></FaEnvelope></button></li>
             
           </ul></div>
           
    )
}
export default Email