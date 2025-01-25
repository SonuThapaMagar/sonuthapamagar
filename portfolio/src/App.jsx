// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project"; // Import the Project component

// Importing TwinklingStars
import TwinklingStars from "./components/Animation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Background stars */}
      <div className="fixed inset-0 -z-10">
        <TwinklingStars />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Home />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} /> {/* Add route for Project */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
