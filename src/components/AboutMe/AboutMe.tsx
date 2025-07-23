import Image from "next/image";
import cheetahPic from "@/assets/images/AboutMeImage/cheetah.jpg";
import { EducationTimeline } from "./TimeLine/EducationTimeLine";
import Tag from "@/components/AboutMe/Tag/Tag";
const education = [
  {
    title: "Pho",
    date: "2006-2100",
    description: "Lorem ipsum dolor sit amet, consectetur ",
  },
  {
    title: "Pho",
    date: "2006-2100",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const tags =[
    "Game",
    "Eat",
    "Coding",
    "Tech"
];
const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center  p-4 space-y-4 md:space-y-20 ">
      <h1 className="header-item">AboutMe</h1>

      <div className="max-w-240">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-3">
            <Image
              src={cheetahPic}
              width={320}
              height={300}
              alt="cheetah student uniform"
              className="rounded-lg w-90 md:w-270"
            />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Thing Me In Luv</h2>
            <div className="flex gap-5">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                soluta exercitationem laudantium voluptatem esse, quas autem
                nulla eius, velit repellat magni fugiat enim vero vitae,
                eligendi dolorum minus! Ea, magni.
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
