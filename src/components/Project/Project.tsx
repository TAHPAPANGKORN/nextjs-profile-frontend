import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export const Project = () => {
  return (
    <div id="projects" className="bg-[#F3F4F6] flex flex-col items-center justify-center py-5 gap-20 scroll-mt-9">
      <h1 className="header-item mt-5">Projects</h1>
      {projects.map((item) => (
        <ProjectCard
          key={item.id}
          imageSrc={item.imageSrc}
          altText="Project Image"
          title={item.title}
          description={item.description}
          projectLink={item.projectLink}
          repoLink={item.repoLink}
          backendRepoLink={item.backendRepoLink}
          techStack={item.techStack}
        />
      ))}
    </div>
  );
};
