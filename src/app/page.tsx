import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/Hero/Hero";
import { StackCards }  from "@/components/StackCard/StackCard";
import  { Certificate } from "@/components/Certificate/Certificate";
import { Project } from "@/components/Project/Project"
import  TechnologyUse  from "@/components/TechnologyUse/TechnologyUse";
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"

export const runtime = 'edge';

const cheetahPage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <StackCards />
      <TechnologyUse />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
      </div>
  );
}

export default cheetahPage
