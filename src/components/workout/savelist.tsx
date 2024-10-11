import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { checkWorkout, summonSavedWorkoutCollection, clearAllWorkouts } from '../../app/workoutslice';

const defaultWorkouts = [
  'Chest', 'Back', 'Shoulders', 'Abs', 'Arms',
  'Legs', 'Push', 'Pull', 'Calisthenics',
  'Upper Body', 'Full Body', 'Stretching & Mobility'
];

const SavedWorkouts: React.FC = () => {
  const dispatch = useDispatch();
  const savedWorkouts = useSelector((state: RootState) => state.workouts.savedWorkoutsArray);
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  const handleToggle = (workoutName: string) => {
    const selected = savedWorkouts.find(workout => workout.name === workoutName);

    if (selectedWorkout === workoutName) {
      setSelectedWorkout(null);
      if (selected) {
        dispatch(checkWorkout(selected.name));
      }
    } else {
      setSelectedWorkout(workoutName);
      if (selected) {
        dispatch(summonSavedWorkoutCollection({ name: selected.name }));
      }
    }

    if (selectedWorkout === null && !selected) {
      dispatch(clearAllWorkouts());
    }
  };

  useEffect(() => {
    if (!selectedWorkout) {
      dispatch(clearAllWorkouts());
    }
  }, [selectedWorkout, dispatch]);

  return (
    <aside className="bg-gray-100 text-gray-800 w-80 p-6 shadow-lg rounded-lg flex flex-col items-center font-['Inter']">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#ccff00]">Saved Routines</h2>

      {savedWorkouts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          <p>No saved routines yet.</p>
        </div>
      ) : (
        <ul className="w-full space-y-4">
          {savedWorkouts.map((workout, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer ${
                selectedWorkout === workout.name
                  ? 'bg-[#ccff00] text-gray-900 scale-110 shadow-xl'
                  : 'bg-gray-200 text-gray-800 hover:bg-[#a1d700]'
              }`}
              onClick={() => handleToggle(workout.name)}
              style={{ transition: 'background-color 0.3s ease, transform 0.3s ease' }}
            >
              <h3 className="text-lg font-semibold">{workout.name}</h3>
              <p className={`text-sm ${selectedWorkout === workout.name ? 'text-gray-900' : 'text-gray-600'}`}>{workout.type}</p>
              <p className={`text-xs ${selectedWorkout === workout.name ? 'text-gray-900' : 'text-gray-500'}`}>{workout.date}</p>
            </li>
          ))}
        </ul>
      )}

      <h3 className="text-xl font-bold mt-8 text-center text-[#ccff00]">Recommended for Beginners</h3>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {defaultWorkouts.map((routine, index) => (
          <button
            key={index}
            className={`p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform active:scale-95 focus:outline-none ${
              selectedWorkout === routine
                ? 'bg-[#ccff00] text-gray-900 scale-110 shadow-lg'
                : 'bg-gray-200 text-gray-800 hover:bg-[#7bbf00] hover:text-gray-900'
            }`}
            onClick={() => handleToggle(routine)}
            style={{ transition: 'background-color 0.3s ease, transform 0.3s ease' }}
          >
            {routine}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default SavedWorkouts;
