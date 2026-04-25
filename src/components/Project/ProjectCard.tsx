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
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiNodedotjs,
  SiFirebase,
  SiVercel,
  SiGitlab,
  SiGithub,
} from "react-icons/si";
import { GiPineapple, GiWrench } from "react-icons/gi";

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
  supabase: { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
  mysql: { icon: SiMysql, color: "#4479A1", name: "MySQL" },
  postgresql: { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  mongodb: { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  docker: { icon: SiDocker, color: "#2496ED", name: "Docker" },
  nodejs: { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  firebase: { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  vercel: { icon: SiVercel, color: "#000000", name: "Vercel" },
  gitlab: { icon: SiGitlab, color: "#FC6D26", name: "GitLab" },
  github: { icon: SiGithub, color: "#181717", name: "GitHub" },
  moralis: { icon: GiWrench, color: "#000000", name: "Moralis" },
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
        unoptimized={true}
        className="rounded-xl shadow-xl shadow-gray-400 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      />
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-bold max-w-50 text-2xl">{title}</h2>
        <p className="text-[12px] w-90 md:text-sm md:w-50 lg:text-xl lg:w-130 text-gray-600">
          {description}
        </p>

        {/* --- TRICK TECH STACK SECTION --- */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mt-1 mb-1">
            {techStack.map((t) => {
              const key = t.trim().toLowerCase();
              const tech = TECH_DATA[key];
              const Icon = tech?.icon;
              const name = tech?.name || t;

              return (
                <div key={key} className="relative group">
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto px-2 py-1 text-center text-[10px] font-bold text-white bg-slate-900 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 whitespace-nowrap shadow-xl">
                    {name}
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></span>
                  </span>

                  {/* Icon Container */}
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-blue-200">
                    {Icon ? (
                      <Icon className="w-4 h-4 transition-colors duration-300" style={{ color: tech.color }} />
                    ) : (
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    )}
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{name}</span>
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
                {repoLink && (
                  <Link
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500 flex items-center gap-1 transition-colors"
                  >
                    <span>Git Frontend</span>
                  </Link>
                )}
                {repoLink && backendRepoLink && <span>/</span>}
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
              repoLink && (
                <Link
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 flex items-center gap-1 transition-colors"
                >
                  <span>GitHub Repo</span>
                </Link>
              )
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
              unoptimized={true}
              className="p-4 w-auto max-h-[90vh] rounded-xl cursor-pointer object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
