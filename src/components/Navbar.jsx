import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
            id : 1,
            link : "Home",
            href:"#home"
        },
        {
            id : 2,
            link : "About",
            href:"#about"
        },
        {
            id : 3,
            link : "Portfolio",
            href:"#portfolio"
        },
        {
            id : 4,
            link : "Skills",
            href:"#skills"
        },
        {
            id : 5,
            link : "Contact",
            href:"#contact"
        }
    ];
  return (
    <div className='w-full bg-black h-20 px-8 flex items-center justify-between fixed 
       bg-white-500 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <h4 className='text-white font-signature text-3xl sm:text-5xl'>Rohit</h4>
        <ul className='hidden text-xl space-x-4 md:flex items-center'>
            {links.map(({id, link, href}) => {
              return  <li key={id} className='text-gray-500 hover:text-white hover:scale-105 duration-200'><a href={href}>{link}</a></li>
            })}
        </ul>
        <div className='md:hidden text-gray-500 cursor-pointer z-50' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={30} className='z-999'/> :<FaBars size={30} className='z-999'/>}

        </div>

        <ul className={`flex flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 items-center justify-center space-y-6 text-4xl ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-200 md:hidden`}>
          {links.map(({id, link, href}) => {
              return  <li key={id} className='text-gray-500 hover:text-white hover:scale-105 duration-200' onClick={() => setIsOpen(false)}><a href={href}>{link}</a></li>
            })}
            
        </ul>
    </div>
  )
}

export default Navbar
