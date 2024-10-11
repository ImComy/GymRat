import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { exercises as allExercises } from './workouts/objects';

interface MuscleWorked {
  primary: string;
  secondary: string;
}

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

interface Exercise {
  _id: string;
  name: string;
  type: string;
  isChecked: boolean;
  youtubeLink: string;
  imageUrl: string;
  musclesWorkedIMG: string;
  muscleGroup: string;
  routineGroup: string;
  musclesWorked: MuscleWorked;
  instructions: Instruction[];
  benefits: Benefit[];
  commonMistakes: CommonMistake[];
}

interface Workout {
  id: string;
  name: string;
  type: string;
  date: string;
}

interface SavedWorkoutCollection {
  date: string;
  name: string;
  type: string;
  workouts: string[];
}

interface WorkoutState {
  workouts: Exercise[];
  savedWorkoutsArray: SavedWorkoutCollection[];
}

const initialState: WorkoutState = {
  workouts: allExercises,
  savedWorkoutsArray: [],
};

const generateUniqueId = () => Math.random().toString(36).substr(2, 9);

const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    checkWorkout: (state, action: PayloadAction<string>) => {
      const workout = state.workouts.find(workout => workout._id === action.payload);
      if (workout) {
        workout.isChecked = true;
      }
    },
    uncheckWorkout: (state, action: PayloadAction<string>) => {
      const workout = state.workouts.find(workout => workout._id === action.payload);
      if (workout) {
        workout.isChecked = false;
      }
    },
    createWorkoutCollection: (state, action: PayloadAction<{ name: string; type: string; date: string }>) => {
      const { name, type, date } = action.payload;
      state.savedWorkoutsArray.push({
        name,
        type,
        date,
        workouts: []
      });
      console.log('Updated savedWorkoutsArray:', state.savedWorkoutsArray);
    },
    addWorkoutsToCollection: (state, action: PayloadAction<{ name: string;}>) => {
      const { name } = action.payload;
      const collection = state.savedWorkoutsArray.find(
        (collection) => collection.name === name
      );
      if (collection) {
        const checkedWorkouts = state.workouts.filter(workout => workout.isChecked);
        console.log('Checked workouts to be added:', checkedWorkouts);
        collection.workouts.push(...checkedWorkouts.map(workout => workout._id));
        console.log('Updated collection after adding workouts:', collection);
      }
    },
    summonSavedWorkoutCollection: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const savedCollection = state.savedWorkoutsArray.find(
        collection => collection.name === name
      );
      state.workouts.forEach(workout => {
        workout.isChecked = false;
        console.log(`Workout: ${workout._id}, isChecked: ${workout.isChecked}`);
      });
      if (savedCollection) {
        savedCollection.workouts.forEach(savedWorkoutId => {
          const workout = state.workouts.find(workout => workout._id === savedWorkoutId);
          if (workout) {
            workout.isChecked = true;
            console.log(`Checked Workout: ${workout._id}, isChecked: ${workout.isChecked}`);
          }
        });
      }
    },
    clearAllWorkouts: (state) => {
      state.workouts.forEach(workout => {
        workout.isChecked = false;
      });
    },
  },
});

export const {
  checkWorkout,
  uncheckWorkout,
  createWorkoutCollection,
  addWorkoutsToCollection,
  summonSavedWorkoutCollection,
  clearAllWorkouts,
} = workoutSlice.actions;

export default workoutSlice.reducer;
