"use client";

import React, { useState } from 'react';
import Path from '../../../components/path';
import BasicLineChart from '../../../components/graph';

type BodyComposition = {
  BMI: number;
  BMR: number;
  Weight: string;
  DailyProteinIntake: string;
  DailyCaloriesIntake: string;
  Height: string;
  DailyFatIntake: string;
  DailyCarbsIntake: string;
  MuscleMass: string;
  FatPercentage: string;
};

type StatHistory = {
  [key: string]: { date: string; value: number }[];
};

const Stats: React.FC = () => {
  const [bodyComposition, setBodyComposition] = useState<BodyComposition>({
    BMI: 22.5,
    BMR: 1500,
    Weight: '75kg',
    DailyProteinIntake: '120g',
    DailyCaloriesIntake: '2000kcal',
    Height: '175cm',
    DailyFatIntake: '60g',
    DailyCarbsIntake: '250g',
    MuscleMass: '65kg',
    FatPercentage: '15%',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [currentStat, setCurrentStat] = useState<{ key: string; value: string }>({ key: '', value: '' });
  const [numericValue, setNumericValue] = useState('');
  const [unit, setUnit] = useState('');
  const [selectedProperty, setSelectedProperty] = useState('');

  const [statHistory, setStatHistory] = useState<StatHistory>({
    BMI: [
      { date: '2023-09-01', value: 22.1 },
      { date: '2023-09-05', value: 22.3 },
      { date: '2023-09-10', value: 22.5 },
      { date: '2023-09-15', value: 22.4 },
    ],
    BMR: [
      { date: '2023-09-01', value: 1450 },
      { date: '2023-09-05', value: 1460 },
      { date: '2023-09-10', value: 1480 },
      { date: '2023-09-15', value: 1500 },
    ],
    Weight: [
      { date: '2023-09-01', value: 70 },
      { date: '2023-09-05', value: 72 },
      { date: '2023-09-10', value: 73 },
      { date: '2023-09-15', value: 75 },
    ],
    DailyProteinIntake: [
      { date: '2023-09-01', value: 110 },
      { date: '2023-09-05', value: 115 },
      { date: '2023-09-10', value: 120 },
      { date: '2023-09-15', value: 130 },
    ],
    DailyCaloriesIntake: [
      { date: '2023-09-01', value: 1800 },
      { date: '2023-09-05', value: 1900 },
      { date: '2023-09-10', value: 2000 },
      { date: '2023-09-15', value: 2100 },
    ],
    Height: [
      { date: '2023-09-01', value: 175 },
      { date: '2023-09-05', value: 165 },
      { date: '2023-09-10', value: 115 },
      { date: '2023-09-15', value: 165 },
    ],
    DailyFatIntake: [
      { date: '2023-09-01', value: 50 },
      { date: '2023-09-05', value: 55 },
      { date: '2023-09-10', value: 60 },
      { date: '2023-09-15', value: 65 },
    ],
    DailyCarbsIntake: [
      { date: '2023-09-01', value: 200 },
      { date: '2023-09-05', value: 210 },
      { date: '2023-09-10', value: 220 },
      { date: '2023-09-15', value: 230 },
    ],
    MuscleMass: [
      { date: '2023-09-01', value: 64 },
      { date: '2023-09-05', value: 64.5 },
      { date: '2023-09-10', value: 65 },
      { date: '2023-09-15', value: 65.5 },
    ],
    FatPercentage: [
      { date: '2023-09-01', value: 15 },
      { date: '2023-09-05', value: 14.8 },
      { date: '2023-09-10', value: 14.5 },
      { date: '2023-09-15', value: 14.3 },
    ],
  });

  const handleOpenModal = (key: string, value: string) => {
    const valueStr = String(value);
    const numericPart = valueStr.match(/[\d.]+/)?.[0] || '';
    const unitPart = valueStr.replace(numericPart, '');

    setCurrentStat({ key, value });
    setNumericValue(numericPart);
    setUnit(unitPart);
    setIsAnimatingOut(false);
    setIsModalOpen(true);
    setSelectedProperty(key);
  };

  const handleCloseModal = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedProperty('');
    }, 300);
  };

  const handleSave = () => {
    const updatedValue = numericValue + unit;

    setBodyComposition((prev) => ({
      ...prev,
      [currentStat.key]: updatedValue,
    }));

    const newHistoryEntry = {
      date: new Date().toISOString().split('T')[0],
      value: parseFloat(numericValue),
    };

    setStatHistory((prevHistory) => ({
      ...prevHistory,
      [selectedProperty]: [...(prevHistory[selectedProperty] || []), newHistoryEntry],
    }));

    handleCloseModal();
  };

  const selectedHistory = statHistory[selectedProperty] || [];
  const xAxisData = selectedHistory.map((entry) => entry.date);
  const seriesData = selectedHistory.map((entry) => entry.value);


  return (
    <main className="bg-white w-screen p-10 overflow-hidden">
      <header>
        <Path />
        <h1 className="text-black text-[40px] md:text-[80px] font-black leading-[56px] md:leading-[72px] sm:text-[60px] sm:leading-[44px] mt-3">
          Stats
        </h1>
      </header>

      <section className="mt-10 flex flex-col lg:flex-row justify-around">
        {/* Stats Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white w-full lg:max-w-[600px]">
          <div className="bg-[#ccff00] text-gray-900 w-full rounded-t-lg">
            <p className="px-6 py-4 text-2xl font-semibold">Stats</p>
          </div>
          <table className="min-w-full text-left">
            <tbody className="divide-y divide-gray-200">
              {Object.entries(bodyComposition).map(([key, value]) => (
                <tr
                  key={key}
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedProperty(key)}
                >
                  <td className="capitalize px-6 py-4 text-lg text-gray-700">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-900 flex justify-between items-center">
                    {value}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(String(key), String(value));
                      }}
                      className="ml-4 text-blue-500 hover:text-blue-700"
                    >
                      <span className="nf nf-fa-edit"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-between lg:h-full mt-8 lg:mt-0 lg:w-[40%]">
          <section className="flex items-center justify-between p-6 bg-gradient-to-r from-[#ccff00] to-green-500 rounded-lg shadow-lg text-white">
            <div className="flex items-center">
              <img
                src="/pfp.jpg"
                alt="Profile Picture"
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <h2 className="text-2xl font-bold">Ahmed El-Shazly</h2>
                <p className="text-lg">Age: 18</p>
                <p className="text-lg">Location: Ismailia, Egypt</p>
              </div>
            </div>
          </section>
          <div className="flex flex-col justify-center mt-10">
            <h1 className="text-black text-[40px] font-bold leading-9 mt-3 text-center">
              History
            </h1>
            {selectedHistory.length > 0 ? (
              <BasicLineChart xLabels={xAxisData} uData={seriesData} />
            ) : (
              <p className="text-center text-gray-500 my-5">
                No history to view yet, Click on one property or create your own history!
              </p>
            )}
            {selectedProperty && (
              <p className="text-center mt-4 text-gray-600">
                Currently viewing history for: <span className="font-bold">{selectedProperty}</span>
              </p>
            )}
          </div>
        </div>
      </section>


      {isModalOpen && (
        <div
          id="modal-bg"
          className={`fixed inset-0 bg-black/30  flex items-center justify-center z-50 ${
            isAnimatingOut ? 'animate-fade-out' : 'animate-fade-in'
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`bg-white rounded-lg p-6 shadow-lg w-1/3 relative ${
            isAnimatingOut ? 'animate-fade-out' : 'animate-fade-in'
          }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-[-10px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-full px-2 hover:bg-red-500 z-11"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="w-full h-[60px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-t-lg flex items-center justify-center relative mb-6">
              <span className="text-center text-black text-2xl font-extrabold">Edit {currentStat.key}</span>
            </div>
            <input
              type="number"
              value={numericValue}
              onChange={(e) => setNumericValue(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full text-black"
            />
            <p className="mt-2 text-black">Unit: {unit || "Unitless"}</p>
            <div className="flex justify-center mt-2">
              <button
                className="w-[180px] h-[45px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-full text-black font-bold transition-transform hover:scale-105" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default Stats;
