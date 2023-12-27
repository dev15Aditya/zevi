import React from 'react';
import { generateProduct } from './fakerData';

import Card from './Card';
import Filter from './Filter';

const ProductList: React.FC = () => {
  const products = generateProduct(10);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-black font-bold my-2 text-3xl">Search Results</h1>
      <div className="flex justify-between">
        <Filter />
        <ul className="flex flex-wrap items-center justify-center md:w-[85%]">
          {products.map((product) => (
            <Card
              id={product.id}
              name={product.name}
              price={product.price}
              photo={product.photo}
              rating={product.rating}
              review={product.review}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
