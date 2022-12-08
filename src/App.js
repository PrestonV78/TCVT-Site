import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import End from "./components/End";

export default function App() {
  return (
    <main className="bg-white text-gray-400 body-font">
      <Navbar />
      <Home />
      <End />
    </main>
  );
}
