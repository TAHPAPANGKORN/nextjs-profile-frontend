import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';
import { projectService, Project as ProjectData } from '@/services/projectService';
import { projects as localProjects } from '@/data/projects';

export const Project = () => {
  const [displayProjects, setDisplayProjects] = useState<ProjectData[]>([]);
  const [dbStatus, setDbStatus] = useState<'loading' | 'connected' | 'error' | 'local'>('loading');

  useEffect(() => {
    const fetchProjects = async () => {
      console.log('Attempting to fetch projects from Supabase...');
      try {
        const data = await projectService.getActive();
        if (data && data.length > 0) {
          console.log('Successfully connected to Supabase! Found', data.length, 'active projects.');
          setDisplayProjects(data);
          setDbStatus('connected');
        } else {
          console.log('Connected to Supabase, but no active projects found. Using local data.');
          setDbStatus('local');
          setDisplayProjects(localProjects as any);
        }
      } catch (error: any) {
        console.error('Supabase error:', error.message);
        setDbStatus('error');
        setDisplayProjects(localProjects as any);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects" className="bg-[#F3F4F6] flex flex-col items-center justify-center py-5 gap-20 scroll-mt-9 relative">
      <div className="absolute top-2 right-2 text-[10px] text-gray-400">
        Source: {dbStatus === 'connected' ? '🟢 Supabase DB' : '⚪ Local File'}
      </div>
      <h1 className="header-item mt-5">Projects</h1>
      {displayProjects.map((item) => (
        <ProjectCard
          key={item.id}
          imageSrc={item.image_src}
          altText="Project Image"
          title={item.title}
          description={item.description}
          projectLink={item.project_link}
          repoLink={item.repo_link}
          backendRepoLink={item.backend_repo_link}
          techStack={item.tech_stack}
        />
      ))}
    </div>
  );
};
