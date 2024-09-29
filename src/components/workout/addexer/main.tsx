import React, { useState } from 'react';
import Search from './search';
import Slider from './slider';

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [closingPopup, setClosingPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{ name: string; type: string } | null>(null);

  const handleViewDetails = (name: string, type: string) => {
    setSelectedCard({ name, type });
    setShowPopup(true);
    setClosingPopup(false);
  };

  const handleClosePopup = () => {
    setClosingPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setSelectedCard(null);
    }, 300);
  };

  return (
    <main className="px-6 md:px-20">
      <h1 className="text-black text-[32px] md:text-[40px] font-bold font-['Inter']">Add Exercises</h1>
      <div className="flex flex-col justify-center items-center">
        <Search />
        <Slider onViewDetails={handleViewDetails} />
      </div>

      {showPopup && selectedCard && (
        <div className={`fixed inset-0 flex justify-center items-center bg-black/70 z-50 p-4 overflow-auto ${closingPopup ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div className={`bg-white rounded-lg shadow-lg p-6 md:p-8 w-full h-full max-w-[900px] relative ${closingPopup ? 'animate-popup-close' : 'animate-popup-open'} overflow-scroll`}>
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
                  src="https://www.youtube.com/embed/sex"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <section>
                <div className="w-[400px]">
                  <span className="text-black text-sm font-medium font-['Inter'] leading-10">Muscles Worked:<br/></span>
                  <span className="text-black text-sm font-bold font-['Inter'] leading-tight">Primary</span>
                  <span className="text-black text-sm font-medium font-['Inter'] leading-tight">: Upper pectoralis major (upper chest)<br/></span>
                  <span className="text-black text-sm font-bold font-['Inter'] leading-tight">Secondary</span>
                  <span className="text-black text-sm font-medium font-['Inter'] leading-tight">: Anterior deltoids (front shoulders), triceps brachii, and serratus anterior (muscle on the side of the chest)</span>
                </div>

                <div className="w-full h-[238.16px] my-5">
                  <img src="https://via.placeholder.com/492x292" alt="Exercise visual aid" />
                </div>
              </section>
            </div>

            <div className="flex mt-8 gap-20">
              <div className="instructions space-y-4 text-black">
                <h3 className="text-black text-[34.27px] font-bold font-['Inter'] leading-[47.30px]">How to Perform</h3>
                <p className="text-base leading-relaxed">
                  <strong>Setup:</strong> Set an incline bench to a 30-45 degree angle. Grab a dumbbell in each hand and sit on the bench with the dumbbells resting on your thighs.
                </p>
                <p className="text-base leading-relaxed">
                  <strong>Position:</strong> Lie back on the bench, press the dumbbells up toward the ceiling, and position them directly over your chest with your palms facing forward. Your arms should be fully extended but not locked out.
                </p>
                <p className="text-base leading-relaxed">
                  <strong>Lower:</strong> Slowly lower the dumbbells down to the sides of your chest, bending your elbows at about a 90-degree angle. Keep the movement controlled.
                </p>
                <p className="text-base leading-relaxed">
                  <strong>Press:</strong> Press the dumbbells back up to the starting position by squeezing your chest muscles and straightening your arms.
                </p>
                <p className="text-base leading-relaxed">
                  <strong>Repeat:</strong> Perform the desired number of repetitions.
                </p>
              </div>

              <div className="benefits mt-6 space-y-2 border-l border-black pl-5">
                <h3 className="text-[#606060] text-base font-black font-['Inter'] leading-snug">Benefits</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li><span className="text-[#606060] text-base font-bold font-['Inter'] leading-snug">Upper chest development:</span>The incline angle targets the upper chest, helping build a balanced and well-rounded chest.</li>
                  <li><span className="text-[#606060] text-base font-bold font-['Inter'] leading-snug">Improved shoulder stability:</span> The dumbbells require more stabilization than a barbell, engaging smaller stabilizer muscles, improving shoulder stability and coordination.</li>
                  <li><span className="text-[#606060] text-base font-bold font-['Inter'] leading-snug">Symmetry and balance:</span> Dumbbells allow each side of the body to work independently, which can help correct muscle imbalances between the left and right sides.</li>
                </ul>
              </div>
            </div>

            <div className="common-mistakes mt-10 space-y-2 text-xl">
              <h3 className="text-black text-xl font-bold font-['Inter'] leading-7">Common Mistakes</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li><span className="text-black font-bold font-['Inter'] leading-tight">Excessive arching of the lower back:</span> Maintain contact with the bench to prevent injury.</li>
                <li><span className="text-black font-bold font-['Inter'] leading-tight">Too much weight:</span> Using more weight than you can handle often leads to poor form and increases the risk of injury.</li>
                <li><span className="text-black font-bold font-['Inter'] leading-tight">Inconsistent range of motion:</span> Lower the dumbbells all the way down to your chest for a full stretch.</li>
              </ul>
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
