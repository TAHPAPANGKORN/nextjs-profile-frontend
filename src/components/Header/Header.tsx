'use client';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export const Header = () => {
  const [active, setActive] = useState('home');

  const navItems = [
    { name: 'Home', to: 'home', offset: 0 },
    { name: 'About', to: 'about', offset: 0 },
    { name: 'Project', to: 'project', offset: 0 },
    { name: 'Contacts', to: 'contact', offset: -500 }, 
  ];

  const handleSetActive = (to: string) => {
    setActive(to);
  };

  return (
    <div className="flex space-x-10 justify-center items-center fixed top-3 w-full z-10">
      <h1 className="hidden md:block font-semibold">PAPANGKORN PITJAWONG</h1>
      <nav className="flex gap-1 p-1 md:p-0.5 border border-black/10 rounded-full bg-white/10 backdrop-blur relative">
        {navItems.map(({ name, to, offset }) => {
          const isActive = active === to;

          return (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={0}
              spy={true}
              offset={offset}
              onSetActive={handleSetActive}
              className="nav-item relative"
            >
              {name}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0   bg-black/10 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          );
        })}

        <NextLink
          href="https://github.com/TAHPAPANGKORN"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item bg-gray-900 text-white hover:bg-black/50 hover:text-white-900 flex items-center justify-center p-2 rounded-full"
        >
            {/* Text on md+ screens, icon on smaller screens */}
            <div className="flex items-center gap-2">
              <span className="text-xl">
                <FaGithub />
              </span>
              <span className="hidden md:inline">GitHub</span>
            </div>
        </NextLink>
      </nav>
    </div>
  );
};
