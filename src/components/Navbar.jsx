import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50 border-b-4 bg-[#161f28] border-[#B03626] px-4 h-16">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src={"/website/assets/VGDOSecondary.png"}
          className="h-10"
          alt="VGDO Logo"
        />
      </div>

      {/* Center: Desktop Menu (absolute center) */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex text-[#ffdebe]">
          <li className="mx-5 cursor-pointer text-xl" onClick={() => handleScroll("hero")}>Home</li>
          <li className="mx-5 cursor-pointer text-xl" onClick={() => handleScroll("about")}>About</li>
          <li className="mx-5 cursor-pointer text-xl" onClick={() => handleScroll("games")}>Games</li>
          <li className="mx-5 cursor-pointer text-xl" onClick={() => handleScroll("music")}>Music</li>
          <li className="mx-5 cursor-pointer text-xl" onClick={() => handleScroll("gallery")}>Art</li>
        </ul>
      </div>

      {/* Right: Hamburger (mobile only) */}
      <div className="lg:hidden">
        <button
          className="text-[#ffdebe]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#161f28] border-b-4 border-[#B03626] lg:hidden">
          <ul className="flex flex-col items-center text-[#ffdebe] py-4">
            <li className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center" onClick={() => handleScroll("hero")}>Home</li>
            <li className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center" onClick={() => handleScroll("about")}>About</li>
            <li className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center" onClick={() => handleScroll("games")}>Games</li>
            <li className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center" onClick={() => handleScroll("music")}>Music</li>
            <li className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center" onClick={() => handleScroll("gallery")}>Art</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
