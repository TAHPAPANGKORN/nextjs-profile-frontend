import React from 'react'

function BtnHero() {
  return (
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-black/50 px-6 h-12 rounded-xl hover:bg-gray-900 hover:border-black hover:text-white transition duration-350">
          <span className="font-semibold">Explore My Work</span>
        </button>
        <button className="inline-flex items-center gap-2 border border-black bg-gray-900 text-white h-12 px-6 rounded-xl hover:bg-white hover:border-black/50 hover:text-black transition duration-350">
          <span>📩</span>
          <span className="font-semibold">{"Let's Connect"}</span>
        </button>
      </div>
  )
}

export default BtnHero
