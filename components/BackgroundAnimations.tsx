
import React from 'react';
import type { Heart } from '../types';

interface BackgroundAnimationsProps {
  hearts: Heart[];
}

const BackgroundAnimations: React.FC<BackgroundAnimationsProps> = ({ hearts }) => {
  const petNames = ["bachhu", "dallu", "sweetu", "darling", "babay", "bubu", "thuski"];
  const colors = ["text-pink-400", "text-rose-400", "text-red-400", "text-purple-400", "text-fuchsia-400"];

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {/* Pet Name Rain */}
      {[...Array(15)].map((_, i) => {
        const petName = petNames[Math.floor(Math.random() * petNames.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div
            key={`word-rain-${i}`}
            className={`absolute font-cursive ${color}`}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 15 + 15}px`,
              animation: `rain ${Math.random() * 9 + 9}s linear infinite`,
              animationDelay: `${Math.random() * 18}s`,
            }}
          >
            {petName}
          </div>
        );
      })}

      {/* Heart Rain */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`rain-${i}`}
          className="absolute text-pink-400"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 15 + 10}px`,
            animation: `rain ${Math.random() * 8 + 8}s linear infinite`,
            animationDelay: `${Math.random() * 16}s`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={`sparkle-${i}`}
          className="absolute rounded-full bg-pink-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * -20}s`
          }}
        />
      ))}

      {/* Hearts from button clicks */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0 text-red-400"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            animation: `float ${heart.duration}s ease-out forwards`
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default BackgroundAnimations;
