import ChatGpt from "@/app/assets/images/CertificateImage/chatgpt.jpg"
import DoBot from "@/app/assets/images/CertificateImage/Dobot.jpg"
import Boat from "@/app/assets/images/CertificateImage/boat.jpg"
import art701 from "@/app/assets/images/CertificateImage/art701st.jpg"
import art70g from "@/app/assets/images/CertificateImage/art70gold.jpg"
import webot from "@/app/assets/images/CertificateImage/webot.jpg"
import art712 from "@/app/assets/images/CertificateImage/art712nd.jpg"
import art713 from "@/app/assets/images/CertificateImage/art713rd.jpg"

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
  {
    id: 3,
    title: "Build Boat Competitive",
    description: "At Burapha 3rd place",
    imageSrc: Boat,
  },
  {
    id: 4,
    title: "Automatic Robot Competitive",
    description: "At Chonburi 1st place",
    imageSrc: art701,
  },
  {
    id: 5,
    title: "Automatic Robot National Competitive",
    description: "At Ratchaburi Gold medal",
    imageSrc: art70g,
  },
  {
    id: 6,
    title: "Webot Competitive",
    description: "Online Gold medal",
    imageSrc: webot,
  },
  {
    id: 7,
    title: "Automatic Robot Competitive",
    description: "At Chonburi 2nd place",
    imageSrc: art712,
  },
  {
    id: 8,
    title: "Automatic Robot Competitive",
    description: "At Chonburi 3rd place",
    imageSrc: art713,
  },
];

export const Certificate = () => {
  return (
    <div id="certificate" className="bg-[#F3F4F6] flex flex-col items-center justify-center py-10 gap-20 scroll-mt-9">
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