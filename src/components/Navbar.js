import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

export default function Navbar() {
  return (
    <header className="bg-black md: top-0 z-10">
      <div className="container mx-auto flex px-5 py-2 flex-row items-center w-80">
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
      <div className="container h-px mx-auto flex px-10 py-.1 bg-white items-center"></div>
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row justify-between">
        <nav className="md:mr-auto md:ml-4 md:py-1 px-15 md:pl-4 flex flex-row">
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/about">
              About/History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/officers">
              Officers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/events">
              Calendar/Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/services">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/autofest">
              AutoFest
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/sponsors">
              Sponsors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/community">
              Community Action
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/donate">
              Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mr-5 text-white" style={linkStyle}  to="/more">
              More
            </NavLink>
          </li>
        </nav>
        <div className="container h-px mx-auto flex px-10 py-3 bg-black items-center"></div>
      </div>
    </header>
  );
}
