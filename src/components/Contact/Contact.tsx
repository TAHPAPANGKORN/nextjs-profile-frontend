import ContactCard from "./ContactCard";
import GetInTouch from "./GetInTouch";


export default function Timeline() {
  return (
    <div id="contact" className="flex flex-col items-center pt-10 md:py-10 w-auto bg-gradient-to-b from-white to-gray-200">
      <h1 className="hidden md:block header-item mt-10 mb-6">Get In Touch</h1>
      <GetInTouch />
    </div>
  );
}