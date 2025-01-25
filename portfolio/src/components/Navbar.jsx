import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold">m.Sonu</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-base">
          <Link spy={true} smooth={true} to="Home" className="cursor-pointer">
            <li className="hover:text-blue-600 transition">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="About" className="cursor-pointer">
            <li className="hover:text-blue-600 transition">About</li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="Project"
            className="cursor-pointer"
          >
            <li className="hover:text-blue-600 transition">Project</li>
          </Link>
          <Link spy={true} smooth={true} to="Blogs" className="cursor-pointer">
            <li className="hover:text-blue-600 transition">Blogs</li>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-2xl"
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="lg:hidden bg-slate-900">
          <ul className="flex flex-col text-center py-4 space-y-2">
            <Link spy={true} smooth={true} to="Home" onClick={handleClick}>
              <li className="hover:text-blue-600 transition cursor-pointer">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About" onClick={handleClick}>
              <li className="hover:text-blue-600 transition cursor-pointer">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Project" onClick={handleClick}>
              <li className="hover:text-blue-600 transition cursor-pointer">
                Project
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Blogs" onClick={handleClick}>
              <li className="hover:text-blue-600 transition cursor-pointer">
                Blogs
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
