import React, { useState } from "react";
import "./App.css";
// Importing Navbar
import Navbar from "./components/Navbar"; 
//Importing Hero Section
import Hero from "./components/Hero";
import Profile from "./assets/sonu.png";
import ProfileBg from "./assets/Ellipse 1.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Hero/>
    </>
  );
}

export default App;
