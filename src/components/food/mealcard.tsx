import React from 'react';
import { useDispatch } from 'react-redux';
import { removeMeal } from '../../app/mealSlice';

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
}

interface MealCardProps {
  meal: Meal;
  isAdded: boolean | undefined;
  onAdd: (id: string) => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  const dispatch = useDispatch();

  if (!meal) {
    return null;
  }

  const { title, fats, protein, carbs, calories, _id, image } = meal;

  const handleRemove = () => {
    dispatch(removeMeal(_id));
  };

  return (
    <main className="w-[328px] h-[286px] bg-white rounded-[5px] flex flex-col items-start shadow transition duration-300 ease-in-out hover:scale-105 overflow-hidden">
      <div className="relative w-full h-[116px] bg-white">
        <img
          className="w-full h-full object-cover"
          src={image || 'https://via.placeholder.com/333x116'}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="absolute inset-0 flex justify-center items-center text-white text-2xl font-extrabold">
          {title}
        </h2>
      </div>

      <div className="w-full flex flex-col items-start px-4 py-2 space-y-2">
        <div className="flex w-full gap-4">
          <label className="text-lg font-extrabold text-black">Amount</label>
          <input
            type="number"
            className="w-36 text-center text-lg font-medium text-black border px-3"
            placeholder="100"
          />
          <span className="text-lg font-medium text-black">g</span>
        </div>
        <div className="flex gap-20 py-3">
          <div className="flex flex-col gap-3">
            <div className="text-md text-[#626262] leading-[14.40px]">Fats: {fats}</div>
            <div className="text-md text-[#626262] leading-[14.40px]">Protein: {protein}</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-md text-[#626262] leading-[14.40px]">Carbs: {carbs}</div>
            <div className="text-md text-[#626262] leading-[14.40px]">Calories: {calories}</div>
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
