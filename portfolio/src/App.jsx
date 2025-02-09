// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// Import Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project"; 
import Achievement from "./components/Achievement"; 

// Importing TwinklingStars
import TwinklingStars from "./components/Animation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/">
      {/* Background stars */}
      <div className="fixed inset-0 -z-10">
        <TwinklingStars />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Navbar />
        <div className="pt-20">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/achievement" element={<Achievement />} />
        </Routes>
        </div>
      </div>

       {/* Footer Section */}
       <footer className=" text-gray-400 py-6 text-center">
        <p className="text-sm">
          &copy;{new Date().getFullYear()} Sonu Thapa Magar. All rights
          reserved.
        </p>
      </footer>
    </Router>
  );
}

export default App;
