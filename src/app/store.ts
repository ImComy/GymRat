import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './mealSlice';

const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
