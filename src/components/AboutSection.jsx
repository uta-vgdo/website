const AboutSection = () => {
  return (
    <div id="about" className="scroll-mt-24 h-screen text-white px-6">
      {/* Heading */}
      <div className=" text-5xl pb-4 text-tertiary font-bold">About VGDO</div>

      {/* Subtitle */}
      <div className=" text-2xl mt-6 ">
        Guiding the Next Generation of Game Developers
      </div>

      {/* Description */}
      <div className="text-left  mt-6">
        We are dedicated to empowering aspiring game developers and designers by
        providing the knowledge and tools necessary to bring their creative
        visions to life.
        <br />
        <br />
        Our club covers a wide range of game development disciplines, including
        arts and animations, music and sound production, and coding.
        <br />
        <br />
        Through hands-on workshops that explore both well-established and
        emerging software, as well as Art, Music, and Game Jams where members
        engage in friendly competition to create art, music, and games, we
        foster a community of innovation, creativity, and learning!
        <br />
        <br />
        Whether you're a beginner or an experienced developer, VGDO is here to
        support your journey in the world of game design.
      </div>
    </div>
  );
};

export default AboutSection;
