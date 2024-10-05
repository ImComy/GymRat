import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './mealSlice';
import workoutReducer from './workoutslice';

const store = configureStore({
  reducer: {
    meals: mealReducer,
    workouts: workoutReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
