import React from 'react'
import Link from 'next/link'

function BtnHero() {
  return (
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <Link href="#projects">
        <button className="inline-flex items-center gap-2 border border-black/50 px-6 h-12 rounded-xl hover:bg-gray-900 hover:border-black hover:text-white transition duration-350 cursor-pointer">
          <span className="font-semibold">Explore My Work</span>
        </button>
        </Link>
        <Link href="#contact">
        <button className="inline-flex items-center gap-2 border border-black bg-gray-900 text-white h-12 px-6 rounded-xl hover:bg-white hover:border-black/50 hover:text-black transition duration-350">
          <span>📩</span>
          <span className="font-semibold">{"Let's Connect"}</span>
        </button>
        </Link>
      </div>
  )
}

export default BtnHero
