import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";

const work = () => {
  return (
    <Element>
      <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400">Portfolio</p>
        <h2 className="text-indigo-900 text-6xl font-bold text-center">
          All Creative Works
        </h2>
      </div>
    </Element>
  );
};

export default work;
