import React from "react";
import vgdo_mascot from "../../public/assets/VGDOpanda.png";

const HeroSection = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex justify-center text-5xl mt-25'>
        Video Game Developers Organization at UTA
      </div>
      <div className='flex justify-center text-4xl text-red-500'>
        Welcome to VGDO!
      </div>

      <img src={vgdo_mascot}></img>

      <div className='flex justify-center text-4xl text-red-500'>
        Meeting: TBA
      </div>
    </div>
  );
};

export default HeroSection;
