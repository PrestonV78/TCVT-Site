import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import More from "./components/More";


ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/officers" element={<Officers />} />
      <Route path="/events" element={<Events />} />
      <Route path="/services" element={<Services />} />
      <Route path="/autofest" element={<AutoFest />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/community" element={<Community />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/more" element={<More />} />
    </Routes>
    <End />
  </Router>,

  document.getElementById("root")
);
