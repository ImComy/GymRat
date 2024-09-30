import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const MealStats = () => {
  const meals = useSelector((state: RootState) => state.meals.meals);

  const [protein, setProtein] = useState(0);
  const [calories, setCalories] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);

  const [updatedProtein, setUpdatedProtein] = useState(0);
  const [updatedCalories, setUpdatedCalories] = useState(0);
  const [updatedCarbs, setUpdatedCarbs] = useState(0);
  const [updatedFats, setUpdatedFats] = useState(0);

  const [lastUpdatedDate, setLastUpdatedDate] = useState(new Date().toDateString());

  const calculateTableTotals = () => {
    return meals.reduce(
      (acc, meal) => {
        if (meal.isAdded) {
          const amountRatio = (meal.amount || 100) / 100;
          acc.protein += parseInt(meal.protein || '0') * amountRatio;
          acc.carbs += parseInt(meal.carbs || '0') * amountRatio;
          acc.fats += parseInt(meal.fats || '0') * amountRatio;
          acc.calories += parseInt(meal.calories || '0') * amountRatio;
        }
        return acc;
      },
      { protein: 0, carbs: 0, fats: 0, calories: 0 }
    );
  };

  useEffect(() => {
    const totals = calculateTableTotals();
    setProtein(totals.protein);
    setCarbs(totals.carbs);
    setFats(totals.fats);
    setCalories(totals.calories);
  }, [meals]);

  useEffect(() => {
    const currentDate = new Date().toDateString();
    const savedDate = localStorage.getItem('lastUpdatedDate');

    if (savedDate !== currentDate) {
      setUpdatedProtein(0);
      setUpdatedCarbs(0);
      setUpdatedFats(0);
      setUpdatedCalories(0);
      setLastUpdatedDate(currentDate);
      localStorage.setItem('lastUpdatedDate', currentDate);
    }
  }, []);

  const updateProgress = () => {
    setUpdatedProtein((prev) => prev + protein);
    setUpdatedCarbs((prev) => prev + carbs);
    setUpdatedFats((prev) => prev + fats);
    setUpdatedCalories((prev) => prev + calories);

    localStorage.setItem('updatedProtein', (updatedProtein + protein).toString());
    localStorage.setItem('updatedCarbs', (updatedCarbs + carbs).toString());
    localStorage.setItem('updatedFats', (updatedFats + fats).toString());
    localStorage.setItem('updatedCalories', (updatedCalories + calories).toString());
  };

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
              <td className="py-2 text-right text-base font-medium text-[#626262] border-b border-[#b6b6b6]">
                {protein.toFixed(1)}g
              </td>
            </tr>
            <tr>
              <td className="py-2 text-lg font-semibold text-black border-b border-[#b6b6b6]">Total Carbs</td>
              <td className="py-2 text-right text-base font-medium text-[#626262] border-b border-[#b6b6b6]">
                {carbs.toFixed(1)}g
              </td>
            </tr>
            <tr>
              <td className="py-2 text-lg font-semibold text-black border-b border-[#b6b6b6]">Total Fats</td>
              <td className="py-2 text-right text-base font-medium text-[#626262] border-b border-[#b6b6b6]">
                {fats.toFixed(1)}g
              </td>
            </tr>
            <tr>
              <td className="py-2 text-lg font-semibold text-black border-b border-[#b6b6b6]">Total Calories</td>
              <td className="py-2 text-right text-base font-medium text-[#626262] border-b border-[#b6b6b6]">
                {calories.toFixed(1)}kcal
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="flex justify-center mt-auto mb-6">
        <button
          onClick={updateProgress}
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
  const progressPercentage = (value / max) * 100;
  const progressColor = progressPercentage >= 100 ? '#ff0000' : '#ccff00';

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-semibold text-black ml-3">{label}</label>
        <div className="w-full h-6 bg-[#d9d9d9] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: progressColor,
              transition: 'background-color 0.5s ease, width 0.5s ease'
            }}
          ></div>
        </div>
      </div>
      <div className="text-right text-sm text-[#676767]">{`${value.toFixed(1)}/${max}`}</div>
    </div>
  );
};


export default MealStats;
