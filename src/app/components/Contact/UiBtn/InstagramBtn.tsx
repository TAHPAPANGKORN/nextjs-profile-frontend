import React from 'react'
import Link from 'next/link'

function InstagramBtn() {
  return (
    <Link
      href="https://www.instagram.com/xfattahz/"
      target="_blank"
      className="btn-contact bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
    >
      <h3 className="font-bold text-lg">Instagram</h3>
    </Link>
  );
}

export default InstagramBtn
