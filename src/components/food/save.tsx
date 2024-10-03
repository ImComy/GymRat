import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { saveMealCollection, summonSaveMealCollection } from '../../app/mealSlice';
import Heart from '../heart';

interface Meal {
  name: string;
  type: string;
  date: string;
}

const SaveMeals = () => {
  const [showSaveMealPopup, setShowSaveMealPopup] = useState(false);
  const [showSavedMealsPopup, setShowSavedMealsPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [mealName, setMealName] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSaveMealClick = () => {
    setShowSaveMealPopup(true);
    setIsClosing(false);
  };

  const handleSavedMealsClick = () => {
    setShowSavedMealsPopup(true);
    setIsClosing(false);
  };

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowSaveMealPopup(false);
      setShowSavedMealsPopup(false);
    }, 300);
  };

  const handleOutsideClick = (event: React.MouseEvent) => {
    const popup = document.querySelector('.popup');
    if (popup && event.target instanceof Element && !popup.contains(event.target)) {
      handleClosePopup();
    }
  };

  const handleMealClick = (meal: string) => {
    setSelectedMeal(meal);
  };

  const handleSaveMeal = () => {
    if (selectedMeal && mealName.trim() !== '') {
      dispatch(saveMealCollection({ name: mealName, type: selectedMeal }));
      setMealName('');
      setSelectedMeal(null);
      handleClosePopup();
    } else {
      alert('Please select a meal type and enter a meal name.');
    }
  };

  const handleSummonMeals = (name: string, type: string) => {
    dispatch(summonSaveMealCollection({ name, type }));
    handleClosePopup();
  };

  const mealsarray: Meal[] = [];
  const meals = useSelector((state: RootState) => state.meals.meals);
  const savedMealsArray = useSelector((state: any) => state.meals.savedMealsArray);

  const [updatedProtein, setUpdatedProtein] = useState(0);
  const [updatedCalories, setUpdatedCalories] = useState(0);
  const [updatedCarbs, setUpdatedCarbs] = useState(0);
  const [updatedFats, setUpdatedFats] = useState(0);

  const calculateTableTotals = () => {
    return meals.reduce((acc, meal) => {
      if (meal.isAdded) {
        acc.protein += parseInt(meal.protein || '0');
        acc.carbs += parseInt(meal.carbs || '0');
        acc.fats += parseInt(meal.fats || '0');
        acc.calories += parseInt(meal.calories || '0');
      }
      return acc;
    }, { protein: 0, carbs: 0, fats: 0, calories: 0 });
  };

  const tableTotals = calculateTableTotals();

  return (
    <div className="flex flex-col md:flex-row sm:flex-row gap-10">
      <button
        className="w-[214px] h-[53px] px-[19.14px] py-[8.61px] bg-gradient-to-r from-[#bfff00] to-[#ccff00] rounded-[9.57px] justify-center items-center gap-[9.57px] inline-flex transition duration-300 ease-in-out hover:scale-105 active:scale-100"
        onClick={handleSaveMealClick}
      >
        <span className="text-center text-black text-xl font-bold">Save Meal</span>
      </button>

      {showSaveMealPopup && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10 ${
            isClosing ? 'animate-fade-out' : 'animate-fade-in'
          }`}
          onClick={handleOutsideClick}
        >
          <div className="relative w-[428px] h-auto bg-white rounded-lg shadow-2xl popup px-8 py-3 transition-all duration-300 ease-out mt-[50px]">
            <button
              className="absolute top-0 right-[-10px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-full px-2 hover:bg-red-500 z-11"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <div className="w-full h-[60px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-t-lg flex items-center justify-center relative">
              <span className="text-center text-black text-2xl font-extrabold">Meal’s Stats</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                <button
                  key={meal}
                  onClick={() => handleMealClick(meal)}
                  className={`w-full h-[45px] rounded-md shadow-md flex items-center justify-center text-sm font-semibold transition-transform hover:scale-105
                    ${selectedMeal === meal ? 'bg-[#99ff00] text-white' : 'bg-white text-black'}`}
                >
                  {meal}
                </button>
              ))}
            </div>

            <div className="flex justify-around mt-4 gap-5">
              {['Pre-workout', 'Snack'].map((meal) => (
                <button
                  key={meal}
                  onClick={() => handleMealClick(meal)}
                  className={`w-full h-[45px] rounded-md shadow-md flex items-center justify-center text-sm font-semibold transition-transform hover:scale-105
                    ${selectedMeal === meal ? 'bg-[#99ff00] text-white' : 'bg-white text-black'}`}
                >
                  {meal}
                </button>
              ))}
            </div>

            <div className="mt-6 w-full mx-auto bg-gray-100 rounded-full border border-gray-300 px-3 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Enter your meal’s name..."
                className="w-full bg-transparent text-gray-700 text-sm font-medium focus:outline-none"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
              />
            </div>

            <div className="mt-8 space-y-4 text-sm text-gray-800">
              {[
                { label: 'Total Protein:', value: `${tableTotals.protein}g` },
                { label: 'Total Carbs:', value: `${tableTotals.carbs}g` },
                { label: 'Total Fats:', value: `${tableTotals.fats}g` },
                { label: 'Total Calories:', value: `${tableTotals.calories}kcal` },
              ].map(({ label, value }, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-semibold">{label}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                className="w-[180px] h-[45px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-full text-black font-bold transition-transform hover:scale-105"
                onClick={handleSaveMeal}
              >
                Save Meal
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        className="w-[217px] h-[53.74px] px-[19.41px] py-[8.73px] bg-white rounded-[9.70px] border border-black justify-center items-center gap-[9.70px] inline-flex transition duration-300 ease-in-out hover:bg-[#f7f7f7] hover:scale-105 active:bg-[#e7e7e7] active:scale-95"
        onClick={handleSavedMealsClick}
      >
        <span className="text-center text-[#434343] text-xl font-bold">Saved Meals</span>
      </button>

      {showSavedMealsPopup && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10 ${
            isClosing ? 'animate-fade-out' : 'animate-fade-in'
          }`}
          onClick={handleOutsideClick}
        >
          <div className="relative w-[536px] h-auto bg-white rounded-lg shadow-2xl popup px-6 py-5 transition-all duration-300 ease-out mt-[50px]">
            <button
              className="absolute top-0 right-[-10px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-full px-2 hover:bg-red-500 z-11"
              onClick={handleClosePopup}
            >
              &times;
            </button>

            <div className="w-full h-[60px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-t-lg flex items-center justify-center relative mb-5">
              <span className="text-center text-black text-2xl font-extrabold">Saved Meals</span>
            </div>

            <div className="flex items-center w-full mb-3 border border-grey-600 rounded-full">
              <span className="ml-3 absolute text-gray-400">
                <i className="nf nf-seti-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pl-10 rounded-full text-black focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="w-full flex justify-between text-[#505050] text-sm font-semibold mb-3 px-3">
              <span>Name</span>
              <span>Meal Type</span>
              <span>Day added</span>
            </div>

            {savedMealsArray && savedMealsArray.length > 0 ? (
              savedMealsArray.filter((savedMeal: Meal) =>
                savedMeal.name.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((savedMeal: Meal, index: number) => (
                <button
                  key={index}
                  className="meal-row w-full bg-white rounded shadow px-5 py-2 flex justify-between mb-3 transition-transform hover:scale-105 transition duration-300 text-sm"
                  onClick={() => handleSummonMeals(savedMeal.name, savedMeal.type)}>
                  <span className="text-black font-semibold">{savedMeal.name}</span>
                  <span className="text-black font-semibold">{savedMeal.type}</span>
                  <span className="text-black font-semibold">{savedMeal.date}</span>
                </button>
              ))
            ) : (
              <p className="text-gray-500 text-sm text-center pt-3">No saved meals.</p>
            )}

          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SaveMeals;
