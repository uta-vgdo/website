import gameJamData from "../../constant/gameJamData.json";
import GameTitle from "./GameTitle";

const GameSection = () => {
  return (
    <div className='min-h-screen  text-white'>
      {/* Heading */}
      <div className=' text-5xl pb-4 text-tertiary font-bold'>
        VGDO Game Showcase
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center'>
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
