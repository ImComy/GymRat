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
  savedMeals: string[];
}

const initialState: MealState = {
  meals: mealCardsArray,
  savedMeals: [],
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
    saveMeal: (state, action: PayloadAction<string>) => {
      if (!state.savedMeals.includes(action.payload)) {
        state.savedMeals.push(action.payload);
        console.log("Saving Meal ID:", action.payload);
      }
    },
    removeSavedMeal: (state, action: PayloadAction<string>) => {
      state.savedMeals = state.savedMeals.filter(id => id !== action.payload);
    },
  },
});

export const isMealSaved = (state: RootState, mealId: string) => state.meals.savedMeals.includes(mealId);
export const {
  addMeal,
  removeMeal,
  createMeal,
  updateMeal,
  updateMealAmount,
  saveMeal,
  removeSavedMeal
} = mealSlice.actions;

export default mealSlice.reducer;
