import React from 'react';

const Search = () => {
  return (
    <div className="relative w-full mb-6">
      <span className="absolute left-4 top-2 text-gray-400">
        <i className="nf nf-seti-search"></i>
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 px-[50px] rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 text-gray-700 focus:text-black"
      />
    </div>
  );
};

export default Search;
