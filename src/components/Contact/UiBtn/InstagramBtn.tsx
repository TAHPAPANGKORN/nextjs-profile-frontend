import React from 'react'
import Link from 'next/link'
import { BsInstagram } from "react-icons/bs";

function InstagramBtn() {
  return (
    <Link
      href="https://www.instagram.com/xfattahz/"
      target="_blank"
      className="group align-center gap-2 btn-contact bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
    >
      <BsInstagram className='text-2xl group-hover:hidden'/>
      <h3 className="font-bold text-lg">Instagram</h3>
    </Link>   
  );
}

export default InstagramBtn
