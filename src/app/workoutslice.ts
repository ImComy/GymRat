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
  _id: string;
  details: Exercise;
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
    createWorkout: (state, action: PayloadAction<Exercise>) => {
      state.workouts.push(action.payload);
    },
    updateWorkout: (state, action: PayloadAction<Exercise>) => {
      const index = state.workouts.findIndex(workout => workout._id === action.payload._id);
      if (index !== -1) {
        state.workouts[index] = action.payload;
      }
    },
    saveWorkoutCollection: (state, action: PayloadAction<{ name: string; type: string }>) => {
      const { name, type } = action.payload;
      const currentDate = new Date().toLocaleDateString();

      const checkedWorkoutIDs = state.workouts
        .filter(workout => workout.isChecked === true)
        .map(workout => workout._id);

      if (checkedWorkoutIDs.length > 0) {
        const existingCollection = state.savedWorkoutsArray.find(
          collection => collection.name === name && collection.type === type
        );

        if (existingCollection) {
          existingCollection.workouts.push(...checkedWorkoutIDs);
        } else {
          state.savedWorkoutsArray.push({
            date: currentDate,
            name,
            type,
            workouts: checkedWorkoutIDs,
          });
        }
      }
    },
    summonSavedWorkoutCollection: (
      state,
      action: PayloadAction<{ name: string; type: string }>
    ) => {
      const { name, type } = action.payload;
      const savedCollection = state.savedWorkoutsArray.find(
        collection => collection.name === name && collection.type === type
      );

      if (savedCollection) {
        state.workouts.forEach(workout => {
          workout.isChecked = false;
        });

        savedCollection.workouts.forEach(savedWorkoutId => {
          const workout = state.workouts.find(workout => workout._id === savedWorkoutId);
          if (workout) {
            workout.isChecked = true;
          }
        });
      }
    },
  },
});

export const {
  checkWorkout,
  uncheckWorkout,
  createWorkout,
  updateWorkout,
  saveWorkoutCollection,
  summonSavedWorkoutCollection,
} = workoutSlice.actions;

export default workoutSlice.reducer;
