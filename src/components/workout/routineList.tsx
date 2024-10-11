import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExerciseCard from './card';
import { RootState } from '../../app/store';
import { checkWorkout } from '../../app/workoutslice';
import { usePathname } from 'next/navigation';

const RoutineList: React.FC = () => {
  const workouts = useSelector((state: RootState) => state.workouts.workouts);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);

  useEffect(() => {
    const pathSegments = pathname.split('/');
    const muscleGroup = pathSegments[2] || 'All';

    const filtered = workouts.filter(workout => {
      if (muscleGroup === 'All') return workout.isChecked;
      return workout.muscleGroup.toLowerCase() === muscleGroup.toLowerCase() && workout.isChecked;
    });

    setFilteredWorkouts(filtered);
  }, [pathname, workouts]);

  return (
    <main className="flex flex-wrap gap-10 justify-center">
      {filteredWorkouts.length > 0 ? (
        filteredWorkouts.map(workout => (
          <ExerciseCard
            key={workout._id}
            id={workout._id}
            name={workout.name}
            img={workout.imageUrl}
          />
        ))
      ) : (
        <div className="text-center text-gray-500 text-lg mx-auto">
          No workouts have been added yet.
        </div>
      )}
    </main>
  );
};

export default RoutineList;
