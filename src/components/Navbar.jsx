const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center z-50 border-b-4 bg-[#161f28] border-[#B03626]">
      <img
        src={"/website/assets/VGDOSecondary.png"}
        className="m-2 ml-5 h-10"
      ></img>
      <div className="flex justify-center w-full lg:mr-10">
        <ul className="flex text-[#ffdebe]">
          <li className=" mx-5">
            <a
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer"
            >
              About
            </a>
          </li>
          <li className=" mx-5">
            <a
              onClick={() =>
                document
                  .getElementById("games")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer"
            >
              Games
            </a>
          </li>
          <li className=" mx-5">
            <a
              onClick={() =>
                document
                  .getElementById("music")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer"
            >
              Music
            </a>
          </li>
          <li className="mx-5">
            <a
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer"
            >
              Art
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
