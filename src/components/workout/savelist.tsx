import React, { useState } from 'react';

type Workout = {
  name: string;
  type: string;
  date: string;
};

const defaultWorkouts = [
  'Chest', 'Back', 'Shoulders', 'Abs', 'Arms',
  'Legs', 'Push', 'Pull', 'Calisthenics',
  'Upper Body', 'Full Body', 'Stretching & Mobility'
];

const SavedWorkouts: React.FC<{ workouts: Workout[] }> = ({ workouts }) => {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  const handleToggle = (routine: string) => {
    setSelectedWorkout(routine); // Set the selected workout
  };

  return (
    <aside className="bg-gray-900 text-white w-72 p-6 shadow-lg rounded-lg flex flex-col items-center font-['Inter']">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#ccff00]">Saved Routines</h2>

      {workouts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          <p>No saved routines yet.</p>
        </div>
      ) : (
        <ul className="w-full space-y-4">
          {workouts.map((workout, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
                selectedWorkout === workout.name ? 'bg-[#ccff00] text-black' : 'bg-gray-800 text-white'
              }`}
              onClick={() => handleToggle(workout.name)}
            >
              <h3 className="text-lg font-semibold">{workout.name}</h3>
              <p className={`text-sm ${selectedWorkout === workout.name ? 'text-black' : 'text-gray-400'}`}>{workout.type}</p>
              <p className={`text-xs ${selectedWorkout === workout.name ? 'text-black' : 'text-gray-500'}`}>{workout.date}</p>
            </li>
          ))}
        </ul>
      )}

      <h3 className="text-xl font-bold mt-8 text-center text-[#ccff00]">Recommended for Beginners</h3>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {defaultWorkouts.map((routine, index) => (
          <button
            key={index}
            className={`p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform ${
              selectedWorkout === routine
                ? 'bg-[#ccff00] text-black'
                : 'bg-gray-800 hover:bg-[#ccff00] hover:text-black'
            }`}
            onClick={() => handleToggle(routine)}
          >
            {routine}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default SavedWorkouts;
