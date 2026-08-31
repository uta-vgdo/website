import React from "react";
import FadeIn from "./FadeIn";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex flex-col justify-center px-6 text-center"
    >
      <div className="relative lg:flex lg:justify-center lg:items-center mt-15 lg:mt-0">
        <div>
          {/* Main Heading */}
          <h1 className="text-[#505050] text-7xl md:text-7xl font-bold mt-4 mb-4">
            Welcome to the Video Game <br></br>Developers Organization at UTA
          </h1>

          <div className="flex flex-col items-center">
            {/* Hero Image */}
            <img
              src="/website/assets/VGDOpanda.png"
              alt="VGDO Panda Logo"
              className="hero-image w-80 md:w-[448px] mb-8 rounded-xl"
            />
            {/* Info Text */}
            <p className="text-[#505050] font-bold text-xl md:text-4xl mb-8">
              Meetings: Wednesdays 5 PM - 7 PM <p>Location: TBD</p>
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 ">
              {/* Outline Button - Refined with Border and Shadow */}
              <a
                href="#more-info"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hero-button px-16 py-4 text-2xl rounded-xl font-bold text-[#505050] border-2 border-gray-300 bg-white shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:scale-95 text-center"
              >
                More Info
              </a>

              {/* Solid Button - The Primary Action */}
              <a
                href="https://discord.gg/k5cgBEStQj"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button px-16 py-4 text-2xl rounded-xl font-bold text-white bg-primary shadow-lg shadow-primary/30 transition-all duration-200 hover:bg-secondary hover:-translate-y-1 hover:shadow-xl active:scale-95 text-center"
              >
                Join Now!
              </a>
            </div>
          </div>
        </div>
        <FadeIn>
          <img
            src="/website/sketch_panda.png"
            className="h-auto w-96 lg:w-100 lg:ml-25"
          ></img>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
