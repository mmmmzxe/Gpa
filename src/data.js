// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
  FaCamera,
  FaPlay,
  FaCar,
  FaAnchor,
  FaFile,

} from 'react-icons/fa';
import { MdReplay } from "react-icons/md";
// import images
import AboutImg from '../src/assets/img/images/ab.png';
import ModelWhiteImg from '../src/assets/img/images/f.png';
import { TbUnlink } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

import jImg from '../src/assets/img/images/f.png';

export const navData = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/productsP', name: 'Products' },
  { href: '/Form', name: 'contact' },
  
];

export const heroData = {
  pretitle: 'Track Everything You Care About...',
  title: 'Eagle-IOT GPS',
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Find out more',
};


export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'EALGE-IOT GPS TECHNOLOGY is one of the companies that now operates 10000+ vehicles. We have highly skilled and trained employees that are ready to provide you with the finest service at any time and from any location..',
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  subtitle: 'he Global Positioning System (GPS) has been foundational to countless innovations that power our modern life. Aerospace has played a key role in developing and advancing GPS and the technologies for space-based navigation since the very beginning.',


  
};

export const teamData = {
  pretitle: 'Eagle-IOT GPS',
  title: 'Alert Functions  ',
  sub1: 'Experience the power of our dedicated finder portal app, designed to revolutionize your tracking needs. Enjoy a wide range of essential features, including real-time alarms and comprehensive statistics. Stay connected and in control with instant push message alerts directly to your phone, ensuring you never miss a beat. Embrace convenience, efficiency, and peace of mind at no extra cost with our cutting-edge finder portal app',
 

  jImg: jImg,
};

