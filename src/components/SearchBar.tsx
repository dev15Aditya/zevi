import React, { useState, useEffect, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { generateLatestTrends, generatePopularSuggestions } from './fakerData';
import SearchSuggestion from './SearchSuggestion';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const latestTrends = generateLatestTrends(5);
  const popularSuggestions = generatePopularSuggestions(5);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchTerm(text);
    setShowDropDown(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target as Node)
    ) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="border-solid border-[1px] border-gray-500 flex items-center justify-between py-2 px-4 mt-4 rounded-lg mx-auto bg-white w-11/12 md:w-[60%]">
        <input
          ref={searchInputRef}
          className="bg-transparent outline-none w-11/12"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <CiSearch className="text-[25px] text-gray-500" />
      </div>

      {showDropDown && (
        <SearchSuggestion
          latestTrends={latestTrends}
          popularSuggestions={popularSuggestions}
        />
      )}
    </div>
  );
};

export default SearchBar;
