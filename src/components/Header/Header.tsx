'use client'
import React from 'react';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
  <div className="flex space-x-10 justify-center items-center fixed top-3 w-full z-10 ">
    <h1 className="hidden md:block font-semibold">PAPANGKORN PITJAWONG</h1>
    <nav className="flex gap-1 p-0.5 border border-black/10 rounded-full bg-white/10 backdrop-blur">
      <Link  to="home" smooth={true} duration={0} spy={true} activeClass='bg-black/10' className="nav-item">Home</Link>
      <Link  to="about" smooth={true} duration={0} spy={true} activeClass='bg-black/10' className="nav-item">about</Link>
      <Link  to="project" smooth={true} duration={0} spy={true} activeClass='bg-black/10' className="nav-item">project</Link>
      <Link  to="contact" smooth={true} duration={0} className="nav-item bg-gray-900 text-white hover:bg-black/50 hover:text-white-900">Contacts</Link>
    </nav>
  </div>
  );
};

