"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import BtnHero from './BtnHero';

export const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="hero"
      className="relative z-0 overflow-x-clip h-[100vh] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center mx-20 md:mx-40">
        <h1 className="text-3xl md:text-5xl text-center mt-8 tracking-wide">
          <TypeAnimation
            sequence={[
              "Hi, I am Papangkorn",
              3000, 
              "Hi, I am study in com-sci",
              2000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-4 text-center">
          I am currently a Computer Science major with a strong interest in
          programming, software development, and problem-solving. I enjoy
          learning about new technologies and improving my coding skills. My
          goal is to apply my knowledge to real-world applications and
          contribute to innovative projects in the tech industry.
        </p>
      </div>
      <BtnHero />
    </div>
  );
}

export default HeroSection
