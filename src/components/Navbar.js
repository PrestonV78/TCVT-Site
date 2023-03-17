import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

export default function Navbar() {
  return (
    <header className="bg-black md: top-5 z-10">
      <div className="container mx-auto flex w-1/4 py-2 flex-row items-center">
        <img
          className="object-center object-cover rounded"
          alt="badge"
          src="../Logo.svg"
        />
      </div>
      <div className="container px-5 py-2 mx-auto text-center lg:px-40">
        <h1 className="title-font sm:text-4xl text-2xl text-white font-semibold">
          TRUCK CLUB AT VIRGINIA TECH
        </h1>
      </div>
      <div className="container h-px mx-auto flex px-10 py-.1 bg-white items-center"></div>
      <div className="container pb-4 bg-black mx-auto flex flex-row items-center">
        {/* <!-- Hamburger icon --> */}
        <input class="side-menu" type="checkbox" id="side-menu" />
        <label class="hamb" for="side-menu">
          <span class="hamb-line"></span>
        </label>

        {/* <!-- Menu --> */}
        <nav
          class="nav"
        >
          <ul class="menu">
            <li>
              <NavLink
                className=" text-black text-sm text-center"
              >
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/about"
              >
                About/History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/officers"
              >
                Officers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/events"
              >
                Calendar/Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/autofest"
              >
                AutoFest
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/sponsors"
              >
                Sponsors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/donate"
              >
                Donate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className=" text-white text-sm text-center"
                style={linkStyle}
                to="/more"
              >
                More
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
