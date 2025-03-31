import React from "react";
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiVim, SiArduino } from "react-icons/si";

const logoArr = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiVim />, name: "Vim" },
  { icon: <SiArduino />, name: "Arduino" },
  { icon: <FaGitAlt />, name: "Git" },
];

function Logo() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {logoArr.map((logo, index) => (
        <div key={index} className="flex flex-col m-8 items-center text-6xl">
          {logo.icon}
          <span className="text-sm mt-2">{logo.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Logo;
