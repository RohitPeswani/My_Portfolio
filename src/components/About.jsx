import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-gradient-to-b from-gray-800 to-black text-white p-8 md:py-48 lg:p-24 xl:h-screen' id="about">
      <div className='max-w-screen-lg mx-auto lg:px-20 xl:px-28'>
        <div className='border-b-4 border-b-gray-500 w-fit text-3xl md:text-5xl'>
            <p className='text-white font-bold '>
                About
            </p>
        </div>

        <p className='text-lg md:text-2xl mt-10'>Hi, I'm Rohit Peswani, a passionate web developer with expertise in HTML, CSS, JavaScript, React, MongoDB, Node.js, Express, and TailwindCSS. I graduated from Silver Oak University with a BCA, earning a 9.59 CGPA. My education provided a solid foundation for my web development career.</p>

        <br />

        <p className='text-lg md:text-2xl mt-10'>I have three months of experience as a ReactJS intern at Bhaskarcharya Institute of Space Applications and Geo-informatics, where I worked on an AI-based learning management system project. This experience honed my skills and deepened my knowledge, enabling me to create innovative web solutions.</p>
      </div>
    </div>
  );
}

export default About
