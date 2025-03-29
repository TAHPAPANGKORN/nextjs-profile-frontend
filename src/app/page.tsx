import { Header } from "@/app/components/Header/Header";
import { HeroSection } from "@/app/components/Hero/Hero";
import { StackCards }  from "@/app/components/StackCard/StackCard";
import { Certificate } from "./components/Certificate/Certificate";
import Project from "./components/Project/Project";

export const runtime = 'edge';

const cheetahPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <StackCards />
      <Certificate />
      <Project />
      </div>
  );
}

export default cheetahPage
