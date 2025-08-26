import { GameTitle } from "./GameTitle";
import last_lap from "../assets/LastLap.mp4";

export const GameSection = () => {
  return (
    <div className="min-h-screen text-center">
      VGDO Game Showcase
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
        <GameTitle
          title="Last Lap"
          creator="Nnanna - 2nd Place Burnout Jam Winner"
          video_src={last_lap}
        ></GameTitle>
        <GameTitle
          title="Last Lap"
          creator="Nnanna - 2nd Place Burnout Jam Winner"
          video_src={last_lap}
        ></GameTitle>
        <GameTitle
          title="Last Lap"
          creator="Nnanna - 2nd Place Burnout Jam Winner"
          video_src={last_lap}
        ></GameTitle>
        <GameTitle
          title="Last Lap"
          creator="Nnanna - 2nd Place Burnout Jam Winner"
          video_src={last_lap}
        ></GameTitle>
        <GameTitle
          title="Last Lap"
          creator="Nnanna - 2nd Place Burnout Jam Winner"
          video_src={last_lap}
        ></GameTitle>
        <GameTitle
          title="Last Lap"
          creator="Nnanna - 2nd Place Burnout Jam Winner"
          video_src={last_lap}
        ></GameTitle>
        <GameTitle
          title="Last Lap"
          creator="Nnanna - 2nd Place Burnout Jam Winner"
          video_src={last_lap}
        ></GameTitle>
        <GameTitle
          title="Last Lap"
          creator="Nnanna - 2nd Place Burnout Jam Winner"
          video_src={last_lap}
        ></GameTitle>
      </div>
    </div>
  );
};
