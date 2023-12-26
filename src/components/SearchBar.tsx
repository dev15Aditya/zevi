import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between py-2 px-4 mt-4 rounded-lg mx-auto bg-white w-11/12 md:w-[60%]">
      <input
        className="bg-transparent outline-none"
        type="text"
        placeholder="Search"
      />
      <CiSearch className="text-[25px] text-gray-500" />
    </div>
  );
};

export default SearchBar;
