import Link from "next/link";

export const Header = () => {
  return (
  <div className="flex space-x-10 justify-center items-center fixed top-3 w-full z-10 ">
    <h1 className="hidden md:block font-semibold">Papangkorn Pitjawong</h1>
    <nav className="flex gap-1 p-0.5 border border-black/10 rounded-full bg-white/10 backdrop-blur">
      <a  href="#" className="nav-item">Home</a>
      <Link  href="#about" className="nav-item">About</Link>
      <Link  href="#certificate" className="nav-item">Certificate</Link>
      <Link  href="#projects" className="nav-item">Projects</Link>
      {/* <Link  href="https://github.com/TAHPAPANGKORN" target="_blank" className="nav-item">GitHub</Link> */}
      <Link  href="#" className="nav-item bg-gray-900 text-white hover:bg-black/50 hover:text-white-900">Contacts</Link>
    </nav>
  </div>
  );
};

