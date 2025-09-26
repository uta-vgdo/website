import { Routes, Route, Navigate } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import GameSection from "./components/GameSection";
import HeroSection from "./components/HeroSection";
import MusicSection from "./components/MusicSection";
import OfficerSection from "./components/OfficerSection";
import Navbar from "./components/Navbar";
import EventsSection from "./components/EventsSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <EventsSection /> */}
      <AboutSection />
      <GameSection />
      <MusicSection />
      <GallerySection />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/website/' element={<HomePage />} />
        <Route path='/officers' element={<OfficerSection />} />
        <Route path='*' element={<Navigate to='/website/' replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
