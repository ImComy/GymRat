import React, { useState } from "react";

interface RoutineOption {
  id: number;
  label: string;
}

const routines: RoutineOption[] = [
  { id: 1, label: "Push" },
  { id: 2, label: "Pull" },
  { id: 3, label: "Legs" },
  { id: 4, label: "Full Body" },
  { id: 5, label: "Cardio" },
  { id: 6, label: "Others" },
];

const GymRoutineSelector: React.FC = () => {
  const [selectedRoutine, setSelectedRoutine] = useState<string>("");

  const handleSelectRoutine = (routine: string) => {
    setSelectedRoutine(routine);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-3xl text-white mb-6 font-bold tracking-wide">
        Select Your Favorite Gym Routine
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {routines.map((routine) => (
          <button
            key={routine.id}
            onClick={() => handleSelectRoutine(routine.label)}
            className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg
                        bg-blue-500 text-white hover:bg-blue-400 transition-all duration-300
                        transform hover:scale-105 active:scale-95 ${
                          selectedRoutine === routine.label
                            ? "ring-4 ring-blue-300"
                            : ""
                        }`}
          >
            {routine.label}
          </button>
        ))}
      </div>

      {selectedRoutine && (
        <div
          className="mt-8 p-4 text-center text-xl bg-green-500 text-white rounded-lg
                     animate-bounce transition-all duration-500"
        >
          You selected: {selectedRoutine}
        </div>
      )}
    </div>
  );
};

export default GymRoutineSelector;
