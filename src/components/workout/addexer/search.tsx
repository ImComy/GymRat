import React, { useState, useEffect, useRef } from 'react';

interface SearchProps {
  onSearch: (query: string, option: string, order: 'asc' | 'desc') => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSortOrder('asc');
    setIsOpen(false);
    onSearch(searchQuery, option, 'asc');
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    onSearch(searchQuery, selectedOption, newOrder);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value, selectedOption, sortOrder);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    onSearch(searchQuery, selectedOption, sortOrder);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchQuery, selectedOption, sortOrder]);

  return (
    <div className='flex gap-5 mt-5 items-center md:border lg:border border-0 rounded-full flex-col-reverse lg:flex-row md:flex-row sm:flex-col-reverse border-gray-200 sm:mb-3 w-full'>
      <div
        className="cursor-pointer coupons-select-container relative w-full md:w-[120px] md:border-0 border border-solid border-gray-200 rounded-full lg:ml-2"
        ref={dropdownRef}
      >
        <div
          className={`coupons-select flex items-center justify-between w-full py-2 pl-3 pr-10 text-sm text-gray-700 rounded-md transition-all duration-300 cursor-pointer`}
          onClick={handleClick}
        >
          <span className="nf nf-fa-filter text-base text-gray-600 mr-2"></span>
          <span className="mr-2">{selectedOption}</span>
          <span
            className={`fas fa-angle-down text-base text-gray-600 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        <div
          className={`dropdown-menu absolute z-10 w-full bg-white rounded-md shadow-md transition-max-height duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-60' : 'max-h-0'
          }`}
        >
          {['All', 'Dumbbell','Barbell', 'Cable', 'Bodyweight', 'Machine'].map((option) => (
            <p
              key={option}
              onClick={() => handleOptionClick(option)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between w-full md:border-0 border border-solid border-gray-200 rounded-full bg-white">
        <div className="flex items-center w-full">
          <span className="ml-3 absolute text-gray-400">
            <i className="nf nf-seti-search"></i>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
            className="w-full py-2 px-4 pl-10 rounded-full text-black focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-center md:justify-start ">
          <button
            onClick={toggleSortOrder}
            className="ml-4 p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors duration-200"
          >
            <i
              className={`fas fa-arrow-up transform transition-transform duration-300 ease-in-out ${
                sortOrder === 'asc' ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
