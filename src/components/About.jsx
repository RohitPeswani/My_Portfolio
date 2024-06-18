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

        <p className='text-lg md:text-2xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum libero fugiat laudantium odio necessitatibus impedit alias molestiae aut, nulla tempore veniam. Et totam nesciunt aut, eius magni praesentium voluptatibus quia eum commodi architecto est dolore! Libero natus, laboriosam deleniti sunt, voluptate sit nam voluptatum dolor vel, dignissimos maiores dolores.</p>

        <br />

        <p className='text-lg md:text-2xl mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ducimus, fugit facilis minima nulla libero. Deserunt eum dolores repudiandae autem eveniet rerum culpa et beatae quos facilis! Officiis voluptate cum natus expedita impedit, sed cupiditate nobis illum magnam atque dolore ipsum voluptatem consequuntur quibusdam mollitia modi suscipit illo eaque alias.</p>
      </div>
    </div>
  );
}

export default About
