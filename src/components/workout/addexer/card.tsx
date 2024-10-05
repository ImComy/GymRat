import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkWorkout, uncheckWorkout } from '../../../app/workoutslice';
import { RootState } from '../../../app/store';

interface MuscleWorked {
  primary: string;
  secondary: string;
}

interface Instruction {
  label: string;
  text: string;
}

interface Benefit {
  label: string;
  text: string;
}

interface CommonMistake {
  label: string;
  text: string;
}

interface CardProps {
  _id: string;
  name: string;
  type: string;
  isChecked: boolean;
  youtubeLink?: string;
  imageUrl: string;
  musclesWorkedIMG: string;
  muscleGroup: string;
  routineGroup: string;
  musclesWorked: MuscleWorked;
  instructions: Instruction[];
  benefits: Benefit[];
  commonMistakes: CommonMistake[];
  onViewDetails: (exercise: { _id: string; name: string; type: string; isChecked: boolean; imageUrl: string;}) => void;
}


const Card: React.FC<CardProps> = ({
  _id,
  name,
  type,
  isChecked: initialChecked,
  imageUrl,
  onViewDetails,
}) => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state: RootState) =>
    state.workouts.workouts.find(workout => workout._id === _id)?.isChecked
  );

  const handleCheckWorkout = () => {
    if (isChecked) {
      dispatch(uncheckWorkout(_id));
    } else {
      dispatch(checkWorkout(_id));
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[366px] h-[80px] flex items-center gap-4">
      <button
        className="relative w-6 h-6 flex items-center justify-center transition-all duration-300"
        onClick={handleCheckWorkout}
      >
        <span
          className={`inline-block nf nf-fa-check text-xl transition-all duration-300 ease-in-out transform ${
            isChecked ? 'scale-105 text-green-500 opacity-100' : 'scale-0 opacity-0'
          }`}
        />
        <span
          className={`absolute text-[30px] transition-all duration-300 ease-in-out transform ${
            !isChecked ? 'scale-105 opacity-100 text-black' : 'scale-0 opacity-0'
          }`}
        >
          +
        </span>
      </button>

      <img src={imageUrl} alt="exercise" className="w-[79px] h-[79px]" />

      <div className="flex flex-col justify-center">
        <h3 className="text-black text-base font-bold font-['Inter']">{name}</h3>
        <p className="text-black/50 text-[11.05px] font-bold font-['Inter']">{type}</p>
      </div>

      <button
        onClick={() =>
          onViewDetails({
            _id,
            name,
            type,
            isChecked,
            imageUrl,
          })
        }
        className="ml-auto text-black text-sm font-bold leading-5 text-left w-10 border-l-2 border-black pl-4 mr-5"
      >
        <span>View Details</span>
      </button>
    </div>
  );
};

export default Card;
