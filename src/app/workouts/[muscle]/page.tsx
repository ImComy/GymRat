"use client";

import { usePathname, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Main from '../../../components/workout/addexer/main'
import RoutineList from '../../../components/workout/routineList'
import { Provider } from 'react-redux';
import store from '../../store';

const capitalizeEachSegment = (path: string) => {
  return path
    .split('/')
    .filter(Boolean)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('/');
};


const MuscleGroupPage = () => {
  const { muscle } = useParams();
  const capitalizedMuscle = (muscle as string).toUpperCase();
  const pathname = usePathname();
  const [pathHistory, setPathHistory] = useState<string[]>([]);

  useEffect(() => {
    const formattedPath = pathname === '/' ? 'Home' : `Home/${capitalizeEachSegment(pathname.slice(1))}`;
    setPathHistory((prev) => [...prev, formattedPath]);
  }, [pathname]);

  return (
    <Provider store={store}>
    <main className='bg-white w-screen min-h-screen relative flex flex-col overflow-hidden'>
      <p className="text-[#515151] text-[22px] font-medium font-['Roboto'] leading-relaxed tracking-wide  p-10">
        {pathHistory[pathHistory.length - 1] || 'Home'}
      </p>
      <h1 className=" text-black text-[58.63px] font-extrabold font-['Inter'] leading-[52.77px] px-10 pb-10 mt-[-20px]">{capitalizedMuscle} EXERCISES</h1>
      <section className=" w-screen h-[390px] relative bg-[#ccff00] border border-black">
      <Main />
      </section>
      <section className=" w-screen my-10">
        <h1 className=" text-black text-[58.63px] font-extrabold font-['Inter'] leading-[52.77px] px-10 pb-10">Today's Routine</h1>
        <RoutineList />
      </section>
    </main>
    </Provider>
  );
};

export default MuscleGroupPage;
