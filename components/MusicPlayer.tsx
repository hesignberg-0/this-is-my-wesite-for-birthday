
import React, { useRef, useState } from 'react';

// IMPORTANT: Replaced the local "pyaar.mp3" with a working URL.
// Browsers cannot access local files for security reasons.
// To use your own song, upload "pyaar.mp3" to a hosting service and paste the link here.
const MUSIC_SRC = "https://soundcloud.com/beedoubleyoo/humko-pyar-hua-kk-tulsi-kumar?in=vey8jflcxzys%2Fsets%2Fhmko";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // The .play() method returns a promise, it's good practice to catch potential errors.
        audioRef.current.play().catch(error => {
          // This can happen if the user hasn't interacted with the page yet.
          console.error("Audio play failed:", error);
          // You could optionally show an alert to the user here.
          // alert("Could not play audio. Please try again.");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={MUSIC_SRC} loop crossOrigin="anonymous" />
      <button
        onClick={togglePlayPause}
        className="w-16 h-16 bg-rose-400/80 hover:bg-rose-500 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
