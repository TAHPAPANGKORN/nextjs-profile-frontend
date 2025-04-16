import React from 'react'
import Link from 'next/link'

function XBtn() {
  return (
    <Link
      href="https://x.com/mogutan41181592"
      target="_blank"
      className="btn-contact bg-gradient-to-r from-[#181717] to-[#181717] hover:from-[#181717] hover:to-[#4078c0]"
    >
      <h3 className="font-bold text-lg">X</h3>
    </Link>
  );
}

export default XBtn
