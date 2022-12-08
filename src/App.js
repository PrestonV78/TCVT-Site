import React from "react";

import Navbar from "./components/Navbar";
import End from "./components/End";

import Home from "./pages/Home";
// import About from "./pages/About";
// import Officers from "./pages/Officers";
// import Events from "./pages/Events";
// import Services from "./pages/Services";
// import AutoFest from "./pages/AutoFest";
// import Sponsors from "./pages/Sponsors";
// import Community from "./pages/Community";
// import Donate from "./pages/Donate";
// import More from "./pages/More";

function App() {
  return (
    <main className="bg-white text-gray-400 body-font">
      <Navbar />
      <Home />
      <End />
    </main>
  );
}

export default App;
