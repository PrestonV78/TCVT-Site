import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import End from "./components/End";
import About from "./components/About";
import Officers from "./components/Officers";
import Events from "./components/Events";
import Services from "./components/Services";
import AutoFest from "./components/AutoFest";
import Sponsors from "./components/Sponsors";
import Community from "./components/Community";
import Donate from "./components/Donate";
import More from "./components/More"

export default function App() {
  return (
    <main className="bg-white text-gray-400 body-font">
      <Navbar />
      <Home />
      <End />
    </main>
  );
}
