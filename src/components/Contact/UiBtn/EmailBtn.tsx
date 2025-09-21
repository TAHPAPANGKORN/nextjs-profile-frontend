import React from 'react'
import Link from 'next/link'
import { MdEmail } from "react-icons/md";

function EmailBtn() {
  return (
    <Link
      href="mailto:papangkorn.pitjawong.work@gmail.com"
      target="_blank"
      className="group align-center gap-2 btn-contact bg-gradient-to-r from-[#181717] to-[#181717] hover:from-[#181717] hover:to-[#4078c0]"
    >
      <MdEmail className='text-2xl group-hover:hidden'/>
      <h3 className="font-bold text-lg">Email</h3>
    </Link>
  );
}

export default EmailBtn
