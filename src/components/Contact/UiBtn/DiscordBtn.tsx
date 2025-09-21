import React from 'react'
import Link from 'next/link'
import { FaDiscord } from "react-icons/fa6";

function DiscordBtn() {
  return (
    <Link
      href="https://discord.com/users/yahya5#"
      target="_blank"
      className="group align-center gap-2 btn-contact bg-gradient-to-r from-[#7289DA] to-[#99AAB5] hover:from-[#5C6BC0] hover:to-[#8C9EAD]"
    >
      <FaDiscord className='text-2xl group-hover:hidden'/>
      <h3 className="font-bold text-lg">Discord</h3>
    </Link>
  );
}

export default DiscordBtn
