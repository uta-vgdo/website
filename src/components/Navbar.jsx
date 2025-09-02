import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section after navigating to homepage
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("scrollTo");
      setIsOpen(false);
    }
  }, [location.pathname]);

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      // Navigate to homepage first
      sessionStorage.setItem("scrollTo", id);
      navigate("/");
    } else {
      // Already on homepage, scroll directly
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50 px-4 h-16">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src={"/website/assets/VGDOSecondary.png"}
          className="h-10"
          alt="VGDO Logo"
        />
      </div>

      {/* Center: Desktop Menu */}
      <div className="hidden lg:flex justify-right">
        <ul className="flex text-[#505050] font-extrabold">
          <li
            className="mx-5 cursor-pointer text-xl"
            onClick={() => handleScroll("hero")}
          >
            Home
          </li>
          <li
            className="mx-5 cursor-pointer text-xl"
            onClick={() => handleScroll("about")}
          >
            About
          </li>
          <li className="mx-5 text-xl">
            <Link to="/officers">Officers</Link>
          </li>
          <li
            className="mx-5 cursor-pointer text-xl"
            onClick={() => handleScroll("games")}
          >
            Games
          </li>
          <li
            className="mx-5 cursor-pointer text-xl"
            onClick={() => handleScroll("music")}
          >
            Music
          </li>
          <li
            className="mx-5 cursor-pointer text-xl"
            onClick={() => handleScroll("gallery")}
          >
            Art
          </li>
        </ul>
      </div>

      {/* Right: Hamburger (mobile only) */}
      <div className="lg:hidden">
        <button className="text-[#505050]" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full lg:hidden">
          <ul className="flex flex-col items-center text-[#505050] bg-[#F3E7DA] font-extrabold py-4">
            <li
              className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center"
              onClick={() => handleScroll("hero")}
            >
              Home
            </li>
            <li
              className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center"
              onClick={() => handleScroll("about")}
            >
              About
            </li>
            <li
              className="py-2 hover:bg-[#11151a] w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/officers">Officers</Link>
            </li>
            <li
              className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center"
              onClick={() => handleScroll("games")}
            >
              Games
            </li>
            <li
              className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center"
              onClick={() => handleScroll("music")}
            >
              Music
            </li>
            <li
              className="py-2 cursor-pointer hover:bg-[#11151a] w-full text-center"
              onClick={() => handleScroll("gallery")}
            >
              Art
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
