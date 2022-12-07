import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import End from "./components/End";

export default function App() {
  return (
    <main className="bg-white text-gray-400 body-font">
      <Navbar />
      <About />
      <Contact />
      <End />
    </main>
  );
}
