import React from "react";
import { Element } from "react-scroll";
import { FaAirbnb, FaApple, FaDropbox } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

const clients = () => {
  return (
    <Element id="client" name="client">
      <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400 ">Clients</p>
        <h1 className="text-indigo-900 text-6xl font-bold text-center">
          My Clients
        </h1>
        <div className="flex justify-between text-center mx-20 my-10 md:gap-10 gap-2">
          <div className="flex justify-center items-center cursor-pointer">
            <FaAirbnb className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FaAmazon className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FaApple className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FaMicrosoft className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FaDropbox className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default clients;
