import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/Hero";
import { StackCards }  from "@/app/components/StackCard";

export const runtime = 'edge';

const cheetahPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <StackCards />
      </div>
  );
}

export default cheetahPage
