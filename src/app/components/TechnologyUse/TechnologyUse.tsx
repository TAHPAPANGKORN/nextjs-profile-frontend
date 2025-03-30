import React from 'react'
import Marquee from "react-fast-marquee";
import Logo from "@/app/components/TechnologyUse/Logo"

function TechnologyUse() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="header-item">My Tech Stack</h1>
      <Marquee pauseOnHover={true} gradient={true} autoFill={true}>
        <Logo />
      </Marquee>
    </div>
  );
}

export default TechnologyUse
