import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rohit-peswani-0b1476284",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/RohitPeswani",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rohitpeswani28@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}  />
        </>
      ),
      href: "/Resume/Rohit_Peswani_Resume.pdf",
      style: "rounded-br-md",
      download:true
    },
  ];
  return (
    <div className="hidden lg:block fixed top-[37%] overflow-hidden">
      <ul className="flex flex-col">
        {links.map(({ id, child, href, style, download }) => {
          return (
            <li
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-gray-500 text-white duration-300 hover:rounded-md ${style}`}
              key={id}
            >
              <a
                href={href}
                className="w-full flex justify-between items-center"
                download={download}
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
