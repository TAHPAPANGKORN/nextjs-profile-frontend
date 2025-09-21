import React from 'react'
import Link from 'next/link'
import { BsTwitterX } from "react-icons/bs";

function XBtn() {
  return (
    <Link
      href="https://x.com/mogutan41181592"
      target="_blank"
      className="group align-center btn-contact bg-gradient-to-r from-[#181717] to-[#181717] hover:from-[#181717] hover:to-[#4078c0]"
    >
      <BsTwitterX className='text-2xl group-hover:text-black'/>
    </Link>
  );
}

export default XBtn
