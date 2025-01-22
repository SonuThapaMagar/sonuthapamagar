import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-dark-background sticky top-0 z-20 mx-auto w-full items-center justify-between overflow-x-hidden">
      <div className="container mx-auto px-4 py-4 w-full">
        <div className="flex justify-between items-center w-full my-4">
          <div>
            <h1 className="font-bold text-xl">m.Sonu</h1>
          </div>
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className={`lg:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Project
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-400 hover:text-white">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
