//import { useState } from 'react'
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GameTitle } from "./components/GameTitle";
import { MusicArtist } from "./components/MusicArtist";
import { ArtPiece } from "./components/ArtPiece";
import vgdo_mascot from "../public/assets/VGDOpanda.png";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import gameJamData from "../constant/gameJamData.json";
import SocialSection from "./components/SocialSection";

function App() {
  return (
    <>
      <Navbar />

      <div className='overflow-x-hidden'>
        <HeroSection />
        <AboutSection />

        <div className='min-h-screen text-center'>
          VGDO Game Showcase
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

        <div className='min-h-screen'>
          VGDO Soundtracks Showcase
          <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center items-start'>
            <MusicArtist
              title='cavity.'
              creator='orijinl - 1st Place Drifting Away Jam Winner'
              soundcloud_links={[
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
              ]}
            />

            <MusicArtist
              title='cavity.'
              creator='orijinl - 1st Place Drifting Away Jam Winner'
              soundcloud_links={[
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
              ]}
            />

            <MusicArtist
              title='cavity.'
              creator='orijinl - 1st Place Drifting Away Jam Winner'
              soundcloud_links={[
                "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false",
              ]}
            />
          </div>
        </div>

        <div className='min-h-screen justify-center'>
          VGDO Art Gallery
          <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center items-start'>
            <ArtPiece
              title='Elevator Going Down'
              creator='Jamie - 1st Place Between Worlds Jam Winner'
              img_src={vgdo_mascot}
            />
            <ArtPiece
              title='Elevator Going Down'
              creator='Jamie - 1st Place Between Worlds Jam Winner'
              img_src={vgdo_mascot}
            />
            <ArtPiece
              title='Elevator Going Down'
              creator='Jamie - 1st Place Between Worlds Jam Winner'
              img_src={vgdo_mascot}
            />
            <ArtPiece
              title='Elevator Going Down'
              creator='Jamie - 1st Place Between Worlds Jam Winner'
              img_src={vgdo_mascot}
            />
            <ArtPiece
              title='Elevator Going Down'
              creator='Jamie - 1st Place Between Worlds Jam Winner'
              img_src={vgdo_mascot}
            />
          </div>
        </div>
      </div>

      <SocialSection />
      <Footer />
    </>
  );
}

export default App;
