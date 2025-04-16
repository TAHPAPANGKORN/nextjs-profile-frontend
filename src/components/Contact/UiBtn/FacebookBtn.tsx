import React from 'react'
import Link from 'next/link'

function FacebookBtn() {
  return (
    <Link
      href="https://www.facebook.com/papangkorn.pitjawong.2024/"
      target="_blank"
      className="btn-contact bg-gradient-to-r from-[#1877F2] to-[#0D47A1] hover:from-[#145DBF] hover:to-[#0B377D]"
    >
      <h3 className="font-bold text-lg">Facebook</h3>
    </Link>
  );
}

export default FacebookBtn
