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

const navigationTabs = [
  {
    name: Home,
    path: "/",
  },
  {
    name: About,
    path: "/about",
  },
  {
    name: Officers,
    path: "/officers",
  },
  {
    name: Events,
    path: "/events",
  },
  {
    name: Services,
    path: "/services",
  },
  {
    name: AutoFest,
    path: "/autofest",
  },
  {
    name: Sponsors,
    path: "/sponsors",
  },
  {
    name: Community,
    path: "/community",
  },
  {
    name: Donate,
    path: "/donate",
  },
  {
    name: More,
    path: "/more",
  },
];

export default function App() {
  return (
    <div className="bg-darkBlue text-white font-outfit py-6">
      <div className="flex flex-col lg:flex-row max-w-7xl xl:max-w-[150rem] mx-auto min-h-screen">
        <Navbar />
        <main className="bg-white text-gray-400 body-font">
          <Routes>
            {navigationTabs.map((tab, idx) => {
              return (
                <Route
                  key={idx}
                  path={tab.path}
                  element={
                    <tab.name
                    // searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}
                    />
                  }
                />
              );
            })}
          </Routes>
        </main>
      </div>
      <End />
    </div>
  );
}
