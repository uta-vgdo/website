//import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import vgdo_mascot from './assets/VGDOpanda.png'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='h-screen'>
        <div className='flex justify-center text-5xl mt-25'>
          Video Game Developers Organization at UTA
        </div>
        <div className='flex justify-center text-4xl text-red-500'>
          Welcome to VGDO!
        </div>

        <img src={vgdo_mascot}></img>

        <div className='flex justify-center text-4xl text-red-500'>
          Meeting: TBA
        </div>
      </div>

      <div className='flex justify-center gap-90 h-screen'>
        <div>
          About VGDO        
        </div>
        <div>
          <div>
            Guiding the Next Generation of Game Developers
          </div>
          <div className='text-left'>
            The Video Game Developers Organization (VGDO) is dedicated to empowering aspiring game developers and designers by providing the knowledge and tools necessary to bring their creative visions to life.

            Our club covers a wide range of game development disciplines, including arts and animations, music and sound production, and coding.

            Through hands-on workshops that explore both well-established and emerging software, as well as Art, Music, and Game Jams where members engage in friendly competition to create art, music, and games, we foster a community of innovation, creativity, and learning.

            Whether you're a beginner or an experienced developer, VGDO is here to support your journey in the world of game design. 
          </div>
        </div>
      </div>

      <div className='h-screen flex justify-center'>
        VGDO Game Showcase
      </div>

      <div className='h-screen justify-center'>
        VGDO Soundtracks Showcase

        <div className='flex justify-center'>
          <iframe
            width="50%"
            height="166"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/vgdo-music-jam-2024-drifting&color=%231a1717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&sharing=false&show_playcount=false"
          />
        </div>

      </div>

      <div className='h-screen flex justify-center'>
        VGDO Gallery
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
