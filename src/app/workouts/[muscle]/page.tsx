"use client";

import { usePathname, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Main from '../../../components/workout/addexer/main'
import RoutineList from '../../../components/workout/routineList'
import { Provider } from 'react-redux';
import store from '../../store';
import SavedWorkout from '../../../components/workout/addsave';
import Path from '../../../components/path';

const MuscleGroupPage = () => {
  const { muscle } = useParams();
  const capitalizedMuscle = (muscle as string).toUpperCase();

  return (
    <Provider store={store}>
    <main className='bg-white w-screen min-h-screen relative flex flex-col overflow-hidden'>
      <p className="text-[#515151] text-[22px] font-medium font-['Roboto'] leading-relaxed tracking-wide  p-10">
        <Path />
      </p>
      <h1 className=" text-black text-[58.63px] font-extrabold font-['Inter'] leading-[52.77px] px-10 pb-10 mt-[-20px]">{capitalizedMuscle} EXERCISES</h1>
      <section className=" w-screen h-[390px] relative bg-[#ccff00] border border-black">
      <Main />
      </section>
      <section className=" w-screen my-10">
        <div className="flex justify-between items-center md:flex-row flex-col">
          <h1 className=" text-black text-[58.63px] font-extrabold font-['Inter'] leading-[52.77px] px-10">Today's Routine</h1>
          <SavedWorkout />
        </div>
        <RoutineList />
      </section>
    </main>
    </Provider>
  );
};

export default MuscleGroupPage;
