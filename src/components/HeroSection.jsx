import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex flex-col justify-center px-6 text-center"
    >
      <div className="relative lg:flex mt-20 lg:justify-center lg:items-center">
        <div>
          {/* Main Heading */}
          <h1 className="text-[#505050] text-5xl md:text-6xl font-bold mt-4 mb-4">
            Welcome to the Video Game <br></br>Developers Organization at UTA
          </h1>

          <div className="flex flex-col items-center">
            {/* Hero Image */}
            <img
              src="/website/assets/VGDOpanda.png"
              alt="VGDO Panda Logo"
              className="hero-image w-64 md:w-96 mb-8 rounded-xl"
            />
            {/* Info Text */}
            <p className="text-white text-xl md:text-2xl mb-8">Meetings: TBA</p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Outline Button */}
              <a
                href="#more-info"
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hero-button px-6 py-3 rounded-2xl font-semibold text-white border-2 border-white hover:bg-white hover:text-[#161F28]"
              >
                More Info
              </a>

              {/* Solid Button */}
              <a
                href="https://discord.gg/k5cgBEStQj"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button px-6 py-3 rounded-2xl font-semibold text-white bg-red-500 hover:bg-red-600"
              >
                Join Now!
              </a>
            </div>
          </div>
        </div>
        <img
          src="/website/sketch_panda.png"
          className="h-auto w-auto lg:ml-50"
        ></img>
      </div>
    </section>
  );
};

export default HeroSection;
