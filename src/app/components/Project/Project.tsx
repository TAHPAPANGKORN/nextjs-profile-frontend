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
    projectLink: "https://discord.com/oauth2/authorize?client_id=1208764608727359601",
    repoLink: "https://github.com/TAHPAPANGKORN/PokeBotDiscord",
    imageSrc: DiscordProject,
  },
  {
    id: 2,
    title: "Profile-web with next.js",
    description: "A personal portfolio website built using next.js technologies.",
    projectLink: "#",
    repoLink: "https://github.com/TAHPAPANGKORN/nextJs-Profile",
    imageSrc: WebNextJs,
  },
  {
    id: 3,
    title: "Web Profile (Old Versions)",
    description: "A personal portfolio website built using modern web technologies.",
    projectLink: "https://papangkorn-profile.pages.dev",
    repoLink: "https://github.com/TAHPAPANGKORN/Papangkorn-Profile",
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
    repoLink: "https://github.com/TAHPAPANGKORN/Website-PHP-Calculator",
    imageSrc: ComingSoon,
  },
  {
    id: 7,
    title: "code-automatic robot",
    description: "Creating for auto line robot",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/automatic-robot-PSP-SCHOOL-for-OBEC",
    imageSrc: ComingSoon,
  },
  {
    id: 8,
    title: "ConnectedWordsGame for Director",
    description: "Creating a code for detect same word",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/ConnectedWordsGameForDirector",
    imageSrc: ComingSoon,
  },
];

export const Project = () => {
  return (
    <div id="projects" className="bg-[#F3F4F6] flex flex-col items-center justify-center py-5 gap-20 scroll-mt-9">
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
