import React from 'react'
import Link from 'next/link'

function DiscordBtn() {
  return (
    <Link
      href="https://discord.com/users/yahya5#"
      target="_blank"
      className="btn-contact bg-gradient-to-r from-[#7289DA] to-[#99AAB5] hover:from-[#5C6BC0] hover:to-[#8C9EAD]"
    >
      <h3 className="font-bold text-lg">Discord</h3>
    </Link>
  );
}

export default DiscordBtn
