"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPython,
  SiPhp,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiArduino,
  SiVuedotjs,
  SiQuasar,
  SiNestjs,
} from "react-icons/si";
import { GiPineapple } from "react-icons/gi";

interface ProjectCardProps {
  imageSrc: string | StaticImageData;
  altText: string;
  title: string;
  description: string;
  projectLink: string | null;
  repoLink: string;
  backendRepoLink?: string;
  techStack?: string[];
}

const TECH_DATA: Record<
  string,
  { icon: IconType; color: string; name: string }
> = {
  nextjs: { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  react: { icon: SiReact, color: "#61DAFB", name: "React" },
  typescript: { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  python: { icon: SiPython, color: "#3776AB", name: "Python" },
  php: { icon: SiPhp, color: "#777BB4", name: "PHP" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
  html: { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
  css: { icon: SiCss3, color: "#1572B6", name: "CSS3" },
  javascript: { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  arduino: { icon: SiArduino, color: "#00979D", name: "Arduino" },
  vue: { icon: SiVuedotjs, color: "#4FC08D", name: "Vue.js" },
  quasar: { icon: SiQuasar, color: "#1976D2", name: "Quasar" },
  pinia: { icon: GiPineapple, color: "#FFE148", name: "Pinia" },
  nestjs: { icon: SiNestjs, color: "#E0234E", name: "NestJS" },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  projectLink,
  repoLink,
  backendRepoLink,
  techStack,
}) => {
  const [showImage, setShowImage] = useState(false);

  const handleViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowImage(!showImage);
  };

  useEffect(() => {
    if (showImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showImage]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mx-2 md:gap-6">
      <Image
        onClick={handleViewClick}
        src={imageSrc}
        alt={altText}
        height={300}
        width={500}
        className="rounded-xl shadow-xl shadow-gray-400 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      />
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-bold max-w-50 text-2xl">{title}</h2>
        <p className="text-[12px] w-90 md:text-sm md:w-50 lg:text-xl lg:w-130 text-gray-600">
          {description}
        </p>

        {/* --- TRICK TECH STACK SECTION --- */}
        {techStack && techStack.length > 0 && (
          <div className="flex items-center gap-3 mt-1 mb-1">
            {techStack.map((t) => {
              // Increased slice to 5 for better visibility
              const key = t.trim().toLowerCase();
              const tech = TECH_DATA[key];

              if (!tech) return null;
              const { icon: Icon, color, name } = tech;

              return (
                <div key={key} className="relative group ">
                  {/* Tooltip (Hidden by default, shown on group-hover) */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto p-1.5 min-w-[60px] text-center text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
                    {name}
                    {/* Tiny triangle for tooltip arrow */}
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></span>
                  </span>

                  {/* Icon Container */}
                  <div className="p-2 rounded-full bg-gray-100 shadow-sm border border-gray-200 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                    <Icon className="w-5 h-5 text-gray-400 transition-colors duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex gap-4 underline underline-offset-1 text-blue-500 items-center">
          {projectLink && (
            <Link
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              View Project
            </Link>
          )}

          <div className="flex items-center gap-2">
            {backendRepoLink ? (
              <div className="flex gap-2">
                <Link
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 flex items-center gap-1 transition-colors"
                >
                  <span>Git Frontend</span>
                </Link>
                <span>/</span>
                <Link
                  href={backendRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 flex items-center gap-1 transition-colors"
                >
                  <span>Git Backend</span>
                </Link>
              </div>
            ) : (
              <Link
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 flex items-center gap-1 transition-colors"
              >
                <span>GitHub Repo</span>
              </Link>
            )}
          </div>
        </div>

        {showImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <button
              onClick={handleViewClick}
              className="absolute top-5 right-5 text-white z-50 cursor-pointer text-xl font-bold hover:text-red-500 transition-colors"
            >
              ✕ Close
            </button>
            <Image
              onClick={handleViewClick}
              src={imageSrc}
              alt={altText}
              height={600}
              width={800}
              className="p-4 w-auto max-h-[90vh] rounded-xl cursor-pointer object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
