import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mealCardsArray from '../components/food/objects';

interface Meal {
  _id: string;
  title: string;
  src: string;
  calories?: string;
  protein?: string;
  fats?: string;
  carbs?: string;
  isAdded?: boolean;
  amount?: number;
}

interface MealState {
  meals: Meal[];
}

const initialState: MealState = {
  meals: mealCardsArray,
};

const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    addMeal: (state, action: PayloadAction<string>) => {
      const meal = state.meals.find(meal => meal._id === action.payload);
      if (meal) {
        meal.isAdded = true;
      }
    },
    removeMeal: (state, action: PayloadAction<string>) => {
      const meal = state.meals.find(meal => meal._id === action.payload);
      if (meal) {
        meal.isAdded = false;
      }
    },
    createMeal: (state, action: PayloadAction<Meal>) => {
      state.meals.push(action.payload);
    },
    updateMeal: (state, action: PayloadAction<Meal>) => {
      const index = state.meals.findIndex(meal => meal._id === action.payload._id);
      if (index !== -1) {
        state.meals[index] = action.payload;
      }
    },
    updateMealAmount: (state, action: PayloadAction<{ _id: string; amount: number }>) => {
      const meal = state.meals.find(meal => meal._id === action.payload._id);
      if (meal) {
        meal.amount = action.payload.amount;
      }
    },
  },
});

export const { addMeal, removeMeal, createMeal, updateMeal, updateMealAmount } = mealSlice.actions;
export default mealSlice.reducer;