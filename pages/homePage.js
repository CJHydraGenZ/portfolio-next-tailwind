import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";
const HomePage = () => {
  return (
    <Element id="home" name="home">
      <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
        <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
          <Image
            src={`/images/gw.JPG`}
            alt="gw"
            layout="fill"
            objectFit="cover"
            className="rounded-full cursor-pointer hidden md:block"
          />
        </div>
        <div className="flex flex-col md:ml-20 mx-10 mt-10">
          <h1 className="font-bold text-7xl text-left mb-5">
            Hello, I am <span className="text-indigo-900">Cahya</span>
          </h1>
          <p className="text-left font-normal mb-5 flex-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dignissimos et sapiente. Iure recusandae omnis nostrum tempore alias
            quia nesciunt ullam, est, ut, similique eveniet. Eius porro repellat
            amet laboriosam?
          </p>
          <a
            href=""
            className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16"
          >
            See my Porfolio !
          </a>
        </div>
      </div>
    </Element>
  );
};

export default HomePage;
