import React from 'react'
import Link from 'next/link'

function BuyMeCoffee() {
  return (
    <Link
      href="https://buymeacoffee.com/tahpapngkorn"
      target="_blank"
      className="btn-contact  font-bold text-lg px-4 py-2 rounded-md transition-colors duration-300 bg-gradient-to-r from-[#FFDD00] via-[#FFC700] to-[#FFB100] hover:from-[#FFC700] hover:to-[#FFA500]"
    >
     ☕ Buy Me A Coffee
    </Link>
  );
}

export default BuyMeCoffee

