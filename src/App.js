import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
