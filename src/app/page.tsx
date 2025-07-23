import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/Hero/Hero";
import { Project } from "@/components/Project/Project"
import  TechnologyUse  from "@/components/TechnologyUse/TechnologyUse";
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"
import AboutMe from "@/components/AboutMe/AboutMe";

// export const runtime = 'edge';

const cheetahPage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <AboutMe />
      <TechnologyUse />
      <Project />
      <Contact />
      <Footer />
      </div>
  );
}

export default cheetahPage
