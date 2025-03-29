import React from 'react'
import ProjectCard from './ProjectCard';
import DiscordProject  from "@/app/assets/images/ProjectImage/Discord-Project.png"
import WebProfile from "@/app/assets/images/ProjectImage/Website-Profile.png"

export const Project = () => {
  return (
    <div
      id="project"
      className="bg-[#F3F4F6] flex flex-col items-center justify-center py-5 gap-20 "
    >
      <h1 className="header-item mt-5">Projects</h1>
      <ProjectCard
        imageSrc={DiscordProject}
        altText="Project Image"
        title="Poke bot discord"
        description="Creating a bot that can replace the missing alarm system on Discord can be done using Python and various libraries, such as `discord.py`, to interact with the Discord API."
        projectLink="https://youtu.be/0HeG3MOLzP0?si=LdNVMXReGyC2IY8_"
        repoLink="https://github.com/TAHPAPANGKORN/PokeBotDiscord"
      />

      <ProjectCard
        imageSrc={WebProfile}
        altText="Project Image"
        title="Website"
        description="Creating a website for self-introduction."
        projectLink="https://papangkorn-profile.pages.dev/"
        repoLink="https://github.com/TAHPAPANGKORN/Papangkorn-Profile"
      />
    </div>
  );
}

export default Project
