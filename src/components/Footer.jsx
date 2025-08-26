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
    <footer className='flex w-full mt-auto items-center z-50 border-t-4 bg-[#161f28] border-[#B03626] py-10'>
      <div className='flex flex-col items-center w-full lg:mr-10 text-white'>
        <ul className='flex'>
          <li className=' mx-5'>
            <a
              href='https://www.instagram.com/vgdo.uta/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size='2xl'
                className='hover:text-red-500'
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className=' mx-5'>
            <a
              href='https://www.youtube.com/channel/UCrrzkBBPpxTtxKLyEsx5_UA'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size='2xl'
                className='hover:text-red-500'
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className=' mx-5'>
            <a
              href='https://github.com/uta-vgdo'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faGithub}
                size='2xl'
                className='hover:text-red-500'
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className=' mx-5'>
            <a
              href='https://discord.gg/k5cgBEStQj'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faDiscord}
                size='2xl'
                className='hover:text-red-500'
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
        <p className='text-center pt-2'>
          <a href='mailto:vgdo.uta@gmail.com' className='hover:text-red-500'>
            vgdo.uta@gmail.com
          </a>
          <br></br>
          @Copyright 2025 | Made by Video Game Developers Organization Officers
          at UTA
        </p>
      </div>
    </footer>
  );
};
