import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"
import ScrollSections from "@/components/ScrollSections/ScrollSections";

const cheetahPage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <ScrollSections />
      <Footer />
    </div>
  );
}

export default cheetahPage
