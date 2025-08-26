import vgdo_logo from "../assets/VGDOSecondary.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-[#1A1717] z-50 border-b-4 border-red-600">
      <img src={vgdo_logo} className="m-2 ml-5 h-10"></img>
      <div className="flex justify-center w-full lg:mr-10">
        <ul className="flex text-[#ffdebe]">
          <li className=" mx-5">
            <a href="#about">About</a>
          </li>
          <li className=" mx-5">
            <a href="#about">Events</a>
          </li>
          <li className=" mx-5">
            <a href="#about">Jams</a>
          </li>
          <li className="mx-5">
            <a href="#about"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
