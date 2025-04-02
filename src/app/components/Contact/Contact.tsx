import ContactCard from "./ContactCard";


export default function Timeline() {
  return (
    <div id="contact" className="flex flex-col items-center py-10 w-auto bg-gradient-to-b from-white to-gray-200">
      <h1 className="header-item mt-10">Contact me</h1>
      <ContactCard />
    </div>
  );
}