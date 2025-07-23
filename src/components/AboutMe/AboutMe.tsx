import Image from "next/image";
import cheetahPic from "@/assets/images/AboutMeImage/cheetah.jpg";
import { EducationTimeline } from "./TimeLine/EducationTimeLine";
import Tag from "@/components/AboutMe/Tag/Tag";
const education = [
  {
    title: "Burapha University",
    date: "2014 - Present",
    description: "computerScience major",
  },
  {
    title: "Phothisamphanphitthayakhan School",
    date: "2018 - 2023",
    description: "ScienceMathematicComputer major",
  },
];

const tags =[
    "Game",
    "Eat",
    "Coding",
    "Technology",
];
const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center  p-10 space-y-4 md:space-y-20 ">
      <h1 className="header-item">AboutMe</h1>
      <div className="max-w-240 ">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-3 lg:max-w-80">
            <Image
              src={cheetahPic}
              alt="cheetah student uniform"
              className="rounded-lg w-full md:w-130"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Thing Me In Luv</h2>
                <div className="flex flex-row flex-nowrap gap-3 overflow-x-auto scrollbar-hide ml-3">
                  {tags.map((label, index) => (
                    <Tag key={index} label={label} />
                  ))}                  
                </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-1">
              <h2 className="font-bold text-3xl">Papangkorn Pitjawong</h2>
              <h3 className="text-blue-500 font-bold">
                Call Me Cheetah || Tah
              </h3>
              <p>
                I love technology. It keeps changing the world and making life
                easier. Learning about new tools and innovations always excites
                me.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-500">Motto</h2>
              <p>Empowering Possibilities Through Innovation</p>
            </div>

            <EducationTimeline education={education} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
