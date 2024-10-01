import React, { useState } from 'react';

interface Set {
  id: number;
  reps: string;
  weight: string;
}

const ExerciseCard: React.FC = () => {
  const [numSets, setNumSets] = useState<number>(4);
  const [sets, setSets] = useState<Set[]>([
    { id: 1, reps: '', weight: '' },
    { id: 2, reps: '', weight: '' },
    { id: 3, reps: '', weight: '' },
    { id: 4, reps: '', weight: '' },
  ]);

  const handleNumSetsChange = (value: string) => {
    const newNumSets = parseInt(value) || 0;
    setNumSets(newNumSets);

    if (newNumSets > sets.length) {
      const newSets = Array.from({ length: newNumSets - sets.length }, (_, i) => ({
        id: sets.length + i + 1,
        reps: '',
        weight: '',
      }));
      setSets([...sets, ...newSets]);
    } else {
      setSets(sets.slice(0, newNumSets));
    }
  };

  const handleInputChange = (id: number, field: keyof Set, value: string) => {
    setSets(sets.map(set => (set.id === id ? { ...set, [field]: value } : set)));
  };

  return (
    <main className="max-w-[398px] bg-white rounded-lg shadow font-['Inter']">
      <header className="relative">
        <div className="bg-[#ccff00] h-11 flex items-center justify-between rounded-t-lg">
          <h2 className="text-black text-lg font-extrabold ml-4">INCLINE DUMBBELL BENCH PRESS</h2>
          <button className="nf nf-md-trash_can_outline bg-black p-3 text-xl rounded-tr-lg hover:bg-red-600 transition duration-300"></button>
        </div>
        <img
          className="w-full h-[238px] object-cover"
          src="https://via.placeholder.com/398x238"
          alt="Exercise"
        />
      </header>

      <div className="p-4">
        <div className="flex justify-between text-black text-base font-bold space-x-2">
          <span className="w-1/6 text-center">Set</span>
          <span className="w-3/6 text-center">Reps</span>
          <span className="w-3/6 text-center">Weight(KG)</span>
          <span className="w-2/3 text-center">Previous</span>
        </div>

        {sets.map((set) => (
          <div key={set.id} className="flex justify-between gap-2 items-center mt-2 text-black">
            <div className="w-1/6 text-center">{set.id}</div>
            <input
              type="number"
              placeholder="Reps"
              value={set.reps}
              onChange={(e) => handleInputChange(set.id, 'reps', e.target.value)}
              className="w-3/6 px-1 py-1 border rounded-md text-center appearance-none"
            />
            <input
              type="number"
              placeholder="Weight"
              value={set.weight}
              onChange={(e) => handleInputChange(set.id, 'weight', e.target.value)}
              className="w-3/6 px-2 py-1 border rounded-md text-center appearance-none"
            />
            <div className="w-2/3 text-xs text-gray-600 text-center">15Reps X 10KG</div>
          </div>
        ))}
      </div>

      <div className="p-4 space-y-2">
        <button className="w-full bg-[#ccff00] text-black py-2 rounded-md font-bold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all duration-300 ease-in-out transform hover:scale-105">
          Finish Exercise
        </button>
        <div className="grid grid-cols-2 gap-4 text-black">
          <div className="flex items-center space-x-2 ml-3">
            <label htmlFor="numSets" className="font-bold">Sets:</label>
            <input
              id="numSets"
              type="number"
              value={numSets}
              onChange={(e) => handleNumSetsChange(e.target.value)}
              className="w-16 px-2 py-1 border rounded-md text-center"
              min={1}
            />
          </div>
          <button className="w-full border-2 border-black py-2 rounded-md font-bold bg-transparent hover:bg-[#ccff00] hover:border-[#ccff00] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
            History
          </button>
        </div>
      </div>
    </main>
  );
};

export default ExerciseCard;
