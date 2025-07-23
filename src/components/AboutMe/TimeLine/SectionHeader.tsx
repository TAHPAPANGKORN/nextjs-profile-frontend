"use client";

import { PiStudentFill } from "react-icons/pi";



import { SectionHeaderProps } from "@/components/AboutMe/TimeLine/types";

export const SectionHeader = ({ icon, title, className = "" }: SectionHeaderProps) => (
  <div className={`flex items-center mb-6 ${className}`}>
    <div className="bg-primary-100 text-blue-500 p-2 rounded-full">
      <div className="text-2xl">
        <PiStudentFill />
      </div>
    </div>
    <h2 className="text-2xl font-bold text-blue-500">{title}</h2>
  </div>
);