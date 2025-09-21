import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";

function FacebookBtn() {
  return (
    <Link
      href="https://www.facebook.com/papangkorn.pitjawong.2024/"
      target="_blank"
      className="group align-center gap-2 btn-contact bg-gradient-to-r from-[#1877F2] to-[#0D47A1] hover:from-[#145DBF] hover:to-[#0B377D]"
    >
      <FaFacebook className='text-2xl group-hover:hidden'/>
      <h3 className="font-bold text-lg">Facebook</h3>
    </Link>
  );
}

export default FacebookBtn
