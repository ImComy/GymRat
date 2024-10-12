"use client";

import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import Path from "../../components/path";
import Settings from "../../components/profile/settings";
import SavedList from "../../components/profile/savedList";

const Profile: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const savedWorkouts = [
    { name: "Leg Day", type: "Workout", date: "2024-10-10" },
    { name: "Back and Biceps", type: "Workout", date: "2024-10-08" },
  ];

  const savedMeals = [
    { name: "Chicken Salad", type: "Meal", date: "2024-10-09" },
    { name: "Protein Shake", type: "Meal", date: "2024-10-07" },
    { name: "Chicken Salad", type: "Meal", date: "2024-10-09" },
    { name: "Protein Shake", type: "Meal", date: "2024-10-07" },
    { name: "Chicken Salad", type: "Meal", date: "2024-10-09" },
    { name: "Protein Shake", type: "Meal", date: "2024-10-07" },
    { name: "Chicken Salad", type: "Meal", date: "2024-10-09" },
    { name: "Protein Shake", type: "Meal", date: "2024-10-07" },
  ];

  return (
    <main className="bg-white w-screen p-10 overflow-hidden">
      <header className="relative">
        <Path />
        <h1 className="text-black text-[40px] md:text-[80px] font-black leading-[56px] md:leading-[72px] sm:text-[60px] sm:leading-[44px] mt-3">
          User Profile
        </h1>
      </header>

      <section className="flex flex-col md:flex-row items-start justify-between p-6 bg-gradient-to-r from-[#ccff00] to-green-500 rounded-lg shadow-lg text-white m-0 md:m-10 gap-10">
            <div className="relative bg-white text-black rounded-lg p-6 shadow-md flex flex-col items-center w-full md:w-1/2 mb-4 md:mb-0">
                  <FiSettings
                        onClick={handleSettingsClick}
                        className="absolute top-5 right-3 text-4xl cursor-pointer text-grey-300 hover:text-green-600 transition-colors duration-300"
                  />
                  <div>
                        <img
                              src="/pfp.jpg"
                              alt="Profile Picture"
                              className="w-32 h-32 rounded-[20px] border-4 border-white shadow-lg mb-4 transition-transform transform hover:scale-110 duration-300"
                        />
                  </div>
                  <div className="flex flex-col text-center">
                        <h2 className="text-3xl font-bold mb-1 transition-colors duration-300 hover:text-green-500">
                              Ahmed El-Shazly
                        </h2>
                        <p className="text-xl mb-1">Age: <span className="font-semibold">18</span></p>
                        <p className="text-xl">Location: <span className="font-semibold">Ismailia, Egypt</span></p>
                  </div>
            </div>
            <div className="bg-white text-black rounded-lg p-6 shadow-md flex flex-col items-center w-full md:w-1/2 h-full">
                  <h3 className="text-2xl font-semibold mb-4">Fitness Stats</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center w-full">
                        <div className="p-4 border-b-2 border-gray-200 transition-transform transform hover:scale-105 duration-300">
                              <p className="text-2xl font-bold">BMI</p>
                              <p className="text-xl">22.5</p>
                        </div>
                        <div className="p-4 border-b-2 border-gray-200 transition-transform transform hover:scale-105 duration-300">
                              <p className="text-2xl font-bold">Weight</p>
                              <p className="text-xl">70 kg</p>
                        </div>
                        <div className="p-4 border-b-2 border-gray-200 transition-transform transform hover:scale-105 duration-300">
                              <p className="text-2xl font-bold">Height</p>
                              <p className="text-xl">175 cm</p>
                        </div>
                        <div className="p-4 border-b-2 border-gray-200 transition-transform transform hover:scale-105 duration-300">
                              <p className="text-2xl font-bold">Body Fat</p>
                              <p className="text-xl">15%</p>
                        </div>
                  </div>
            </div>
      </section>

      <SavedList title="Saved Workouts" items={savedWorkouts} />
      <SavedList title="Saved Meals" items={savedMeals} />

      {isSettingsOpen && <Settings onClose={handleCloseSettings} />}
    </main>
  );
};

export default Profile;
