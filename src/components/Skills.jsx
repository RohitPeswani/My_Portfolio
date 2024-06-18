import React from 'react';
import html from "../assets/Skills/html.png";
import css from "../assets/Skills/css.png";
import javascript from "../assets/Skills/javascript.png";
import mongodb from "../assets/Skills/mongodb2.png";
import node from "../assets/Skills/node.png";
import react from "../assets/Skills/react.png";
import tailwind from "../assets/Skills/tailwind.png";
import github from "../assets/Skills/github.png";


const Skills = () => {
  const cards = [
    {
        id : 1,
        img : html,
        title : "HTML",
        color : "#F16529"
    },
    {
        id : 2,
        img : css,
        title : "CSS",
        color : "#0277BD"
    },
    {
        id : 3,
        img : javascript,
        title : "Javascript",
        color : "#FFD600"
    },
    {
        id : 4,
        img : mongodb,
        title : "MongoDB",
        color : "#FCF7F3"
    },
    {
        id : 5,
        img : node,
        title : "NodeJS",
        color : "#8CC84B"
    },
    {
        id : 6,
        img : react,
        title : "ReactJS",
        color : "#00D8FF"
    },
    {
        id : 7,
        img : tailwind,
        title : "TailwindCSS",
        color : "#44A8B3"
    },
    {
        id : 8,
        img : github,
        title : "Github",
        color : "#EEEEEE"
    },

  ]
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white p-8 md:py-48 lg:p-24 xl:h-screen" id="skills">
      <div className="max-w-screen-lg mx-auto lg:px-20 xl:px-28 ">
        <div className="pb-8">
          <p className="border-b-4 border-b-gray-500 text-3xl md:text-5xl w-fit font-bold">
            Technologies
          </p>
          <p className="py-6">Here are the technologies i work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:p-0">
          {cards.map(({id, img, color, title}) => {
            return (
              <div className={`shadow-md rounded-lg p-4`} style={{ boxShadow: `0 4px 6px -1px ${color}, 0 2px 4px -1px ${color}` }} key={id}>
                <img
                  src={img}
                  className="h-32 w-full object-contain hover:scale-105 duration-300"
                ></img>
                <p className='text-center mt-2'>{title}</p>
                {/* <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-4 hover:scale-105 duration-200 hover:bg-white hover:text-black">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-4 hover:scale-105 duration-200 hover:bg-white hover:text-black">
                    Code
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills
