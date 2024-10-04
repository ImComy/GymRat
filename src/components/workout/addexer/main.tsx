import React, { useState, useRef, useEffect } from 'react';
import Search from './search';
import Slider from './slider';
import { exercises } from '../../../app/workouts/objects';

interface Instruction {
  label: string;
  text: string;
}

interface Benefit {
  label: string;
  text: string;
}

interface CommonMistake {
  label: string;
  text: string;
}

interface ExerciseDetails {
  name: string;
  type: string;
  musclesWorked: {
    primary: string;
    secondary: string;
  };
  setup: string;
  youtubeLink: string;
  musclesWorkedIMG: string;
  instructions: Instruction[];
  benefits: Benefit[];
  commonMistakes: CommonMistake[];
}

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [closingPopup, setClosingPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState<ExerciseDetails | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleViewDetails = (exercise: ExerciseDetails) => {
    setSelectedCard(exercise);
    setShowPopup(true);
    setClosingPopup(false);
  };

  const handleSearch = (query: string, option: string, order: 'asc' | 'desc') => {
    setSearchQuery(query);
    setSelectedOption(option);
    setSortOrder(order);
  };

  const handleClosePopup = () => {
    setClosingPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setSelectedCard(null);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        handleClosePopup();
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);
  return (
    <main className="px-6 md:px-20">
      <h1 className="text-black text-[32px] md:text-[40px] font-bold font-['Inter'] pt-3">Add Exercises</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <Search onSearch={handleSearch} />
        <Slider onViewDetails={handleViewDetails} searchQuery={searchQuery} selectedOption={selectedOption} sortOrder={sortOrder}/>
      </div>

      {showPopup && selectedCard && (
        <div className={`fixed inset-0 flex justify-center items-center bg-black/70 z-50 p-4 overflow-auto ${closingPopup ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div ref={popupRef} className={`bg-white rounded-lg shadow-lg p-6 md:p-8 w-full h-full max-w-[900px] relative ${closingPopup ? 'animate-popup-close' : 'animate-popup-open'} overflow-scroll`}>
            <button
              onClick={handleClosePopup}
              className="absolute top-7 right-5 p-2 px-4 text-4xl hover:text-red-500 text-gray-600 hover:text-gray-800 transition-colors"
            >
              &times;
            </button>

            <div className="header flex flex-col items-start space-y-2">
              <h2 className="text-black text-[44.99px] font-bold font-['Inter'] leading-10">{selectedCard.name}</h2>
              <p className="text-center text-black/50 text-[30.87px] font-bold font-['Inter'] leading-7">{selectedCard.type}</p>
            </div>

            <div className="flex justify-between gap-8 mt-10">
              <div className="exercise-image bg-black/25 rounded-lg w-[897.59px] h-[400px] flex items-center justify-center">
                <iframe
                  className="rounded-lg"
                  width="100%"
                  height="100%"
                  src={selectedCard.youtubeLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <section>
                <div className="w-[400px]">
                  <span className="text-black text-md font-medium font-['Inter'] leading-10">Muscles Worked:<br/></span>
                  <span className="text-black text-sm font-bold font-['Inter'] leading-tight">Primary</span>
                  <span className="text-black text-sm font-medium font-['Inter'] leading-tight">: {selectedCard.musclesWorked.primary}<br/></span>
                  <span className="text-black text-sm font-bold font-['Inter'] leading-tight">Secondary</span>
                  <span className="text-black text-sm font-medium font-['Inter'] leading-tight">: {selectedCard.musclesWorked.secondary}</span>
                </div>

                <div className="w-full h-[238.16px] my-5">
                  <img src={selectedCard.musclesWorkedIMG} alt="Exercise visual aid" />
                </div>
              </section>
            </div>

            <div className="grid mt-8 gap-20 grid-cols-5">
              <div className="instructions space-y-4 text-black mt-5 col-span-3">
                <h3 className="text-black text-[34.27px] font-bold font-['Inter'] leading-[47.30px]">How to Perform</h3>
                {selectedCard.instructions.map((instruction, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    <strong>{instruction.label}: </strong>{instruction.text}
                  </p>
                ))}
              </div>

              <div className="benefits mt-6 space-y-2 border-l border-black pl-5 text-gray-700 pt-10 col-span-2">
                <h3 className="text-[#606060] text-base font-black font-['Inter'] leading-snug">Benefits</h3>
                {selectedCard.benefits.map((benefit, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    <span className="text-[#606060] text-base font-bold font-['Inter'] leading-snug">{benefit.label}:</span> {benefit.text}
                  </p>
                ))}
              </div>
            </div>

            <div className="common-mistakes space-y-2 text-black mt-10">
              <h3 className="text-black text-[34.27px] font-bold font-['Inter'] leading-[47.30px]">Common Mistakes</h3>
              {selectedCard.commonMistakes.map((mistake, index) => (
                <p key={index} className="text-base leading-relaxed">
                  <strong>{mistake.label}:</strong> {mistake.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        @keyframes popupOpen {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes popupClose {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.1s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.1s ease-out forwards;
        }

        .animate-popup-open {
          animation: popupOpen 0.3s ease-out forwards;
        }

        .animate-popup-close {
          animation: popupClose 0.3s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default Main;
