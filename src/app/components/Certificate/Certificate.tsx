import ComingSoon from "@/app/assets/images/ProjectImage/ComingSoon-image.jpg"
import ChatGpt from "@/app/assets/images/CertificateImage/chatgpt.jpg"
import DoBot from "@/app/assets/images/CertificateImage/Dobot.jpg"
import CertificateCard from "./CertificateCard";
import React from "react";

const card = [
  {
    id: 1,
    title: "ChatGPT Competitive",
    description: "At Burapha 1st place",
    imageSrc: ChatGpt,
  },
  {
    id: 2,
    title: "Dobot Competitive",
    description: "At Burapha 2nd place",
    imageSrc: DoBot,
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