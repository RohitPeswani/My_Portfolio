import React from "react";
import RealEstateImg from "../assets/RealEstateImg.jpeg";
import NewsImg from "../assets/NewsImg.jpeg";
import BlogImg from "../assets/BlogImg.jpeg";
import TicTacToeImg from "../assets/TicTacToeImg.jpeg";
import WeatherImg from "../assets/WeatherImg.jpeg";
import HangManImg from "../assets/HangManImg.jpeg";

const Portfolio = () => {
  const cards = [
    {
      id: 1,
      img: RealEstateImg,
      href:"https://mern-estate-frontend.netlify.app/",
      codehref : "https://github.com/RohitPeswani/Mern_Estate_WithAdmin",
      demo : true
    },
    {
      id: 2,
      img: BlogImg,
      demo : true
    },
    {
      id: 3,
      img: NewsImg,
      demo : false
    },
    {
      id: 4,
      img: TicTacToeImg,
      demo : false
    },
    {
      id: 5,
      img: WeatherImg,
      demo : false
    },
    {
      id: 6,
      img: HangManImg,
      demo : false
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-800 text-white p-8 md:py-48 lg:p-24 xl:h-screen" id="portfolio">
      <div className="max-w-screen-lg mx-auto lg:px-20 xl:px-28 ">
        <div className="pb-8">
          <p className="border-b-4 border-b-gray-500 text-3xl md:text-5xl w-fit font-bold">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:p-0">
          {cards.map(({id, img, href, codehref, demo}) => {
            return (
              <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden" key={id}>
                <img
                  src={img}
                  className="h-32 w-full object-cover hover:scale-105 duration-300"
                ></img>
                <div className="flex items-center justify-center">
                  {demo && <button className="w-1/2 px-3 py-2 md:px-6 md:py-4 hover:scale-105 duration-200 hover:bg-white hover:text-black text-center">
                    <a href={href}>Demo</a>
                  </button>}
                  <button className={`${demo ? "w-1/2" : "w-full"}  px-3 py-2 md:px-6 md:py-4 hover:scale-105 duration-200 hover:bg-white hover:text-black text-center`}>
                    <a href={codehref}>Code</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
