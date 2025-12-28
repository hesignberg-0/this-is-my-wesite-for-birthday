
import React, { useState } from 'react';

const messages = [
  "I will always kiss you before we sleep la  babay ",
  "Missing your presence darling 😔",
  "Timi mula  first and last thinking ho mero mind ma daily. 😘",
  "Can't wait to hold you in my arms darling. 🤗",
  "You make my world so much brighter, meri Thuski. ☀️",
  "We will celebrate your birthday together la baby paxi . 😊",
  "Hey Miss World, your poor Sujal is missing you a lot! 💖",
  "meri cutieee lai dheraii kisses😘😘😘",
  "I loveeee youuu merro darling❤️",
  "I will always be there for you bubu ❤️",
  "Baby we will fight all our periods together la? ❤️",
  "mero xoriiiiiiiiiii !!!!❤️",
  " my queen! ❤️",
  "kya re chikni kapde uthar ❤️",
  " you are my family, my partner, my solemate ❤️",

];

interface FlirtyButtonsProps {
  onButtonClick: () => void;
}

const FlirtyButtons: React.FC<FlirtyButtonsProps> = ({ onButtonClick }) => {
  const [currentMessage, setCurrentMessage] = useState(" kya re chikni ?");
  const [key, setKey] = useState(0); // Used to re-trigger the animation

  const showRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[randomIndex]);
    onButtonClick();
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div className="text-center my-12">
      <div className="bg-white/50 rounded-lg p-6 shadow-lg inline-block min-h-[80px] flex items-center justify-center mb-6 w-full max-w-2xl">
        <p key={key} className="text-xl md:text-2xl font-semibold text-red-800 pop-in">
          {currentMessage}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={showRandomMessage}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Babay 💕
        </button>
        <button
          onClick={showRandomMessage}
          className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Meri bachhhu 💗
        </button>
        <button
          onClick={showRandomMessage}
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Kissi deu na  😘
        </button>
      </div>
    </div>
  );
};

export default FlirtyButtons;
