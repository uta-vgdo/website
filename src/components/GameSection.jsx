import gameJamData from "../../constant/gameJamData.json";
import GameTitle from "./GameTitle";

const GameSection = () => {
  return (
    <div className='min-h-screen text-center text-white'>
      VGDO Game Showcase
      <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center'>
        {gameJamData.map((game) => (
          <GameTitle
            key={game.id}
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
