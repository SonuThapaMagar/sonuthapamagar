import React, { useState } from "react";
import "./App.css";
// Importing Navbar
import Navbar from "./components/Navbar";
//Importing Hero Section
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
    </>
  );
}

export default App;
