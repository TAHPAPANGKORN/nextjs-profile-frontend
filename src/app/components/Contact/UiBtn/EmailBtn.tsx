import React from 'react'
import Link from 'next/link'

function EmailBtn() {
  return (
    <Link
      href="#"
      target="_blank"
      className="btn-contact bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#34A853] hover:to-[#FFB600]"
    >
      <h3 className="font-bold text-lg">Email</h3>
    </Link>
  );
}

export default EmailBtn
