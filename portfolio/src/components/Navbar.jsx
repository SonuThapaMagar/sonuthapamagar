import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
      <ul className="text-center text-base p-5">
        <Link spy={true} smooth={true} to="Home">
          <li className="hover:text-blue-600 transition border-b border-slate-900 hover:border-blue-600 cursor-pointer py-2">
            Home
          </li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="hover:text-blue-600 transition border-b border-slate-900 hover:border-blue-600 cursor-pointer py-2">
            About
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Project">
          <li className="hover:text-blue-600 transition border-b border-slate-900 hover:border-blue-600 cursor-pointer py-2">
            Project
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Blogs">
          <li className="hover:text-blue-600 transition border-b border-slate-900 hover:border-blue-600 cursor-pointer py-2">
            Blogs
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="fixed top-0 w-full h-16vh flex justify-between items-center z-50lg:py-2 px-5 py-0 bg-slate-900 text-white shadow-lg ">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold px-4">m.Sonu</span>
        </div>
        <div className="lg:flex hidden flex-1 items-center justify-end font-normal">
          <ul className="flex gap-8 mr-16 text-base lg:text-lg">
            <Link spy={true} smooth={true} to="Home">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Project">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                Project
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Blogs">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                Blogs
              </li>
            </Link>
          </ul>
        </div>

        <button
          className="block lg:hidden ml-auto transition"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
      {click && content}
    </nav>
  );
};

export default Navbar;
