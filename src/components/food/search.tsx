import React, { useState, useEffect } from 'react';

interface SearchFoodProps {
  onSearch: (query: string, option: string, order: 'asc' | 'desc') => void;
}

const SearchFood: React.FC<SearchFoodProps> = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');

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

  useEffect(() => {
    onSearch(searchQuery, selectedOption, sortOrder);
  }, [searchQuery, selectedOption, sortOrder]);

  return (
    <div className='flex gap-10 mt-5 items-center border rounded-full flex-col md:flex-row'>
      <div className="cursor-pointer coupons-select-container relative w-[120px] ml-6">
        <div
          className={`coupons-select ${isOpen ? 'open' : ''} flex items-center justify-between w-full py-2 pl-3 pr-10 text-sm text-gray-700 rounded-md`}
          onClick={handleClick}
        >
          <span className="nf nf-fa-filter text-base text-gray-600 mr-2"></span>
          <span className="mr-2">{selectedOption}</span>
          <span className="fas fa-angle-down text-base text-gray-600 transition-transform duration-300" />
        </div>
        {isOpen && (
          <div className="dropdown-menu absolute z-10 w-full bg-white rounded-md shadow-md">
            {['Name', 'Calories', 'Protein', 'Fats', 'Carbs'].map((option) => (
              <p
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>

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

      <div className="flex items-center">
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
  );
};

export default SearchFood;
