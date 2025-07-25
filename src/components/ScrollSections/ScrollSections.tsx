'use client';
import { HeroSection } from "@/components/Hero/Hero";
import { Project } from "@/components/Project/Project";
import TechnologyUse from "@/components/TechnologyUse/TechnologyUse";
import Contact from "@/components/Contact/Contact";
import AboutMe from "@/components/AboutMe/AboutMe";
import { Element } from "react-scroll";

const ScrollSections = () => {
  return (
    <div className="overflow-hidden">
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="technology">
        <TechnologyUse />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};
export default ScrollSections;
