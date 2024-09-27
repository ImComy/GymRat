import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const MealStats = () => {
  const meals = useSelector((state: RootState) => state.meals.meals);

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

  const calculateProgressTotals = () => {
    const totals = calculateTableTotals();
    setUpdatedProtein(totals.protein);
    setUpdatedCarbs(totals.carbs);
    setUpdatedFats(totals.fats);
    setUpdatedCalories(totals.calories);
  };

  const tableTotals = calculateTableTotals();

  return (
    <div className="w-[428px] bg-[#f9f9f9] rounded-[20px] shadow flex flex-col font-['Inter']">
      <header className="bg-[#ccff00] h-[60px] flex justify-center items-center rounded-t-[20px] ">
        <h1 className="text-black text-2xl font-extrabold ">Meal’s Stats</h1>
      </header>

      <section className="px-6 py-4">
        <table className="w-full table-auto text-left">
          <tbody>
            <tr>
              <td className="py-2 text-lg font-semibold text-black border-b border-[#b6b6b6]">Total Protein</td>
              <td className="py-2 text-right text-base font-medium text-[#626262] border-b border-[#b6b6b6]">{tableTotals.protein}g</td>
            </tr>
            <tr>
              <td className="py-2 text-lg font-semibold text-black border-b border-[#b6b6b6]">Total Carbs</td>
              <td className="py-2 text-right text-base font-medium text-[#626262] border-b border-[#b6b6b6]">{tableTotals.carbs}g</td>
            </tr>
            <tr>
              <td className="py-2 text-lg font-semibold text-black border-b border-[#b6b6b6]">Total Fats</td>
              <td className="py-2 text-right text-base font-medium text-[#626262] border-b border-[#b6b6b6]">{tableTotals.fats}g</td>
            </tr>
            <tr>
              <td className="py-2 text-lg font-semibold text-black border-b border-[#b6b6b6]">Total Calories</td>
              <td className="py-2 text-right text-base font-medium text-[#626262] border-b border-[#b6b6b6]">{tableTotals.calories}kcal</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="flex justify-center mt-auto mb-6">
        <button
          onClick={calculateProgressTotals}
          className="w-[171px] py-3 bg-[#ccff00] rounded-lg text-center text-black font-bold hover:bg-lime-400 hover:scale-105 transition duration-300"
        >
          Update
        </button>
      </div>

      <section className="px-6 py-4 space-y-4">
        <ProgressBar label="Daily Protein" value={updatedProtein} max={100} />
        <ProgressBar label="Daily Calories" value={updatedCalories} max={2600} />
        <ProgressBar label="Daily Carbs" value={updatedCarbs} max={100} />
        <ProgressBar label="Daily Fats" value={updatedFats} max={100} />
      </section>
    </div>
  );
};

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
}

const ProgressBar = ({ label, value, max }: ProgressBarProps) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-semibold text-black ml-3">{label}</label>
        <div className="w-full h-6 bg-[#d9d9d9] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#ccff00] rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${(value / max) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="text-right text-sm text-[#676767]">{`${value}/${max}`}</div>
    </div>
  );
};

export default MealStats;