export const testimonialData = {
  title: "Features ",
  subtitle: '1500+ statisfied clients',

  slider: [
    {
      message:
        'Real-Time location displayed on the map, It can monitor all vehicles under the same account simultaneously.',
      image: <FaCamera className='text-orange-600 text-[40px] m-4'/>,
      name: 'Mouitor',
      
      
    },
    {
      message:
        'Specific history route displayed on the map.',
      image: <MdReplay className='text-orange-600 text-[40px] m-4'/>,
      name: 'HISTORY PLAYBACK',
      
    },
    {
      message:
        'Notification of enter into or depart from the GEO-fence',
      image: <TbUnlink className='text-orange-600 text-[40px] m-4'/>,
      name: 'GEOFENCE',
   
    },
    {
      message:
        'Stoping the Engine of your car by one click with the ability to reset it',
      image: <FaCar className='text-orange-600 text-[40px] m-4'/>,
      name: 'STOP VEHICLE REMOTLY',
   
    },
    {
      message:
        'SMS, Call, E-mail, Help-Desk & GeoLocation alerts, that secure your valuable vehicle easily..',
      image: <IoMdNotifications className='text-orange-600 text-[40px] m-4'/>,
      name: 'ALERTS',
   
    },
    {
      message:
        'User Reports feature to acquire all-round statistics and analytics. The summary data can be shown in various perspectives, in tables and graphs.',
      image: <FaFile className='text-orange-600 text-[40px] m-4'/>,
      name: 'REPORTS',
   
    },
  ],
};




 export const PRODUCTS = [
	{
		id: 1,
		name: "AT4 GPS TRACKER",
		detils1:'1-You can view your car online on your mobile phone through the application.',
    detils2:'You can hear what is happening inside the car because the device is equipped with a microphone.',
    detils3:'Determine the speed of the vehicle, and if the speed is exceeded, the device sends a warning.',
    detils4:'4- Disconnect the car engine and start it through the application.    ',
    detils5:'5- You can know the car’s previous trips over the past 3 months.    ',
    detils6:'6- The device is equipped with an internal battery that works for up to 3 days in the event that the car is disconnected or the battery is removed.    ',
    detils7:'7- The device sends alerts in the event of a power outage, and the device also contacts you.    ',
    detils8:'8- Determine a geographical area for the car, and if the car enters or exits it, the device sends alerts about that.    ',
    detils9:'9- Sending alerts if the car engine is running or shutting down and its location.',
    detils10:'10- Reports of mileage and gasoline consumption during the previous 3 months.',

		price: 199,
		
		image: require("./assets/img/images/AT4.png"),
	},
	{
		id: 2,
		name: "GT06N GPS TRACKER",
    detils1:'1-You can view your car online on your mobile phone through the application.',
    detils2:'You can hear what is happening inside the car because the device is equipped with a microphone.',
    detils3:'Determine the speed of the vehicle, and if the speed is exceeded, the device sends a warning.',
    detils4:'4- Disconnect the car engine and start it through the application.    ',
    detils5:'5- You can know the car’s previous trips over the past 3 months.    ',
    detils6:'6- The device is equipped with an internal battery that works for up to 3 days in the event that the car is disconnected or the battery is removed.    ',
    detils7:'7- The device sends alerts in the event of a power outage, and the device also contacts you.    ',
    detils8:'8- Determine a geographical area for the car, and if the car enters or exits it, the device sends alerts about that.    ',
    detils9:'9- Sending alerts if the car engine is running or shutting down and its location.',
    detils10:'10- Reports of mileage and gasoline consumption during the previous 3 months.',
		
		price: 229,
	
		image: require("./assets/img/images/GT06N.png"),
	},
	{
		id: 3,
		name: "JC400 GPS TRACKER",
    detils1:'1-You can view your car online on your mobile phone through the application.',
    detils2:'You can hear what is happening inside the car because the device is equipped with a microphone.',
    detils3:'Determine the speed of the vehicle, and if the speed is exceeded, the device sends a warning.',
    detils4:'4- Disconnect the car engine and start it through the application.    ',
    detils5:'5- You can know the car’s previous trips over the past 3 months.    ',
    detils6:'6- The device is equipped with an internal battery that works for up to 3 days in the event that the car is disconnected or the battery is removed.    ',
    detils7:'7- The device sends alerts in the event of a power outage, and the device also contacts you.    ',
    detils8:'8- Determine a geographical area for the car, and if the car enters or exits it, the device sends alerts about that.    ',
    detils9:'9- Sending alerts if the car engine is running or shutting down and its location.',
    detils10:'10- Reports of mileage and gasoline consumption during the previous 3 months.',
	
		price: 99,
	
        image: require("./assets/img/images/JC400.png"),
	},
	
	{
		id: 5,
		name: "JC400D GPS TRACKER",
		detils1:'1-You can view your car online on your mobile phone through the application.',
    detils2:'You can hear what is happening inside the car because the device is equipped with a microphone.',
    detils3:'Determine the speed of the vehicle, and if the speed is exceeded, the device sends a warning.',
    detils4:'4- Disconnect the car engine and start it through the application.    ',
    detils5:'5- You can know the car’s previous trips over the past 3 months.    ',
    detils6:'6- The device is equipped with an internal battery that works for up to 3 days in the event that the car is disconnected or the battery is removed.    ',
    detils7:'7- The device sends alerts in the event of a power outage, and the device also contacts you.    ',
    detils8:'8- Determine a geographical area for the car, and if the car enters or exits it, the device sends alerts about that.    ',
    detils9:'9- Sending alerts if the car engine is running or shutting down and its location.',
    detils10:'10- Reports of mileage and gasoline consumption during the previous 3 months.',
	
		price: 85,
	
		image: require("./assets/img/images/JC400D.png"),
	},
	{
		id: 6,
		name: "OBD22 GPS TRACKER",
		detils1:'1- A tracking device for owners only and maintains the car’s warranty.    ',
    detils2:'2- Plug device * Plug without connections in the car.    ',
    detils3:'3- You will know where your car is online through an application on your mobile phone.    ',
    detils4:'4- The device is equipped with an internal microphone to hear what is happening inside the car.    ',
    detils5:'5- Easy to disassemble and install from one car to another without needing a technician.    ',
    detils6:'6- Display the previous track of the car for the previous 3 months.    ',
    detils7:'7- Gasoline consumption reports during the previous 3 months. ',
    detils8:'8- Mileage reports during the previous 3 months    ',


		price: 85,
	
		image: require("./assets/img/images/OBD22_1.png"),
	},
	{
		id: 7,
		name: "S06A GPS TRACKERl",
    detils1:'1-You can view your car online on your mobile phone through the application.',
    detils2:'You can hear what is happening inside the car because the device is equipped with a microphone.',
    detils3:'Determine the speed of the vehicle, and if the speed is exceeded, the device sends a warning.',
    detils4:'4- Disconnect the car engine and start it through the application.    ',
    detils5:'5- You can know the car’s previous trips over the past 3 months.    ',
    detils6:'6- The device is equipped with an internal battery that works for up to 3 days in the event that the car is disconnected or the battery is removed.    ',
    detils7:'7- The device sends alerts in the event of a power outage, and the device also contacts you.    ',
    detils8:'8- Determine a geographical area for the car, and if the car enters or exits it, the device sends alerts about that.    ',
    detils9:'9- Sending alerts if the car engine is running or shutting down and its location.',
    detils10:'10- Reports of mileage and gasoline consumption during the previous 3 months.',
	
		price: 85,
	
		image: require("./assets/img/images/S06A.jpg"),
	},
	{
		id: 8,
		name: "TR06N GPS TRACKER",
    detils1:'1-You can view your car online on your mobile phone through the application.  ',
    detils2:'2- You can hear what is happening inside the car because the device is equipped with a microphone.    ',
    detils3:'3- Determine the speed of the vehicle, and if the speed is exceeded, the device sends a warning.',
    detils4:'4- Disconnect the car engine and start it through the application.    ',
    detils5:'5- You can know the car’s previous trips over the past 3 months.    ',
    detils6:'6- The device is equipped with an internal battery that works for up to 3 days in the event that the car is disconnected or the battery is removed.    ',
    detils7:'7- The device sends alerts in the event of a power outage, and the device also contacts you.    ',
    detils8:'8- Determine a geographical area for the car, and if the car enters or exits it, the device sends alerts about that.    ',
    detils9:'9- Sending alerts if the car engine is running or shutting down and its location.    ',
    detils10:'10- Reports of mileage and gasoline consumption during the previous 3 months',
		price: 85,
		
		image: require("./assets/img/images/TR06N.png"),
	},
,



]

export const footerData = {
  
  
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
     
    ],
  },
};
