import React, { useState } from 'react';
import MultipleSelectCheckmarks from './MultipleSelect';
import RatingFilter from './RatingFilter';

const brand = [
  {
    value: ['Man', 'Women'],
    title: 'Category',
  },
];
const price = [
  {
    value: ['Under 500', 'Above 500'],
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
