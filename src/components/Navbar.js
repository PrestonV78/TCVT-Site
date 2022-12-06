import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <div className="w-20 h-20 ml-1">
          <img
            className="object-cover object-center rounded"
            alt="badge"
            src="../Logo.svg"
          />
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="ml-3 text-xl">
            Home
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            About/History
          </a>
          <a href="#experience" className="mr-5 hover:text-white">
            Officers
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Calendar/Events
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Services
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Auto Fest
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Sponsors
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Community Action
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Donate
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            More
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none hover:bg-purple-800 rounded text-base mt-4 md:mt-0 hover:text-white">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
