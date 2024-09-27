import React from 'react';
import './styles.css';
import { addMeal, removeMeal } from '../../app/mealSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface Props {
  Id: string;
  _id: string;
  title: string;
  src: string;
  image?: string;
  calories?: string;
  protein?: string;
  fats?: string;
  carbs?: string;
  isAdded?: boolean;
}

const Card: React.FC<Props> = ({ _id, image, title, calories, protein, fats, carbs }) => {
  const dispatch = useDispatch();

  const isAdded = useSelector((state: RootState) =>
    state.meals.meals.find(meal => meal._id === _id)?.isAdded
  );

  const handleAddMeal = () => {
    dispatch(addMeal(_id));
  };

  const handleRemoveMeal = () => {
    dispatch(removeMeal(_id));
  };

  const placeholderImage = 'https://via.placeholder.com/276x177';

  return (
    <div className="w-[276px] h-[321px] relative bg-white rounded-[5px] shadow transition duration-300 ease-in-out hover:scale-105 overflow-hidden group">
      <img
        className="w-full h-[177px] rounded-t-[5px] absolute top-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-200px] z-1"
        src={image || placeholderImage}
        alt={title}
      />
      <div className="flex justify-center items-center h-[51px] bg-white absolute top-[177px] left-0 right-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-150px] group-hover:translate-x-[-70px]">
        <div className="text-center text-black text-3xl font-extrabold font-['Inter'] leading-7">{title}</div>
      </div>
      <div className="text-center text-[#3a3a3a] text-lg font-medium font-['Inter'] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out right-5 top-9"> per 100g </div>
      <table className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out w-[250px] h-[170px] top-20 text-[#3a3a3a] text-lg font-medium font-['Inter'] display-block mx-4">
        <tbody>
          <tr>
            <td className="border-b border-[#b6b6b6]">Calories</td>
            <td className="border-b border-[#b6b6b6]">{calories}</td>
          </tr>
          <tr>
            <td className="border-b border-[#b6b6b6]">Protein</td>
            <td className="border-b border-[#b6b6b6]">{protein}</td>
          </tr>
          <tr>
            <td className="border-b border-[#b6b6b6]">Fats</td>
            <td className="border-b border-[#b6b6b6]">{fats}</td>
          </tr>
          <tr>
            <td className="border-b border-[#b6b6b6]">Carbs</td>
            <td className="border-b border-[#b6b6b6]">{carbs}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-center mt-6 absolute bottom-3 left-0 right-0 transition-transform duration-500 ease-in-out">
        {isAdded ? (
          <div className="text-center text-green-500 text-lg font-semibold">Added!</div>
        ) : (
          <button
            onClick={handleAddMeal}
            className="grid place-items-center h-[40.56px] w-[165px] bg-[#ccff00] rounded-[13.83px] transition duration-300 ease-in-out hover:scale-105"
          >
            <div className="text-center text-black text-lg font-semibold font-['Inter']">Add to Meal</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
