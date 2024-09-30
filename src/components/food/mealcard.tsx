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
    <section className="w-[740px] h-[150px] relative rounded-[23px] border border-black flex justify-between items-start shadow transition duration-300 ease-in-out hover:scale-105">
      <article className="relative w-[298px] h-[150] bg-white rounded-l-[23px] overflow-hidden shadow-md">
        <img
          className="w-full h-[148px] object-cover"
          src={meal.image || 'https://via.placeholder.com/298x150'}
          alt={meal.title}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-extrabold">
          {meal.title}
        </h2>
      </article>

      <div className="flex flex-col justify-between items-center flex-grow p-4">
        <section className="flex mr-24">
          <label className="text-black text-lg font-extrabold mr-6">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-24 text-center text-lg font-medium text-black border border-gray-300 px-3 rounded-lg"
          />
          <span className="text-lg font-medium text-black">&nbsp;g</span>
        </section>

        <section className="flex justify-between mt-4 gap-x-9">
          <div className="flex flex-col items-start space-y-2">
            <span className="text-black font-bold ">Fats: <span className="text-gray-700 text-md font-semibold px-3">{calculateNutrient(meal.fats)}&nbsp;g</span></span>
            <span className="text-black font-bold ">Protein: <span className="text-gray-700 text-md font-semibold px-3">{calculateNutrient(meal.protein)}&nbsp;g</span></span>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <span className="text-black font-bold ">Carbs: <span className="text-gray-700 text-md font-semibold px-3">{calculateNutrient(meal.carbs)}&nbsp;g</span></span>
            <span className="text-black font-bold ">Calories: <span className="text-gray-700 text-md font-semibold px-3">{calculateNutrient(meal.calories)}&nbsp;kcal</span></span>
          </div>
        </section>
      </div>

      <button
        onClick={handleRemove}
        className="absolute top-[-5px] right-[-10px] w-10 h-10 text-2xl flex items-center justify-center text-center text-white bg-black rounded-full hover:bg-red-600 transition-transform duration-300 transform hover:scale-110 shadow-lg">
        <span className="nf nf-oct-x"></span>
      </button>
    </section>
  );
};

export default MealCard;
