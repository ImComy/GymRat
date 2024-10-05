import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExerciseCard from './card';
import { RootState } from '../../app/store';
import { checkWorkout } from '../../app/workoutslice';

const RoutineList: React.FC = () => {
  const workouts = useSelector((state: RootState) => state.workouts.workouts);
  const dispatch = useDispatch();

  const addedWorkouts = workouts.filter(workout => workout.isChecked);

  return (
    <main className="flex flex-wrap gap-10 justify-center">
      {addedWorkouts.length > 0 ? (
        addedWorkouts.map(workout => (
          <ExerciseCard
            key={workout._id}
            id={workout._id}
            name={workout.name}
            img={workout.imageUrl}
          />
        ))
      ) : (
        <div className="text-center text-gray-500 text-lg mx-auto">
          No workouts have been added yet. Please add workouts to see them here.
        </div>
      )}
    </main>
  );
};

export default RoutineList;
