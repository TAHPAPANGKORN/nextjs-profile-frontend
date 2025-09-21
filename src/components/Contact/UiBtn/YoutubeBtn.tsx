import React from 'react'
import Link from 'next/link'
import { FaYoutube } from "react-icons/fa";

function YoutubeBtn() {
  return (
          <Link
            href="https://www.youtube.com/@tah2832#"
            target="_blank"
            className="group align-center gap-2 btn-contact bg-gradient-to-r from-[#FF0000] to-[#C4302B] hover:from-[#FF3D33] hover:to-[#B31B1B]"
          >
            <FaYoutube className='text-2xl group-hover:hidden'/>
            <h3 className="font-bold text-lg">Youtube</h3>
          </Link>
  );
}

export default YoutubeBtn
