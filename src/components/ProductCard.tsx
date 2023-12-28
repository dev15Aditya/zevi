import React from 'react';
import Card from './Card';
import Filter from './Filter';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
}

interface ProductListProps {
  data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-black font-bold my-2 text-3xl">Search Results</h1>
      <div className="flex justify-between">
        <Filter />
        <ul className="flex flex-wrap items-center justify-center md:w-[85%]">
          {data.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price.toString()}
              photo={product.image}
              rating={product.rating.rate}
              review={product.rating.count}
              description={product.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
