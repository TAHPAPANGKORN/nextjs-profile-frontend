import React from 'react'
import ProjectCard from './ProjectCard';
import DiscordProject from "@/assets/images/ProjectImage/Discord-Project.png";
import WebProfile from "@/assets/images/ProjectImage/Website-Profile.png";
import WebNextJs from "@/assets/images/ProjectImage/Website-Nextjs.png"
import WebSameWordChecker from "@/assets/images/ProjectImage/Connected-Next.png"
import InformaticsCheckShirt from "@/assets/images/ProjectImage/If-Check-Shirt.png"
import InformaticsSchedule from "@/assets/images/ProjectImage/Informatics-Schedule-Viewer.png"
import RealOrFakeGame from "@/assets/images/ProjectImage/Real-Or-Fake.png"
import ComingSoon from "@/assets/images/ProjectImage/ComingSoon-image.jpg"

const card = [
  {
    id: 1,
    title: "Poke bot discord",
    description: "Creating a bot that can replace the missing alarm system on Discord can be done using Python and various libraries, such as `discord.py`, to interact with the Discord API.",
    projectLink: "https://discord.com/oauth2/authorize?client_id=1208764608727359601",
    repoLink: "https://github.com/TAHPAPANGKORN/PokeBotDiscord",
    imageSrc: DiscordProject,
    techStack: ["python"]
  },
  {
    id: 2,
    title: "Profile-web with next.js",
    description: "A personal portfolio website built using next.js technologies.",
    projectLink: "#",
    repoLink: "https://github.com/TAHPAPANGKORN/nextJs-Profile",
    imageSrc: WebNextJs,
    techStack: ["nextjs", "typescript", "tailwind"]
  },
  {
    id: 3,
    title: "Web Profile (Old Versions)",
    description: "A personal portfolio website built using modern web technologies.",
    projectLink: "https://papangkorn-profile.pages.dev",
    repoLink: "https://github.com/TAHPAPANGKORN/Papangkorn-Profile",
    imageSrc: WebProfile,
    techStack: ["html", "css", "javascript"]
  },
  {
    id: 4,
    title: "SameWordChecker",
    description: "Creating a web for detect same word",
    projectLink: "https://connected-word-game.vercel.app/",
    repoLink: "https://github.com/TAHPAPANGKORN/Learn-TypeScript",
    imageSrc: WebSameWordChecker,
    techStack: ["nextjs", "typescript", "tailwind"]
  },
  {
    id: 5,
    title: "Sigma Calculator",
    description: "Creating an x-bar and Six Sigma calculation program with a UI using Tkinter in Python to practice user interface development.",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Sixma-Calculator",
    imageSrc: ComingSoon,
    techStack: ["python"]
  },
  {
    id: 6,
    title: "Modulo Calculator",
    description: "Creating a modulo calculation program with a UI using Tkinter in Python to practice user interface development.",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Modulo-Calculator",
    imageSrc: ComingSoon,
    techStack: ["python"]
  },
  {
    id: 7,
    title: "PHP Calculator",
    description: "Creating a Calculator use PHP",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Website-PHP-Calculator",
    imageSrc: ComingSoon,
    techStack: ["php"]
  },
  {
    id: 8,
    title: "automatic robot",
    description: "Creating for auto line robot",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/automatic-robot-PSP-SCHOOL-for-OBEC",
    imageSrc: ComingSoon,
    techStack: ["arduino"]
  },
  {
    id: 9,
    title: "ConnectedWordsGame",
    description: "Creating a code for detect same word",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/ConnectedWordsGameForDirector",
    imageSrc: ComingSoon,
    techStack: ["nextjs", "tailwind", "typescript"]
  },
  {
    id: 10,
    title: "IF Buu Check Shirt",
    description: "Creating tools for checking shirt for informatics students at Buu",
    projectLink: "https://ifcheckshirt.vercel.app/",
    repoLink: "https://github.com/FTGFLabs/checkShirtForInformatics",
    imageSrc: InformaticsCheckShirt,
    techStack: ["nextjs", "tailwind", "typescript"]
  },
  {
    id: 11,
    title: "IF Schedule Viewer",
    description: "Creating tools for checking schedule for informatics students at Buu",
    projectLink: null,
    repoLink: "https://github.com/FTGFLabs/Informatics-Schedule-Viewer",
    imageSrc: InformaticsSchedule,
    techStack: ["html", "css", "javascript"]
  },
  {
    id: 12,
    title: "Real or Fake Game",
    description: "Collaborating on a game to distinguish real and fake words",
    projectLink: "https://www.realorfake.games/",
    repoLink: "https://github.com/JatenipatChanapisitthi/Real-or-FaKe-game",
    imageSrc: RealOrFakeGame,
    techStack: ["nextjs", "tailwind", "typescript"]
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
          techStack={item.techStack}
        />
      ))}
    </div>
  );
};
