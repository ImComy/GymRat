import React, { useRef } from 'react';
import SavedItem from './savedItem';
import { useSpring, animated } from 'react-spring';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface SavedItemData {
  name: string;
  type: string;
  date: string;
}

interface SavedListProps {
  title: string;
  items: SavedItemData[];
}

const SavedList: React.FC<SavedListProps> = ({ title, items }) => {
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

  if (!items || items.length === 0) {
    return <div>No saved items available</div>;
  }

  return (
    <section className="mb-8 relative w-full overflow-hidden">
      <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
      <div className="flex justify-center items-center relative w-full">
        <button
          className="bg-transparent border-none cursor-pointer outline-none flex items-center justify-center text-3xl z-9 mr-5 hidden md:block"
          onClick={() => scroll('left')}
        >
          <MdChevronLeft className="text-3xl text-black" />
        </button>
        <animated.div
          className="overflow-x-scroll p-2 w-full"
          ref={scrollContainerRef}
          scrollLeft={props.scrollLeft}
        >
          <div className="flex flex-start items-center gap-4 no-wrap">
            {items.map((item, index) => (
              <div className="flex-none w-[280px]" key={index}>
                <SavedItem
                  name={item.name}
                  type={item.type}
                  date={item.date}
                  onEdit={() => alert(`Editing ${item.name}`)}
                  onDelete={() => console.log('Deleting', item.name)}
                />
              </div>
            ))}
          </div>
        </animated.div>
        <button
          className="bg-transparent border-none cursor-pointer outline-none flex items-center justify-center text-3xl z-9 ml-5 hidden md:block"
          onClick={() => scroll('right')}
        >
          <MdChevronRight className="text-3xl text-black" />
        </button>
      </div>
    </section>
  );
};

export default SavedList;
