import React from 'react';
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
  return (
    <div>
      <MultipleSelectCheckmarks filters={brand} />
      <hr />
      <MultipleSelectCheckmarks filters={price} />
      <hr />
      <RatingFilter />
    </div>
  );
}
