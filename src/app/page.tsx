import { Header } from "@/app/components/Header/Header";
import { HeroSection } from "@/app/components/Hero/Hero";
import { StackCards }  from "@/app/components/StackCard/StackCard";
import { Certificate } from "./components/Certificate/Certificate";
import { Project } from "@/app/components/Project/Project"
import  TechnologyUse  from "@/app/components/TechnologyUse/TechnologyUse";
import Contact from "@/app/components/Contact/Contact"
import Footer from "@/app/components/Footer/Footer"

export const runtime = 'edge';

const cheetahPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <StackCards />
      <Certificate />
      <TechnologyUse />
      <Project />
      <Contact />
      <Footer />
      </div>
  );
}

export default cheetahPage
