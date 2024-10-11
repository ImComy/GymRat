import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { addWorkoutsToCollection } from '../../app/workoutslice';

interface Workout {
  name: string;
  type: string;
  date: string;
}

const SavedWorkout = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [saveStatus, setSaveStatus] = useState('');
  const savedWorkoutCollections = useSelector((state: RootState) => state.workouts.savedWorkoutsArray);

  const handleWorkoutClick = (workout: Workout) => {
    setSelectedWorkout(workout);
  };

const handleAddToCollection = (collectionName: string) => {
  const updatedCollection = savedWorkoutCollections.find(col => col.name === collectionName);

  if (updatedCollection) {
    const updatedWorkouts = [...updatedCollection.workouts, selectedWorkout];
    dispatch(addWorkoutsToCollection({ name: collectionName}));
    setSaveStatus('Saved!');

    setTimeout(() => {
      setSaveStatus('');
      handleClosePopup();
    }, 1000);
  }
};

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 300);
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
          Add to an Existing Routine
        </span>
      </button>

      {showPopup && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10 ${
            isClosing ? 'animate-fade-out' : 'animate-fade-in'
          }`}
          onClick={handleOutsideClick}
        >
          <div className="relative w-[536px] h-auto bg-white rounded-lg shadow-2xl popup px-6 py-5 transition-all duration-300 ease-out mt-[50px]">
            <button
              className="absolute top-0 right-[-10px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-full px-2 hover:bg-red-500 z-11"
              onClick={handleClosePopup}
            >
              &times;
            </button>

            <div className="w-full h-[60px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-t-lg flex items-center justify-center relative mb-5">
              <span className="text-center text-black text-2xl font-extrabold">Saved Workouts</span>
            </div>

            <div className="flex items-center w-full mb-3 border border-grey-600 rounded-full">
              <span className="ml-3 absolute text-gray-400">
                <i className="nf nf-seti-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search workouts..."
                className="w-full py-2 px-4 pl-10 rounded-full text-black focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="w-full flex justify-between text-[#505050] text-sm font-semibold mb-3 px-3">
              <span>Workout Name</span>
              <span>Type</span>
              <span>Date Added</span>
            </div>

            {savedWorkoutCollections.length > 0 ? (
  savedWorkoutCollections
    .filter((workout) =>
      workout.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map((workout, index) => (
      <button
        key={index}
        className="workout-row w-full bg-white rounded shadow px-5 py-2 flex justify-between mb-3 transition-transform hover:scale-105 transition duration-300 text-sm"
        onClick={() => {
          handleWorkoutClick(workout);
          handleAddToCollection(workout.name);
        }}
      >
        <span className="text-black font-semibold">{workout.name}</span>
        <span className="text-black font-semibold">{workout.type}</span>
        <span className="text-black font-semibold">{workout.date}</span>
      </button>
    ))
) : (
  <p className="text-gray-500 text-sm text-center pt-3">No saved workouts.</p>
)}

            {saveStatus && (
              <div className="text-center text-green-500 mt-3">{saveStatus}</div>
            )}
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

export default SavedWorkout;
