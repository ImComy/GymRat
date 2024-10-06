// Your existing Food component file
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Slider from '../../../components/food/slider';
import MealCardList from '../../../components/food/MealCardList';
import { Provider } from 'react-redux';
import store from '../../store';
import SearchFood from '../../../components/food/search';
import SaveMeals from '../../../components/food/save';
import Path from '../../../components/path';

const Food = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSearch = (query: string, option: string, order: 'asc' | 'desc') => {
    setSearchQuery(query);
    setSelectedOption(option);
    setSortOrder(order);
  };

  return (
    <Provider store={store}>
      <main className="bg-white w-screen p-10 overflow-hidden">
        <header>
          <Path />
          <h1 className="text-black text-[50px] md:text-[80px] font-black font-['Inter'] leading-[56px] md:leading-[72px] sm:text-[60px] sm:leading-[44px]">
            Food
          </h1>
          <p className="text-[#515151] text-lg md:text-2xl font-medium font-['Roboto'] leading-[24px] md:leading-[28.80px] tracking-wide mt-3 md:mt-5">
            Make mindful choices to enhance your energy and well-being.
          </p>
        </header>
        <SearchFood onSearch={handleSearch} />

        <section>
          <Slider
            searchQuery={searchQuery}
            selectedOption={selectedOption}
            sortOrder={sortOrder}
          />
        </section>

        <section className="mt-10 px-4 md:px-8">
          <header className="flex flex-col md:flex-row sm:flex-row items-center md:items-center justify-between space-y-4">
            <h1 className="text-black text-5xl sm:text-6xl md:text-[72px] lg:text-[80px] font-black font-['Inter'] leading-tight sm:leading-tight md:leading-[72px]">Meal</h1>
            <div className="sm:mx-auto md:mx-0 lg:mx-0">
              <SaveMeals />
            </div>
          </header>
        </section>

        <section>
          <MealCardList selectedOption={selectedOption} sortOrder={sortOrder} />
        </section>
      </main>
    </Provider>
  );
};

export default Food;
