import ComingSoon from "@/app/assets/images/ProjectImage/ComingSoon-image.jpg"
import CertificateCard from "./CertificateCard";
import React from "react";

const card = [
  {
    id: 1,
    title: "Poke bot discord",
    description: "Creating a bot that can replace the missing alarm system on Discord can be done using Python and various libraries, such as `discord.py`, to interact with the Discord API.",
    imageSrc: ComingSoon,
  },
  {
    id: 2,
    title: "Certificate 2",
    description: "Creating a bot that can replace the missing alarm system on Discord can be done using Python and various libraries, such as `discord.py`, to interact with the Discord API.",
    imageSrc: ComingSoon,
  },
];

export const Certificate = () => {
  return (
    <div id="certificate" className="bg-[#F3F4F6] flex flex-col items-center justify-center py-5 gap-20 scroll-mt-9">
      <h1 className="header-item mt-5">Certificate</h1>
      {card.map((item) => (
        <CertificateCard
          key={item.id}
          imageSrc={item.imageSrc}
          altText="certificate Image"
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};