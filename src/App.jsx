//import { useState } from 'react'
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GameTitle } from "./components/GameTitle";
import { MusicArtist } from "./components/MusicArtist";
import { ArtPiece } from "./components/ArtPiece";
import vgdo_mascot from "./assets/VGDOpanda.png";
import last_lap from "./assets/LastLap.mp4";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="overflow-x-hidden">
        <div className="min-h-screen">
          <div className="flex justify-center text-5xl mt-25">
            Video Game Developers Organization at UTA
          </div>
          <div className="flex justify-center text-4xl text-red-500">
            Welcome to VGDO!
          </div>

          <img src={vgdo_mascot}></img>

          <div className="flex justify-center text-4xl text-red-500">
            Meeting: TBA
          </div>
        </div>

        <div className="flex justify-center gap-90 min-h-screen">
          <div>About VGDO</div>
          <div>
            <div>Guiding the Next Generation of Game Developers</div>
            <div className="text-left">
              The Video Game Developers Organization (VGDO) is dedicated to
              empowering aspiring game developers and designers by providing the
              knowledge and tools necessary to bring their creative visions to
              life. Our club covers a wide range of game development
              disciplines, including arts and animations, music and sound
              production, and coding. Through hands-on workshops that explore
              both well-established and emerging software, as well as Art,
              Music, and Game Jams where members engage in friendly competition
              to create art, music, and games, we foster a community of
              innovation, creativity, and learning. Whether you're a beginner or
              an experienced developer, VGDO is here to support your journey in
              the world of game design.
            </div>
          </div>
        </div>

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

        <div className="min-h-screen">
          VGDO Soundtracks Showcase
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center items-start">
            <MusicArtist
              title="cavity."
              creator="orijinl - 1st Place Drifting Away Jam Winner"
              soundcloud_links={[
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
              ]}
            ></MusicArtist>

            <MusicArtist
              title="cavity."
              creator="orijinl - 1st Place Drifting Away Jam Winner"
              soundcloud_links={[
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
              ]}
            ></MusicArtist>

            <MusicArtist
              title="cavity."
              creator="orijinl - 1st Place Drifting Away Jam Winner"
              soundcloud_links={[
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
              ]}
            ></MusicArtist>
          </div>
        </div>

        <div className="min-h-screen justify-center">
          VGDO Art Gallery
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center items-start">
            <ArtPiece
              title="Elevator Going Down"
              creator="Jamie - 1st Place Between Worlds Jam Winner"
              img_src={vgdo_mascot}
            ></ArtPiece>
            <ArtPiece
              title="Elevator Going Down"
              creator="Jamie - 1st Place Between Worlds Jam Winner"
              img_src={vgdo_mascot}
            ></ArtPiece>
            <ArtPiece
              title="Elevator Going Down"
              creator="Jamie - 1st Place Between Worlds Jam Winner"
              img_src={vgdo_mascot}
            ></ArtPiece>
            <ArtPiece
              title="Elevator Going Down"
              creator="Jamie - 1st Place Between Worlds Jam Winner"
              img_src={vgdo_mascot}
            ></ArtPiece>
            <ArtPiece
              title="Elevator Going Down"
              creator="Jamie - 1st Place Between Worlds Jam Winner"
              img_src={vgdo_mascot}
            ></ArtPiece>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
