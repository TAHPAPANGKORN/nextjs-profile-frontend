import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';

interface ProjectCardProps {
  imageSrc: string | StaticImageData;
  altText: string;
  title: string;
  description: string;
  projectLink: string | null;
  repoLink: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ 
  imageSrc, 
  altText, 
  title, 
  description, 
  projectLink, 
  repoLink 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  space-y-4 md:space-y-0 md:space-x-8 mx-2 md:gap-6">
      <Image
        src={imageSrc}
        alt={altText}
        height={300}
        width={500}
        className="rounded-xl shadow-xl shadow-gray-400"
      />
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-[12px] w-90 md:text-sm  md:w-50  lg:text-xl lg:w-130" >{description}</p>
        <div className="flex gap-4 underline underline-offset-1 text-blue-500">
          {projectLink && (
            <Link href={projectLink} target="_blank" rel="noopener noreferrer" className='hover:text-gray-500'>
              View Project
            </Link>
          )}
          <Link href={repoLink} target="_blank" rel="noopener noreferrer" className='hover:text-gray-500'>
            GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
