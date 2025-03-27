import { Header } from "@/app/component/Header";
import { HeroSection } from "@/app/component/Hero";
import { StackCards }  from "@/app/component/StackCard";

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
