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
    <main className="w-[328px] h-[310px] bg-white rounded-[5px] flex flex-col items-start shadow transition duration-300 ease-in-out hover:scale-105 overflow-hidden">
      <div className="relative w-full h-[116px] bg-white">
        <img
          className="w-full h-full object-cover"
          src={meal.image || 'https://via.placeholder.com/333x116'}
          alt={meal.title}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="absolute inset-0 flex justify-center items-center text-white text-2xl font-extrabold">
          {meal.title}
        </h2>
      </div>

      <div className="w-full flex flex-col items-start px-4 py-2 space-y-2">
        <div className="flex w-full gap-4">
          <label className="text-lg font-extrabold text-black">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-36 text-center text-lg font-medium text-black border px-3"
            placeholder="100"
          />
          <span className="text-lg font-medium text-black">g</span>
        </div>
        <div className="flex gap-20 py-3">
          <div className="flex flex-col gap-3">
            <div className="text-md text-[#626262] leading-[14.40px]">Fats: {calculateNutrient(meal.fats)}g</div>
            <div className="text-md text-[#626262] leading-[14.40px]">Protein: {calculateNutrient(meal.protein)}g</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-md text-[#626262] leading-[14.40px]">Carbs: {calculateNutrient(meal.carbs)}g</div>
            <div className="text-md text-[#626262] leading-[14.40px]">Calories: {calculateNutrient(meal.calories)}kcal</div>
          </div>
        </div>

        <button
          onClick={handleRemove}
          className="w-full py-2 bg-black text-white text-sm font-extrabold rounded-xl hover:bg-red-600 hover:scale-105 transition duration-300"
        >
          Remove
        </button>
      </div>
    </main>
  );
};

export default MealCard;
