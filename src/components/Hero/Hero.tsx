"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import BtnHero from './BtnHero';
import Squares from '@/components/Animations/AnimatedContent/AnimatedContent';
import ScrambledText from '@/components/Animations/AnimatedContent/AnimatedFont';

export const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="home"
      className="relative z-1 overflow-x-clip min-h-screen flex flex-col items-center justify-center bg-gray-200"
    >
      {/* Squares as background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#"
        />
      </div>
      {/* Main content */}
      <div className="flex flex-col justify-center items-center mx-20 md:mx-40">
        <h1 className="text-4xl font-bold md:text-5xl text-center mt-8 tracking-wide">
          <TypeAnimation
            sequence={[
              "Hi, I am Papangkorn",
              3000,
              "Hi, I am Cheetah",
              2000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </h1>
        <ScrambledText
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
          className='mt-4 text-center text-black'
        >
            I am currently a Computer Science major with a strong interest in
            programming, software development, and problem-solving. I enjoy
            learning about new technologies and improving my coding skills. My
            goal is to apply my knowledge to real-world applications and
            contribute to innovative projects in the tech industry.
        </ScrambledText>
      </div>
      <BtnHero />
    </div>
  );
}

export default HeroSection
