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

interface SavedMealCollection {
  date: string;
  name: string;
  type: string;
  meals: string[];
}

interface MealState {
  meals: Meal[];
  savedMealsArray: SavedMealCollection[];
}

const initialState: MealState = {
  meals: mealCardsArray,
  savedMealsArray: [],
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
    saveMealCollection: (state, action: PayloadAction<{ name: string; type: string }>) => {
      const { name, type } = action.payload;
      const currentDate = new Date().toLocaleDateString();

      const savedMealIDs = state.meals
        .filter(meal => meal.isAdded === true)
        .map(meal => meal._id);

      if (savedMealIDs.length > 0) {
        const existingCollection = state.savedMealsArray.find(
          collection => collection.name === name && collection.type === type
        );

        if (existingCollection) {
          existingCollection.meals.push(...savedMealIDs);
        } else {
          state.savedMealsArray.push({
            date: currentDate,
            name,
            type,
            meals: savedMealIDs,
          });
        }
      }
    },
    summonSaveMealCollection: (
      state,
      action: PayloadAction<{ name: string; type: string }>
    ) => {
      const { name, type } = action.payload;
      const savedCollection = state.savedMealsArray.find(
        collection => collection.name === name && collection.type === type
      );

      if (savedCollection) {
        state.meals.forEach(meal => {
          meal.isAdded = false;
        });

        savedCollection.meals.forEach(savedMealId => {
          const meal = state.meals.find(meal => meal._id === savedMealId);
          if (meal) {
            meal.isAdded = true;
          }
        });
      }
    },
  },
});

export const { addMeal, removeMeal, createMeal, updateMeal, updateMealAmount, saveMealCollection, summonSaveMealCollection } = mealSlice.actions;
export default mealSlice.reducer;
