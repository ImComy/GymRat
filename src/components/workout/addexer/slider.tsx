import React, { useState } from 'react';
import Card from './card';

interface CardData {
  name: string;
  type: string;
}

interface SliderProps {
  onViewDetails: (name: string, type: string) => void;
}

const Slider: React.FC<SliderProps> = ({ onViewDetails }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const numSlides = 3;

  const cards: CardData[] = [
    { name: "Bench Press", type: "Dumbbell" },
    { name: "Bench Press", type: "Barbell" },
    { name: "Squat", type: "Barbell" },
    { name: "Deadlift", type: "Barbell" },
    { name: "Overhead Press", type: "Dumbbell" },
    { name: "Pull-Up", type: "Bodyweight" },
    { name: "Leg Press", type: "Machine" },
    { name: "Bicep Curl", type: "Dumbbell" },
    { name: "Tricep Extension", type: "Cable" },
    { name: "Lat Pulldown", type: "Cable" },
    { name: "Chest Fly", type: "Machine" },
    { name: "Front Squat", type: "Barbell" },
    { name: "Tricep Dip", type: "Bodyweight" },
    { name: "Leg Extension", type: "Machine" },
    { name: "Hamstring Curl", type: "Machine" },
    { name: "Calf Raise", type: "Machine" },
    { name: "Incline Bench Press", type: "Barbell" },
    { name: "Seated Row", type: "Cable" }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? numSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === numSlides - 1 ? 0 : prev + 1));
  };

  const renderCardsForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * 6;
    const selectedCards = cards.slice(startIndex, startIndex + 6);

    return (
      <div className="grid grid-cols-3 gap-4">
        {selectedCards.map((card, index) => (
          <Card key={index} name={card.name} type={card.type} onViewDetails={() => onViewDetails(card.name, card.type)}/>
        ))}
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className=" flex items-center w-full">
        <button
          onClick={handlePrevSlide}
          className="text-[50px] font-bold text-gray-400 px-4 py-2 rounded-md absolute left-[-100px] z-10">
          <span className="nf nf-fa-angle_left"></span>
        </button>
        <div className="flex transition-transform duration-500 ease-in-out w-full space-x-8 gap-20 ml-5" style={{ transform: `translateX(-${currentSlide * 109.5}%)` }}>
          {Array.from({ length: numSlides }).map((_, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {renderCardsForSlide(index)}
            </div>
          ))}
        </div>
        <button
          onClick={handleNextSlide}
          className="text-[50px] font-bold text-gray-400 px-4 py-2 rounded-md absolute right-[-90px] z-10">
          <span className="nf nf-fa-angle_right"></span>
        </button>
      </div>
      <div className="absolute bottom-[-50px] flex space-x-2 z-5">
        {Array.from({ length: numSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-transform duration-300 ease-in-out ${currentSlide === index ? 'bg-gray-800 scale-125' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
