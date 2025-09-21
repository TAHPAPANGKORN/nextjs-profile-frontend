import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

function GithubBtn() {
  return (
    <Link
      href="https://github.com/TAHPAPANGKORN"
      target="_blank"
      className="group align-center gap-2 btn-contact bg-gradient-to-r from-[#181717] to-[#181717] hover:from-[#181717] hover:to-[#4078c0]"
    >
      <FaGithub className='text-2xl group-hover:hidden'/>
      <h3 className="font-bold text-lg">Github</h3>
    </Link>
  );
}

export default GithubBtn
