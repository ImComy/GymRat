"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NewSave from '../../components/workout/save';
import SavedWorkouts from '../../components/workout/savelist';
import RoutineList from '../../components/workout/routineList';
import Path from '../../components/path';
import { Provider } from 'react-redux';
import store from '../store';

const Workouts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 80);
  }, []);

  const muscleGroups = [
    { label: 'All', image: '/maxresdefault.png', href: '/workouts/All' },
    { label: 'CHEST', image: '/maxresdefault.png', href: '/workouts/chest' },
    { label: 'BACK', image: '/maxresdefault.png', href: '/workouts/back' },
    { label: 'DELTS', image: '/maxresdefault.png', href: '/workouts/delts' },
    { label: 'ABS', image: '/maxresdefault.png', href: '/workouts/abs' },
    { label: 'ARMS', image: '/maxresdefault.png', href: '/workouts/arms' },
    { label: 'LEGS', image: '/maxresdefault.png', href: '/workouts/legs' },
  ];

const workouts = [
  { name: 'Leg Day Routine', type: 'Strength', date: '2024-09-28' },
  { name: 'HIIT Session', type: 'Cardio', date: '2024-10-01' },
  { name: 'Upper Body Workout', type: 'Strength', date: '2024-09-30' },
];

  return (
    <Provider store={store}>
    <main className="bg-white w-screen min-h-screen relative flex flex-col p-4 md:p-10">
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .invisible {
          opacity: 0;
        }
        .visible {
          opacity: 1;
        }
      `}</style>
      <Path />

      <h1 className="text-black font-black font-['Inter'] mb-8 leading-tight text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px]">
        Choose a muscle group
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {muscleGroups.map((group, index) => (
          <Link key={index} href={group.href}>
            <div className={`${isVisible ? 'fade-in-up' : 'invisible'}`}>
              <button
                className={`w-full max-w-[385px] h-[158.15px] bg-black/75 rounded-2xl flex justify-center items-center gap-2.5 transform transition-all duration-300 hover:scale-110 relative overflow-hidden group mx-auto sm:mx-4`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                  style={{ backgroundImage: `url('${group.image}')` }}
                ></div>
                <div className="relative z-10 text-center text-white text-[40px] sm:text-[60px] lg:text-[80px] font-extrabold font-['Inter'] leading-[1.1] tracking-[2px] sm:tracking-[4px] lg:tracking-[5.5px] group-hover:text-[#ccff00] transition-colors duration-300">
                  {group.label}
                </div>
              </button>
            </div>
          </Link>
        ))}
      </div>
      <section>
        <div className="flex justify-between items-center md:flex-row flex-col">
          <h1 className="text-black font-black font-['Inter'] my-10 leading-tight text-[48px] xl:text-[60px]">Saved Routines</h1>
          <div className="mr-0 md:mr-[-40px]">
            <NewSave />
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row w-full gap-0 md:gap-5">
        <div className="flex-grow">
          <RoutineList />
        </div>
        <div className="w-full md:w-72 flex justify-center md:justify-start">
          <SavedWorkouts workouts={workouts} />
        </div>
      </div>
    </main>
    </Provider>
  );
};

export default Workouts;
