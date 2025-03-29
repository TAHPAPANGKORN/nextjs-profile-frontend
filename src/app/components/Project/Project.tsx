import React from 'react'
import ProjectCard from './ProjectCard';
import DiscordProject from "@/app/assets/images/ProjectImage/Discord-Project.png";
import WebProfile from "@/app/assets/images/ProjectImage/Website-Profile.png";
import WebNextJs from "@/app/assets/images/ProjectImage/Website-Nextjs.png"
import ComingSoon from "@/app/assets/images/ProjectImage/ComingSoon-image.jpg"
const card = [
  {
    id: 1,
    title: "Poke bot discord",
    description: "Creating a bot that can replace the missing alarm system on Discord can be done using Python and various libraries, such as `discord.py`, to interact with the Discord API.",
    projectLink: "https://youtu.be/0HeG3MOLzP0?si=LdNVMXReGyC2IY8_",
    repoLink: "https://github.com/TAHPAPANGKORN/PokeBotDiscord",
    imageSrc: DiscordProject,
  },
  {
    id: 2,
    title: "Profile-web with next.js",
    description: "Creating a bot that can replace the missing alarm system on Discord can be done using Python and various libraries, such as `discord.py`, to interact with the Discord API.",
    projectLink: "https://youtu.be/0HeG3MOLzP0?si=LdNVMXReGyC2IY8_",
    repoLink: "https://github.com/TAHPAPANGKORN/PokeBotDiscord",
    imageSrc: WebNextJs,
  },
  {
    id: 3,
    title: "Web Profile (Old Versions)",
    description: "A personal portfolio website built using modern web technologies.",
    projectLink: "https://papangkorn-profile.pages.dev/Project",
    repoLink: "https://github.com/example/web-profile",
    imageSrc: WebProfile,
  },
  {
    id: 4,
    title: "Sigma-Calculator",
    description: "Creating an x-bar and Six Sigma calculation program with a UI using Tkinter in Python to practice user interface development.",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Sixma-Calculator",
    imageSrc: ComingSoon,
  },
  {
    id: 5,
    title: "Modulo-Calculator",
    description: "Creating a modulo calculation program with a UI using Tkinter in Python to practice user interface development.",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Modulo-Calculator",
    imageSrc: ComingSoon,
  },
  {
    id: 6,
    title: "PHP-Calculator",
    description: "Creating a Calculator use PHP",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Modulo-Calculator",
    imageSrc: ComingSoon,
  },
];

export const Project = () => {
  return (
    <div id="project" className="bg-[#F3F4F6] flex flex-col items-center justify-center py-5 gap-20">
      <h1 className="header-item mt-5">Projects</h1>
      {card.map((item) => (
        <ProjectCard
          key={item.id}
          imageSrc={item.imageSrc}
          altText="Project Image"
          title={item.title}
          description={item.description}
          projectLink={item.projectLink}
          repoLink={item.repoLink}
        />
      ))}
    </div>
  );
};
