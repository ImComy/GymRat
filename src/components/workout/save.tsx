import React, { useState } from 'react';

const NewSave = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [workoutName, setWorkoutName] = useState('');

  const handleWorkoutClick = (workout: string) => {
    setSelectedWorkout(workout);
  };

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 300);
  };

  const handleSaveWorkout = () => {
    console.log('Workout saved!');
    handleClosePopup();
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('popup-background')) {
      handleClosePopup();
    }
  };

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="group relative flex items-center gap-2 p-3 border-2 border-gray-300 rounded-md
        hover:border-gray-400 hover:bg-gray-100 focus:outline-none transition duration-300
        transform hover:scale-105 active:scale-95 h-14 m-10"
        title="Add a new workout routine"
      >
        <div className="w-12 h-12 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            className="stroke-gray-700 fill-none group-hover:fill-gray-300 group-active:stroke-gray-500
            group-active:fill-gray-400 group-active:duration-0 duration-300
            transform group-hover:rotate-90"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              strokeWidth="1.5"
            />
            <path d="M8 12H16" strokeWidth="1.5" />
            <path d="M12 16V8" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="text-gray-700 text-base font-medium group-hover:text-gray-900 transition-colors duration-300">
          Add a new workout routine
        </span>
      </button>

      {showPopup && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center z-10 popup-background ${
            isClosing ? 'animate-fade-out' : 'animate-fade-in'
          }`}
          onClick={handleOutsideClick}
        >
          <div className="relative w-[428px] h-auto bg-white rounded-lg shadow-2xl popup px-8 py-3 transition-transform duration-300 ease-out transform ${
              isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            } mt-[50px]">
            <button
              className="absolute top-0 right-[-10px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-full px-2 hover:bg-red-500 z-11"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <div className="w-full h-[60px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-t-lg flex items-center justify-center relative">
              <span className="text-center text-black text-2xl font-extrabold">New Workout Routine</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {['Chest', 'Back', 'Shoulders', 'Abs', 'Arms', 'Legs', 'Push', 'Pull', 'Calisthenics', 'Upper Body', 'Full Body', 'Stretching & Mobility'].map((workout) => (
                <button
                  key={workout}
                  onClick={() => handleWorkoutClick(workout)}
                  className={`w-full h-[45px] rounded-md shadow-lg hover:shadow-[#ccff00] flex items-center justify-center text-sm font-semibold transition-transform hover:scale-105
                    ${selectedWorkout === workout ? 'bg-[#ccff00] text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {workout}
                </button>
              ))}
            </div>

            <div className="mt-6 w-full mx-auto bg-gray-100 rounded-full border border-gray-300 px-3 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Enter your routine name..."
                className="w-full bg-transparent text-gray-700 text-sm font-medium focus:outline-none"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                className="w-[180px] h-[45px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-full text-black font-bold transition-transform hover:scale-105"
                onClick={handleSaveWorkout}
              >
                Save Routine
              </button>
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

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default NewSave;
