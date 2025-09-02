import gameJamData from "../../constant/gameJamData.json";
import GameTitle from "./GameTitle";

const GameSection = () => {
  return (
    <div
      id="games"
      className="scroll-mt-24 min-h-screen  text-white text-center py-5"
    >
      {/* Heading */}
      <div className=" text-5xl pb-4 text-primary font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        VGDO Game Showcase
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
        {gameJamData.map((game, index) => (
          <GameTitle
            key={index}
            title={game.title}
            creator={game.creator}
            video_src={game.video_src}
          />
        ))}
      </div>
    </div>
  );
};

export default GameSection;
