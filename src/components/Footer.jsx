import vgdo_logo from "../assets/VGDOSecondary.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faD } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="flex w-full mt-auto items-center bg-[rgb(26,23,23)] z-50 border-t-4 border-red-600 py-10">
      <div className="flex flex-col items-center w-full lg:mr-10 text-white">
        <ul className="flex">
          <li className=" mx-5">
            <a href="#about">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2xl"
                className="hover:text-red-500"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className=" mx-5">
            <a href="#about">
              <FontAwesomeIcon
                icon={faYoutube}
                size="2xl"
                className="hover:text-red-500"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className=" mx-5">
            <a href="#about">
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                className="hover:text-red-500"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className=" mx-5">
            <a href="#about">
              <FontAwesomeIcon
                icon={faDiscord}
                size="2xl"
                className="hover:text-red-500"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
        <p className="text-center pt-2">
          vgdo.uta@gmail.com
          <br></br>
          @Copyright 2025 | Made by Video Game Developers Organization Officers
          at UTA
        </p>
      </div>
    </footer>
  );
};
