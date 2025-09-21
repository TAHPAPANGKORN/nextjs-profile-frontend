'use client'
import React from 'react'
import Link from 'next/link'
import { Element } from "react-scroll";
function BtnHero() {
  return (
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <Link href="#projects">
        <button className="inline-flex items-center gap-2  border border-black/50 px-6 h-12 rounded-xl hover:bg-gray-900 hover:border-black hover:text-white transition duration-350 cursor-pointer backdrop-blur-2xl">
          <span className="font-semibold">Explore My Work</span>
        </button>
        </Link>
        <Link href="#contact">
        <button className="inline-flex items-center gap-2 border border-black bg-gray-900 text-white h-12 px-6 rounded-xl hover:bg-transparent hover:backdrop-blur-2xl hover:border-black/50 hover:text-black transition duration-350">
          <span>📩</span>
          <span className="font-semibold">{"Let's Connect"}</span>
        </button>
        </Link>
      </div>
  )
}

export default BtnHero
