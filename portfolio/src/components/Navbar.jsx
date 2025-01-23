import React, { useState } from 'react';
import {Link} from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";


const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>{
    setClick(!click);
  }
  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
      <ul className='text-center text-xl p-20'>
        <Link spy={true} smooth={true} to="Home">
          <li className='hover:text-fuchsia-600 transition border-b border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className='hover:text-fuchsia-600 transition border-b border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
        </Link>
        <Link spy={true} smooth={true} to="Project">
          <li className='hover:text-fuchsia-600 transition border-b border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Project</li>
        </Link>
        <Link spy={true} smooth={true} to="Blogs">
          <li className='hover:text-fuchsia-600 transition border-b border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Blogs</li>
        </Link>
      </ul>
    </div>
  </>
  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>m.Sonu</span>
        </div>
        <div className='lg:flex mg:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18ox]'>
              <Link spy={true} smooth={true} to="Home">
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
              </Link>
              <Link spy={true} smooth={true} to="Project">
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Project</li>
              </Link>
              <Link spy={true} smooth={true} to="Blogs">
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Blogs</li>
              </Link>
            </ul>
          </div>
        </div>

        <div>
          {click && content}
        </div>

        <button className='block sm:hidden trasntion' onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/> }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;