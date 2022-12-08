import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

function Navbar() {
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
      <div className="container h-px mx-auto flex px-10 py-.1 bg-white items-center">
      </div>
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row justify-between">
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
        <div className="container h-px mx-auto flex px-10 py-3 bg-black items-center">
        </div>
      </div>
    </header>
  );
}

export default Navbar;