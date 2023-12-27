import React, { useState, useEffect, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import SearchSuggestion from './SearchSuggestion';

interface Product {
  id: number;
  title: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductListProps {
  data: Product[];
  onSearch: (filteredData: Product[]) => void;
}

const SearchBar = ({ data, onSearch }: ProductListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchTerm(text);
    setShowDropDown(true);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform filtering based on the search term
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pass the filtered data to the parent component
    onSearch(filteredData);

    // Hide suggestions after submit
    setShowDropDown(false);
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

  const trendingItems = data
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5);

  const randomPopularSuggestions = data
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, 5)
    .map((item) => item.title);

  return (
    <form className="relative" onSubmit={handleFormSubmit}>
      <div className="border-solid border-[1px] border-gray-500 flex items-center justify-between py-2 px-4 mt-4 rounded-lg mx-auto bg-white w-11/12 md:w-[60%]">
        <input
          ref={searchInputRef}
          className="bg-transparent outline-none w-11/12"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">
          <CiSearch className="text-[25px] text-gray-500" />
        </button>
      </div>

      {showDropDown && (
        <SearchSuggestion
          latestTrends={trendingItems}
          popularSuggestions={randomPopularSuggestions}
        />
      )}
    </form>
  );
};

export default SearchBar;
