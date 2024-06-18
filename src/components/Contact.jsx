import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='w-full xl:h-screen bg-gradient-to-b from-black to-gray-800 text-white p-8 md:py-48 lg:p-24'>
      <div className='max-w-screen-lg mx-auto  lg:px-20 '>
      <div>
        <p className='border-b-4 border-b-gray-500 text-3xl md:text-5xl w-fit font-bold'>Contact</p>
        <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className='flex w-full p-4 md:p-0'>
           <form action="https://getform.io/f/nbvvggzb" className='flex flex-col gap-4 w-full md:w-1/2 md:mx-auto' method='POST'>
            <input type="text" name="name" id="" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="text" name="email" id="" placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent rounded-md border-2 focus:outline-none'></textarea>
            <button className='bg-gradient-to-b from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md hover:scale-105 duration-300 mx-auto flex items-center'>Submit</button>
           </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
