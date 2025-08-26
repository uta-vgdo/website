//import { useState } from 'react'
import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import GameSection from "./components/GameSection";
import HeroSection from "./components/HeroSection";
import MusicSection from "./components/MusicSection";
import Navbar from "./components/Navbar";
import SocialSection from "./components/SocialSection";

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

      {/* <SocialSection /> */}
      <Footer />
    </>
  );
}

export default App;
