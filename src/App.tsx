import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInitiated, setSearchInitiated] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleSearch = (filteredData: any) => {
    setFilteredData(filteredData);
    setSearchInitiated(true);
  };

  return (
    <div className="relative">
      <SearchBar data={data} onSearch={handleSearch} />

      <div className="background-image">
        {searchInitiated ? <ProductCard data={filteredData} /> : null}
      </div>
    </div>
  );
}

export default App;
