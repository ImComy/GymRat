import React, { useRef } from 'react';
import Card from './foodcard';
import Addcard from './add';
import { useSpring, animated } from 'react-spring';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

interface Meal {
  _id: string;
  title: string;
}

interface SliderProps {
  searchQuery: string;
  selectedOption: string;
  sortOrder: "desc" | "asc";
}

const Slider: React.FC<SliderProps> = ({ searchQuery, selectedOption, sortOrder }) => {
  const meals = useSelector((state: RootState) => state.meals.meals || []);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [props, set] = useSpring(() => ({
    scrollLeft: 0,
    config: { tension: 280, friction: 60 },
  }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offsetWidth = scrollContainerRef.current.offsetWidth;
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - offsetWidth
          : scrollContainerRef.current.scrollLeft + offsetWidth;

      set({ scrollLeft: newScrollLeft });
    }
  };

  if (!meals || meals.length === 0) {
    return <div>No meals available</div>;
  }

  const filterKey = selectedOption === 'Name' ? 'title' : selectedOption.toLowerCase() as keyof Meal;

  const filteredMeals = meals
    .filter((meal) => {
      const mealValue = meal[filterKey];
      return mealValue && mealValue.toString().toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      const aValue = a[filterKey];
      const bValue = b[filterKey];

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  return (
    <div className="flex justify-center items-center relative w-screen md:w-full w-full overflow-hidden">
      <button
        className="bg-transparent border-none cursor-pointer outline-none flex items-center justify-center text-3xl z-9 mr-5 hidden md:block lg:block"
        onClick={() => scroll('left')}
      >
        <span className="nf nf-fa-arrow_circle_left text-3xl text-[#ccff00]" />
      </button>
      <animated.div
        className="overflow-x-scroll p-2 sm:p-5 w-screen md:w-full w-full"
        ref={scrollContainerRef}
        scrollLeft={props.scrollLeft}
      >
        <div className="flex flex-start items-center gap-4 sm:gap-12 no-wrap w-full">
          <div>
            <Addcard />
          </div>
          {filteredMeals.map((cardData) => (
            <div className="w-full" key={cardData._id}>
              <Card {...cardData} Id={cardData._id} />
            </div>
          ))}
        </div>
      </animated.div>
      <button
        className="bg-transparent border-none cursor-pointer outline-none flex items-center justify-center text-3xl z-9 ml-5 hidden md:block lg:block"
        onClick={() => scroll('right')}
      >
        <span className="nf nf-fa-arrow_circle_right text-3xl text-[#ccff00]" />
      </button>
    </div>
  );
};

export default Slider;
