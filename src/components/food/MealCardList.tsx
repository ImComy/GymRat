import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MealCard from './mealcard';
import MealStats from './stats';
import { RootState } from '../../app/store';
import { addMeal } from '../../app/mealSlice';

interface MealCardListProps {
  searchQuery: string;
  selectedOption: string;
  sortOrder: 'asc' | 'desc';
}

const MealCardList: React.FC<MealCardListProps> = ({ searchQuery, selectedOption, sortOrder }) => {
  const meals = useSelector((state: RootState) => state.meals.meals);
  const dispatch = useDispatch();

  const handleAddMeal = (id: string) => {
    dispatch(addMeal(id));
  };

  const filteredMeals = meals.filter(meal => {
    return meal.title.includes(searchQuery);
  });

  const sortedMeals = [...filteredMeals].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const addedMeals = sortedMeals.filter(meal => meal.isAdded);

  return (
    <main className="flex justify-between mt-10">
      <section className="grid grid-cols-2 w-2/3 gap-3">
        {addedMeals.length > 0 ? (
          addedMeals.map(meal => (
            <MealCard
              key={meal._id}
              meal={meal}
              isAdded={meal.isAdded}
              onAdd={handleAddMeal}
            />
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-500 text-lg">
            No meals have been added yet. Please add meals to see them here.
          </div>
        )}
      </section>

      <aside className="w-1/3">
        <MealStats />
      </aside>
    </main>
  );
};

export default MealCardList;
