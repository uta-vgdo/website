import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section min-h-screen bg-[#161F28] flex flex-col justify-center items-center px-6 text-center">
      {/* Main Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
        Video Game Developers Organization at UTA
      </h1>

      {/* Subheading */}
      <p className="text-red-500 text-2xl md:text-3xl mb-8">Welcome to VGDO!</p>

      {/* Hero Image */}
      <img
        src="/website/assets/VGDOpanda.png"
        alt="VGDO Panda Logo"
        className="hero-image w-64 md:w-96 mb-8 rounded-xl shadow-lg"
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
    </section>
  );
};

export default HeroSection;
