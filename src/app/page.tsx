import { Header } from "@/app/components/Header/Header";
import { HeroSection } from "@/app/components/Hero/Hero";
import { StackCards }  from "@/app/components/StackCard/StackCard";
import { Certificate } from "./components/Certificate/Certificate";
import { Project } from "@/app/components/Project/Project"
import  TechnologyUse  from "@/app/components/TechnologyUse/TechnologyUse";

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
      </div>
  );
}

export default cheetahPage
