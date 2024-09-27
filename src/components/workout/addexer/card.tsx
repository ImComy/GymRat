import React, { useState, useEffect } from 'react';

interface CardProps {
  name: string;
  type: string;
}

const Card: React.FC<CardProps> = ({ name, type }) => {
  const [added, setAdded] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleToggle = () => {
    setAdded(!added);
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 600);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[366px] h-[79px] relative flex items-center">
      <div className="relative">
        {animate && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative">
              <span className="absolute w-2 h-2 bg-green-500 rounded-full opacity-75 animate-ping top-[-15px] left-[-15px]" />
              <span className="absolute w-2 h-2 bg-green-500 rounded-full opacity-75 animate-ping top-[-15px] right-[-15px]" />
              <span className="absolute w-2 h-2 bg-green-500 rounded-full opacity-75 animate-ping bottom-[-15px] left-[-15px]" />
              <span className="absolute w-2 h-2 bg-green-500 rounded-full opacity-75 animate-ping bottom-[-15px] right-[-15px]" />
            </div>
          </div>
        )}
        <button
          onClick={handleToggle}
          className={`relative w-5 h-5 flex items-center justify-center transition-all duration-300 bg-white rounded-full ${
            animate ? 'animate-ping' : ''
          }`}
        >
          <span
            className={`absolute block w-[2px] h-full transition-all duration-300 origin-center ${
              added ? 'rotate-[-45deg] h-[10px] bg-green-500 mt-3 mr-1' : 'bg-black'
            }`}
          />
          <span
            className={`absolute block w-full h-[2px] transition-all duration-300 origin-center ${
              added ? 'rotate-[120deg] w-[20px] bg-green-500 ml-3' : 'bg-black'
            }`}
          />
        </button>
      </div>
      <img
        src="https://img.icons8.com/quill/100/barbell.png"
        alt="exercise"
        className="rounded-full mx-5 w-[70px]"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-black text-base font-bold font-['Inter'] leading-[14.49px]">{name}</h3>
        <p className="text-black/50 text-[11.05px] font-bold font-['Inter'] leading-[9.94px]">{type}</p>
      </div>
    </div>
  );
};

export default Card;
