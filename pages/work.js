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

        <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
          <div className="rounded w-80 h-60 shadow-xl relative my-6">
            <Image
              src="/images/1.png"
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded w-80 h-60 shadow-xl relative my-6">
            <Image
              src="/images/2.png"
              alt="two"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded w-80 h-60 shadow-xl relative my-6">
            <Image
              src="/images/3.png"
              alt="three"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
        </div>
        <div className="md:flex sm:flex-col md:flex-row justify-center items-start md:gap-10 sm:pb-10 mt-10">
          <div className="rounded w-80 h-60 shadow-xl relative my-6">
            <Image
              src="/images/1.png"
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded w-80 h-60 shadow-xl relative my-6">
            <Image
              src="/images/2.png"
              alt="two"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded w-80 h-60 shadow-xl relative my-6">
            <Image
              src="/images/3.png"
              alt="three"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default work;
