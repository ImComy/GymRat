import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BasicLineChart from '../graph';

interface Set {
  id: number;
  reps: string;
  weight: string;
}

interface HistoryEntry {
  date: string;
  sets: Set[];
}

const ExerciseCard: React.FC = () => {
  const [numSets, setNumSets] = useState<number>(3);
  const [sets, setSets] = useState<Set[]>([
    { id: 1, reps: '', weight: '' },
    { id: 2, reps: '', weight: '' },
    { id: 3, reps: '', weight: '' },
  ]);
const [history, setHistory] = useState<HistoryEntry[]>([
  {
    date: new Date('2023-09-01').toLocaleDateString(),
    sets: [
      { id: 1, reps: '10', weight: '40' },
      { id: 2, reps: '8', weight: '42' },
      { id: 3, reps: '6', weight: '45' },
    ],
  },
  {
    date: new Date('2023-09-03').toLocaleDateString(),
    sets: [
      { id: 1, reps: '12', weight: '38' },
      { id: 2, reps: '10', weight: '40' },
      { id: 3, reps: '8', weight: '42' },
    ],
  },
  {
    date: new Date('2023-09-05').toLocaleDateString(),
    sets: [
      { id: 1, reps: '15', weight: '35' },
      { id: 2, reps: '12', weight: '38' },
      { id: 3, reps: '10', weight: '40' },
    ],
  },
  {
    date: new Date('2023-09-07').toLocaleDateString(),
    sets: [
      { id: 1, reps: '8', weight: '50' },
      { id: 2, reps: '6', weight: '52' },
      { id: 3, reps: '4', weight: '55' },
    ],
  },
  {
    date: new Date('2023-09-10').toLocaleDateString(),
    sets: [
      { id: 1, reps: '10', weight: '45' },
      { id: 2, reps: '8', weight: '47' },
      { id: 3, reps: '6', weight: '50' },
    ],
  },
  {
    date: new Date('2023-09-12').toLocaleDateString(),
    sets: [
      { id: 1, reps: '12', weight: '40' },
      { id: 2, reps: '10', weight: '42' },
      { id: 3, reps: '8', weight: '45' },
    ],
  },
  {
    date: new Date('2023-09-15').toLocaleDateString(),
    sets: [
      { id: 1, reps: '15', weight: '38' },
      { id: 2, reps: '12', weight: '40' },
      { id: 3, reps: '10', weight: '43' },
    ],
  },
  {
    date: new Date('2023-09-17').toLocaleDateString(),
    sets: [
      { id: 1, reps: '8', weight: '48' },
      { id: 2, reps: '6', weight: '50' },
      { id: 3, reps: '4', weight: '53' },
    ],
  },
  {
    date: new Date('2023-09-19').toLocaleDateString(),
    sets: [
      { id: 1, reps: '10', weight: '45' },
      { id: 2, reps: '8', weight: '47' },
      { id: 3, reps: '6', weight: '50' },
    ],
  },
  {
    date: new Date('2023-09-21').toLocaleDateString(),
    sets: [
      { id: 1, reps: '12', weight: '42' },
      { id: 2, reps: '10', weight: '44' },
      { id: 3, reps: '8', weight: '46' },
    ],
  },
  {
    date: new Date('2023-09-25').toLocaleDateString(),
    sets: [
      { id: 1, reps: '15', weight: '40' },
      { id: 2, reps: '12', weight: '43' },
      { id: 3, reps: '10', weight: '45' },
    ],
  },
  {
    date: new Date('2023-09-27').toLocaleDateString(),
    sets: [
      { id: 1, reps: '8', weight: '48' },
      { id: 2, reps: '6', weight: '50' },
      { id: 3, reps: '4', weight: '53' },
    ],
  },
  {
    date: new Date('2023-09-30').toLocaleDateString(),
    sets: [
      { id: 1, reps: '10', weight: '45' },
      { id: 2, reps: '8', weight: '47' },
      { id: 3, reps: '6', weight: '50' },
    ],
  },
  {
    date: new Date('2023-10-01').toLocaleDateString(),
    sets: [
      { id: 1, reps: '12', weight: '50' },
      { id: 2, reps: '10', weight: '52' },
      { id: 3, reps: '8', weight: '55' },
    ],
  },
]);

  const [open, setOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [visibleRows, setVisibleRows] = useState(5);
  const [isChecked, setIsChecked] = useState(false);

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

  const handleFinishExercise = () => {
    const date = new Date().toLocaleDateString();
    const validSets = sets.filter(set => set.reps && set.weight);
    if (validSets.length === 0) return;

    setIsChecked(true);
    setTimeout(() => {
      setIsChecked(false);
    }, 1000);

    setHistory(prev => [...prev, { date, sets: validSets }]);
    setSets(sets.map(set => ({ ...set, reps: '', weight: '' })));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewMore = () => {
    setVisibleRows((prev) => prev + 5);
  };

  useEffect(() => {
    if (!open) {
      setVisibleRows(5);
      setViewMore(false);
    }
  }, [open]);


  const xAxisData = history.map(entry => entry.date);
  const seriesData = history.map(entry => {
    const totalWeight = entry.sets.reduce((sum, set) => sum + Number(set.weight), 0);
    const averageWeight = totalWeight / entry.sets.length;
    return averageWeight;
});


  return (
    <main className="max-w-[398px] bg-white rounded-lg shadow font-['Inter']">
      <header className="relative">
        <div className="bg-[#ccff00] h-11 flex items-center justify-between rounded-t-lg">
          <h2 className="text-black text-lg font-extrabold ml-4">INCLINE DUMBBELL BENCH PRESS</h2>
          <button onClick={handleFinishExercise} className={`p-2 px-3 w-12 h-11 flex justify-center items-center text-xl rounded-tr-lg transition-colors duration-500 ease-in-out transform ${isChecked ? 'bg-green-600' : 'bg-black hover:bg-red-600'}`}>
            <span className={`absolute transition-all duration-500 ease-in-out transform ${isChecked ? 'opacity-100 scale-125' : 'opacity-0 scale-0'}`}>✔️</span>
            <span className={`absolute transition-all duration-500 ease-in-out transform ${isChecked ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
              <i className="nf nf-md-trash_can_outline"></i>
            </span>
          </button>
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

        {sets.map((set, index) => (
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
            <div className="w-2/3 text-xs text-gray-600 text-center">
              {history.length > 0 && history[history.length - 1].sets[index]
                ? `${history[history.length - 1].sets[index].reps} Reps X ${history[history.length - 1].sets[index].weight} KG`
                : 'N/A'}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 space-y-2">
        <button
          onClick={handleFinishExercise}
          className="w-full bg-[#ccff00] text-black py-2 rounded-md font-bold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all duration-300 ease-in-out transform hover:scale-105">
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
          <button
            onClick={handleOpen}
            className="w-full border-2 border-black py-2 rounded-md font-bold bg-transparent hover:bg-[#ccff00] hover:border-[#ccff00] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
            History
          </button>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth className="flex-col flex items-center font-['Inter']">
        <DialogContent className="w-[600px]">
          <div className="w-full h-[60px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-t-lg flex items-center justify-center relative">
            <span className="text-center text-black text-2xl font-extrabold">INCLINE DUMBBELL BENCH PRESS</span>
          </div>
          <div className=" mt-4">
            <table className="min-w-full text-left border-collapse rounded-b-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#ccff00] to-[#bfff00] text-black">
                  <th className="p-4 border-b border-gray-300 text-center text-lg">Date</th>
                  {Array.from({ length: numSets }).map((_, index) => (
                    <th key={index} className="p-4 border-b border-gray-300 text-center text-lg">Set {index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {history.slice().reverse().slice(0, visibleRows).map((entry, idx) => (
                  <tr key={idx} className="odd:bg-gray-200 even:bg-white hover:bg-gray-300">
                    <td className={`p-4 text-center font-medium border-r-4 border-dashed border-[#ccff00] ${idx === visibleRows - 1 ? 'border-b-0' : 'border-b'}`}>
                      {new Date(entry.date).toLocaleDateString()}
                    </td>
                    {Array.from({ length: numSets }).map((_, index) => {
                      const set = entry.sets[index];
                      return (
                        <td key={index} className={`p-4 text-center font-medium ${idx === visibleRows - 1 ? 'border-b-0' : 'border-b border-gray-300'}`}>
                          {set ? `${set.reps} x ${set.weight}` : '—'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            {visibleRows < history.length && (
              <Button onClick={handleViewMore} variant="outlined" color="primary" style={{ backgroundColor: 'transparent', color: 'black', borderColor: 'black' }}>
                View More
              </Button>
            )}
          </div>
          {xAxisData.length > 0 && seriesData.length > 0 ? (
            <div className="flex justify-center">
            <BasicLineChart xLabels={xAxisData} uData={seriesData} />
            </div>
          ) : (
            <div>No data to display</div>
          )}
          <div className="flex justify-center mt-4">
            <Button onClick={handleClose} aria-label="close" variant="outlined" color="primary" style={{ backgroundColor: 'transparent', color: 'black', borderColor: 'black' }}>
              Back to Exercise
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default ExerciseCard;
