import React from 'react'
import Link from 'next/link'
import { SiBuymeacoffee } from "react-icons/si";

function BuyMeCoffee() {
  return (
    <Link
      href="https://buymeacoffee.com/tahpapngkorn"
      target="_blank"
      className="group align-center gap-2 btn-contact  font-bold text-lg px-4 py-2 rounded-md transition-colors duration-300 bg-gradient-to-r from-[#FFDD00] via-[#FFC700] to-[#FFB100] hover:from-[#FFC700] hover:to-[#FFA500]"
    >
    <SiBuymeacoffee className='text-2xl group-hover:hidden'/>

    <h3 className="font-bold text-lg">Buy Me A Coffee</h3>
    </Link>
  );
}

export default BuyMeCoffee

