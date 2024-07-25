import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className='w-full h-screen flex items-center bg-gradient-to-b from-black via-black to-gray-800' id="home">
      <div className='max-w-screen-lg  mx-auto mt-10 px-8 md:px-24'>
       <div className='flex flex-col items-start space-y-6'>
         <h2 className='text-4xl md:text-6xl font-bold text-white '>I'm a Full Stack Developer</h2>
         <p className='text-lg md:text-xl text-gray-500 max-w-xl'>"Welcome to my web development portfolio! From sleek HTML/CSS designs to dynamic React and Node.js apps, explore my projects showcasing cutting-edge skills in MongoDB, GitHub, and Tailwind. Let's create something amazing!"</p>
         <button className='group px-4 py-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white'>
            <a href="#portfolio" className='flex items-center gap-2'>Portfolio
            <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={20}/>
            </span>
            </a>

         </button>
       </div>
        
      </div>
    </div>
  )
}

export default Home
