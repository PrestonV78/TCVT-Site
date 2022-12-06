import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
        <img
          className="object-cover object-center rounded"
          alt="badge"
          src="../Logo.svg"
        />
      </div>
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-7xl text-3xl mb-4 text-white">
            Truck Club at Virginia Tech
        </h1>
      </div>
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
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
      </div>
    </header>
  );
}
