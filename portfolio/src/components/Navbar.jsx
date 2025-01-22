import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-dark-background sticky top-0 z-20 mx-auto flex w-full items-center justify-between">
      <div className="container m-auto px-4 py-4">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-bold text-xl">Sonu Thapa Magar</h1>
          </div>
          <div>
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