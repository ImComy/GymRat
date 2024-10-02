import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeMeal, updateMealAmount } from '../../app/mealSlice';

interface Meal {
  title: string;
  fats?: string;
  protein?: string;
  carbs?: string;
  calories?: string;
  _id: string;
  image?: string;
  isAdded?: boolean;
  onAdd?: (id: string) => void;
  amount?: number;
}

interface MealCardProps {
  meal: Meal;
  isAdded: boolean | undefined;
  onAdd: (id: string) => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(meal.amount || 100);

  useEffect(() => {
    dispatch(updateMealAmount({ _id: meal._id, amount }));
  }, [amount, dispatch, meal._id]);

  const handleRemove = () => {
    dispatch(removeMeal(meal._id));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    if (!isNaN(newAmount) && newAmount > 0) {
      setAmount(newAmount);
    }
  };

  const calculateNutrient = (value?: string) => {
    return value ? ((parseFloat(value) / 100) * amount).toFixed(1) : '0';
  };

  return (
    <section
      className="w-full md:w-full h-auto relative rounded-[23px] border border-black flex flex-col md:flex-row justify-between items-center lg:items-start shadow transition duration-300 ease-in-out lg:hover:scale-105">
      <article
        className="relative w-full sm:w-full md:max-w-[410px] lg:max-w-[350px] max-h-[170px] lg:max-h-[500px] bg-white
                   rounded-tl-[23px] rounded-bl-[0px] rounded-tr-[23px]
                   sm:rounded-tl-[23px] sm:rounded-bl-[0px] sm:rounded-tr-[23px]
                   md:rounded-tl-[23px] md:rounded-bl-[23px] md:rounded-tr-[0px]
                   lg:rounded-tl-[23px] lg:rounded-bl-[23px] lg:rounded-tr-[0px]
                   overflow-hidden shadow-md flex-shrink-[2]">
        <img
          className="w-full h-full object-cover"
          src={meal.image || 'https://via.placeholder.com/298x150'}
          alt={meal.title}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-extrabold text-center">
          {meal.title}
        </h2>
      </article>

      <div
        className="flex flex-col justify-center items-center flex-grow px-4 md:px-2 text-center lg:text-left md:items-center lg:items-center lg:justify-center lg:my-auto py-4 lg:py-0">
        <section className="flex items-center justify-center">
          <label className="text-black text-lg font-extrabold mr-4">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-20 sm:w-24 text-center text-lg font-medium text-black border border-gray-300 px-3 rounded-lg"
          />
          <span className="text-lg font-medium text-black ml-2">&nbsp;g</span>
        </section>

        <section className="flex flex-col mt-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10">
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <span className="text-black font-bold">
                Fats: <span className="text-gray-700 text-md font-semibold">{calculateNutrient(meal.fats)}&nbsp;g</span>
              </span>
              <span className="text-black font-bold">
                Protein: <span className="text-gray-700 text-md font-semibold">{calculateNutrient(meal.protein)}&nbsp;g</span>
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <span className="text-black font-bold">
                Carbs: <span className="text-gray-700 text-md font-semibold">{calculateNutrient(meal.carbs)}&nbsp;g</span>
              </span>
              <span className="text-black font-bold">
                Calories: <span className="text-gray-700 text-md font-semibold">{calculateNutrient(meal.calories)}&nbsp;kcal</span>
              </span>
            </div>
          </div>
        </section>
      </div>

      <button
        onClick={handleRemove}
        className="absolute top-[-5px] right-[-15px] w-10 h-8 sm:h-10 text-xl sm:text-2xl flex items-center justify-center text-center text-white bg-black rounded-full hover:bg-red-600 transition-transform duration-300 transform hover:scale-110 shadow-lg"
      >
        <span className="nf nf-oct-x"></span>
      </button>
    </section>
  );
};

export default MealCard;
