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

import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { GameSection } from "./components/GameSection";
import { MusicSection } from "./components/MusicSection";
import { GallerySection } from "./components/GallerySection";
import vgdo_mascot from "./assets/VGDOpanda.png";

function App() {
  return (
    <>
      <Navbar />

      <div className='overflow-x-hidden'>
        <HeroSection />
        <AboutSection />
        <GameSection />
        <MusicSection />
        <GallerySection />
      </div>

      <SocialSection />
      <Footer />
    </>
  );
}

export default App;
