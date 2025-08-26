//import { useState } from 'react'
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { GameSection } from "./components/GameSection";
import { MusicSection } from "./components/MusicSection";
import { GallerySection } from "./components/GallerySection";
import vgdo_mascot from "./assets/VGDOpanda.png";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <GameSection />
        <MusicSection />
        <GallerySection />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
