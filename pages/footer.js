import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";

const footer = () => {
  return (
    <div className="w-full h-16 bg-gray-50 justify-center items-center">
      <h1 className="text-xl text-blue-900 mr-2">Made by</h1>
      <AiTwotoneHeart className="text-black" />
      <h1 className="text-xl text-blue-900 ml-2">
        Vreated by{" "}
        <a
          href=""
          className="cursor-pointer font-semibold text-indigo-900 hover:text-black"
        ></a>
      </h1>
    </div>
  );
};

export default footer;
