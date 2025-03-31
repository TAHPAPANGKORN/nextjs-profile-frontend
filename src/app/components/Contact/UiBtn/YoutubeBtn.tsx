import React from 'react'
import Link from 'next/link'

function YoutubeBtn() {
  return (
          <Link
            href="https://www.youtube.com/@tah2832#"
            target="_blank"
            className="btn-contact bg-gradient-to-r from-[#FF0000] to-[#C4302B] hover:from-[#FF3D33] hover:to-[#B31B1B]"
          >
            <h3 className="font-bold text-lg">Youtube</h3>
          </Link>
  );
}

export default YoutubeBtn
