import { StaticImageData } from "next/image";
import DiscordProject from "@/assets/images/ProjectImage/Discord-Project.png";
import WebProfile from "@/assets/images/ProjectImage/Website-Profile.png";
import WebNextJs from "@/assets/images/ProjectImage/Website-Nextjs2.png"
import WebSameWordChecker from "@/assets/images/ProjectImage/Connected-Next.png"
import InformaticsCheckShirt from "@/assets/images/ProjectImage/If-Check-Shirt.png"
import InformaticsSchedule from "@/assets/images/ProjectImage/Informatics-Schedule-Viewer.png"
import RealOrFakeGame from "@/assets/images/ProjectImage/Real-Or-Fake.png"
import ExamSync from "@/assets/images/ProjectImage/Website-ExamSync.png"
import Gear from "@/assets/images/ProjectImage/Website-Gear.png"
import POSSystem from "@/assets/images/ProjectImage/Website-POS.png"
import ComingSoon from "@/assets/images/ProjectImage/ComingSoon-image.jpg"

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  projectLink: string | null;
  repoLink: string;
  backendRepoLink?: string;
  imageSrc: StaticImageData;
  techStack: string[];
}

export const projects: ProjectItem[] = [
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
    title: "Show My Gear",
    description: "Website to show my gear",
    projectLink: "https://gear.papangkorn.info",
    repoLink: "https://github.com/TAHPAPANGKORN/personal-hub-vibe-coded",
    imageSrc: Gear,
    techStack: ["nextjs", "tailwind", "typescript", "supabase", "moralis"]
  },
  {
    id: 4,
    title: "Web Profile (Old Versions)",
    description: "A personal portfolio website built using modern web technologies.",
    projectLink: "https://papangkorn-profile.pages.dev",
    repoLink: "https://github.com/TAHPAPANGKORN/Papangkorn-Profile",
    imageSrc: WebProfile,
    techStack: ["html", "css", "javascript"]
  },
  {
    id: 5,
    title: "IF Buu Check Shirt",
    description: "Creating tools for checking shirt for informatics students at Buu",
    projectLink: "https://ifcheckshirt.vercel.app/",
    repoLink: "https://github.com/FTGFLabs/checkShirtForInformatics",
    imageSrc: InformaticsCheckShirt,
    techStack: ["nextjs", "tailwind", "typescript"]
  },
  {
    id: 6,
    title: "IF Schedule Viewer",
    description: "Creating tools for checking schedule for informatics students at Buu",
    projectLink: null,
    repoLink: "https://github.com/FTGFLabs/Informatics-Schedule-Viewer",
    imageSrc: InformaticsSchedule,
    techStack: ["html", "css", "javascript"]
  },
  {
    id: 7,
    title: "Real or Fake Game",
    description: "Collaborating on a game to distinguish real and fake words",
    projectLink: "https://www.realorfake.games/",
    repoLink: "https://github.com/JatenipatChanapisitthi/Real-or-FaKe-game",
    imageSrc: RealOrFakeGame,
    techStack: ["nextjs", "tailwind", "typescript"]
  },
  {
    id: 8,
    title: "IFExamSync",
    description: "This project is designed to fetch data from the website sms.informatics.buu.ac.th and integrate it into Apple Calendar",
    projectLink: "https://ifexamsync.vercel.app",
    repoLink: "https://github.com/TAHPAPANGKORN/sms-informatics-buu-auto-update-calendar",
    imageSrc: ExamSync,
    techStack: ["html", "css", "javascript", "python"]
  },
  {
    id: 9,
    title: "POS System",
    description: "This Project form cs buu bootcamp",
    projectLink: "https://pos.softwarecrafter.papangkorn.info",
    repoLink: "https://gitlab.com/softwarecrafter1/BootCamp-Frontend",
    backendRepoLink: "https://gitlab.com/softwarecrafter1/BootCamp-Backend",
    imageSrc: POSSystem,
    techStack: ["vue", "quasar", "typescript", "pinia", "nestjs"]
  },
    {
    id: 10,
    title: "SameWordChecker",
    description: "Creating a web for detect same word",
    projectLink: "https://connected-word-game.vercel.app/",
    repoLink: "https://github.com/TAHPAPANGKORN/Learn-TypeScript",
    imageSrc: WebSameWordChecker,
    techStack: ["nextjs", "typescript", "tailwind"]
  },
  {
    id: 11,
    title: "Sigma Calculator",
    description: "Creating an x-bar and Six Sigma calculation program with a UI using Tkinter in Python to practice user interface development.",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Sixma-Calculator",
    imageSrc: ComingSoon,
    techStack: ["python"]
  },
  {
    id: 12,
    title: "Modulo Calculator",
    description: "Creating a modulo calculation program with a UI using Tkinter in Python to practice user interface development.",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Modulo-Calculator",
    imageSrc: ComingSoon,
    techStack: ["python"]
  },
  {
    id: 13,
    title: "PHP Calculator",
    description: "Creating a Calculator use PHP",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/Website-PHP-Calculator",
    imageSrc: ComingSoon,
    techStack: ["php"]
  },
  {
    id: 14,
    title: "automatic robot",
    description: "Creating for auto line robot",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/automatic-robot-PSP-SCHOOL-for-OBEC",
    imageSrc: ComingSoon,
    techStack: ["arduino"]
  },
  {
    id: 15,
    title: "ConnectedWordsGame",
    description: "Creating a code for detect same word",
    projectLink: null,
    repoLink: "https://github.com/TAHPAPANGKORN/ConnectedWordsGameForDirector",
    imageSrc: ComingSoon,
    techStack: ["python"]
  }
];
