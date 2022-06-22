import React from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div>
      <nav className="fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer">
                  Stream <span className="text-blue-600">line</span>
                </h1>
              </div>
              {/* ! Ini section untul link */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="None"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-600 px-3 py-2 text-md"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="None"
                    to="service"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-600 px-3 py-2 text-md"
                  >
                    Service
                  </Link>
                  <Link
                    activeClass="None"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-600 px-3 py-2 text-md"
                  >
                    Project
                  </Link>
                  <Link
                    activeClass="None"
                    to="client"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-600 px-3 py-2 text-md"
                  >
                    Clients
                  </Link>
                  <Link
                    activeClass="None"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-600 px-3 py-2 text-md"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-semibold text-lg cursor-pointer hidden md:block">
                  Say <span className="text-blue-600">hi</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
