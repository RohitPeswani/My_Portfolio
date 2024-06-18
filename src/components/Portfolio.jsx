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
    },
    {
      id: 2,
      img: BlogImg,
    },
    {
      id: 3,
      img: NewsImg,
    },
    {
      id: 4,
      img: TicTacToeImg,
    },
    {
      id: 5,
      img: WeatherImg,
    },
    {
      id: 6,
      img: HangManImg,
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
          {cards.map(({id, img}) => {
            return (
              <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden" key={id}>
                <img
                  src={img}
                  className="h-32 w-full object-cover hover:scale-105 duration-300"
                ></img>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-4 hover:scale-105 duration-200 hover:bg-white hover:text-black">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-4 hover:scale-105 duration-200 hover:bg-white hover:text-black">
                    Code
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
