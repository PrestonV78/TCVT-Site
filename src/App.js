import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import End from "./components/End";

import Home from "./pages/Home";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Events from "./pages/Events";
import Services from "./pages/Services";
import AutoFest from "./pages/AutoFest";
import Sponsors from "./pages/Sponsors";
import Community from "./pages/Community";
import Donate from "./pages/Donate";
import More from "./pages/More";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/officers" element={<Officers />} />
        <Route  path="/events" element={<Events />} />
        <Route  path="/services" element={<Services />} />
        <Route  path="/autofest" element={<AutoFest />} />
        <Route  path="/sponsors" element={<Sponsors />} />
        <Route  path="/community" element={<Community />} />
        <Route  path="/donate" element={<Donate />} />
        <Route  path="/more" element={<More />} />
      </Routes>
      <End />
    </Router>
  );
}
