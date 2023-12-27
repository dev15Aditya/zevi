import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
  return (
    <div>
      <SearchBar />
      <ProductCard data={data} />
    </div>
  );
}

export default App;
