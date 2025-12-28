
import React, { useState } from 'react';
import Header from './components/Header';
import FlirtyButtons from './components/FlirtyButtons';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import BackgroundAnimations from './components/BackgroundAnimations';
import MusicPlayer from './components/MusicPlayer';
import type { Heart } from './types';

const App: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const addHeart = () => {
    const newHeart: Heart = {
      id: Date.now(),
      x: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 5 + 5,
    };
    setHearts(prevHearts => [...prevHearts, newHeart]);
    setTimeout(() => {
      setHearts(prevHearts => prevHearts.filter(h => h.id !== newHeart.id));
    }, newHeart.duration * 1000);
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 min-h-screen text-red-800 antialiased overflow-x-hidden">
      <BackgroundAnimations hearts={hearts} />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Header />
        <FlirtyButtons onButtonClick={addHeart} />

        <div className="text-center my-12">
          <p className="text-xl md:text-2xl italic text-red-700/80">
            "Babay Click gara na I have some tiny messeges for you "
          </p>
        </div>

        <PhotoGallery />

        <div className="text-center my-12">
          <p className="text-xl md:text-2xl italic text-red-700/80">
            " Meri "Thuski" You will always be the best thing happend to me "
          </p>
        </div>
        
        <LoveLetter />

      </main>
      
      <footer className="text-center py-8 text-red-800/70">
        <p>This was a small token of love my sweet Girl</p>
        <p>Your  Poor Sujal</p>
      </footer>

      <MusicPlayer />
    </div>
  );
};

export default App;
