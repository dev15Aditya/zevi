import React, { useState } from 'react';
import MultipleSelectCheckmarks from './MultipleSelect';
import RatingFilter from './RatingFilter';

const brand = [
  {
    value: ['Mango', 'H&M'],
    title: 'BRAND',
  },
];
const price = [
  {
    value: ['Under 500', '1000 to 3000'],
    title: 'PRICE RANGE',
  },
];

export default function Filter() {
  const [filter, setFilter] = useState({ brand: [], price: [] });

  const handleBrandFilter = (filter: any) => {
    setFilter((prev) => ({ ...prev, brand: filter }));
  };

  const handlePriceFilter = (filter: any) => {
    setFilter((prev) => ({ ...prev, price: filter }));
  };

  return (
    <div>
      <MultipleSelectCheckmarks
        filters={brand}
        onChange={handleBrandFilter}
        filter={filter.brand}
      />
      <hr />
      <MultipleSelectCheckmarks
        filters={price}
        onChange={handlePriceFilter}
        filter={filter.price}
      />
      <hr />
      <RatingFilter />
    </div>
  );
}
