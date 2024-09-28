import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MealCard from './mealcard';
import MealStats from './stats';
import { RootState } from '../../app/store';
import { addMeal } from '../../app/mealSlice';

interface MealCardListProps {
  selectedOption: string;
  sortOrder: 'asc' | 'desc';
}

const MealCardList: React.FC<MealCardListProps> = ({ selectedOption, sortOrder }) => {
  const meals = useSelector((state: RootState) => state.meals.meals);
  const dispatch = useDispatch();

  const handleAddMeal = (id: string) => {
    dispatch(addMeal(id));
  };

  const sortedMeals = [...meals].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const addedMeals = sortedMeals.filter(meal => meal.isAdded);

  return (
    <main className="flex justify-between mt-10 gap-12">
      <section className="flex flex-col gap-y-5">
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
          <div className="text-center text-gray-500 text-lg ml-20">
            No meals have been added yet. Please add meals to see them here.
          </div>
        )}
      </section>

      <aside className="">
        <MealStats />
      </aside>
    </main>
  );
};

export default MealCardList;