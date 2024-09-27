import React from 'react';
import Search from './search';
import Slider from './slider';

const Main = () => {
  return (
    <main className="px-20 ">
      <h1 className="text-black text-[40px] font-bold font-['Inter'] ">Add Exercises</h1>
      <div className=" flex flex-col justify-center items-center">
        <Search />
        <Slider />
      </div>
    </main>
  );
};

export default Main;
