import React from "react";
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
import Navbar from "./components/Navbar/Navbar";
import End from "./pages/End";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Officers' element={<Officers/>} />
        <Route path='/Events' element={<Events/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/AutoFest' element={<AutoFest />} />
        <Route path='/Sponsors' element={<Sponsors/>} />
        <Route path='/Community' element={<Community/>} />
        <Route path='/Donate' element={<Donate/>} />
        <Route path='/More' element={<More/>} />
    </Routes>
    <End />
    </Router>
);
}

export default App;