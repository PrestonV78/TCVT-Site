import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center w-80">
        <img
          className="object-cover object-center rounded"
          alt="badge"
          src="../Logo.svg"
        />
      </div>
      <div className="container px-5 py-2 mx-auto text-center lg:px-40">
        <h1 className="title-font sm:text-5xl text-3xl mb-4 text-white font-semibold">
            TRUCK CLUB AT VIRGINIA TECH
        </h1>
      </div>
      <div className="container h-px mx-auto flex px-10 py-.1 bg-white items-center">
      </div>
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row text-center items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base text-center justify-center">
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
