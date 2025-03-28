import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/Hero";
import { StackCards }  from "@/app/components/StackCard";
import { Certificate } from "./components/Certificate";
import Project from "./components/Project";

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
