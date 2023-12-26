import React from 'react';
import { faker } from '@faker-js/faker';

import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';

interface Product {
  id: number;
  name: string;
  photo: string;
  price: string;
  rating: number;
  review: number;
}

const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    const product: Product = {
      id: i + 1,
      name: faker.commerce.productName(),
      photo: faker.image.url(),
      price: faker.commerce.price(),
      rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
      review: faker.number.int({ min: 0, max: 1000 }),
    };
    products.push(product);
  }
  return products;
};

const ProductList: React.FC = () => {
  const products: Product[] = generateProducts(10);

  return (
    <div>
      <h1>Product List</h1>
      <ul className="flex flex-wrap items-center justify-center">
        {products.map((product) => (
          <li className="w-[180px] h-[370px] mx-1 md:m-2 " key={product.id}>
            <div className="relative">
              <img
                className=" aspect-[2/3]"
                src={product.photo}
                alt={product.name}
              />
              <FormControlLabel
                className="absolute top-0 right-0"
                control={
                  <Checkbox
                    icon={<FavoriteBorderIcon className="text-white" />}
                    checkedIcon={<FavoriteIcon className="text-red-700" />}
                  />
                }
                label=""
              />
              <div className="absolute bottom-0 text-center text-white bg-blue-500 w-full font-bold p-1">
                View Product
              </div>
            </div>
            <h3 className="font-[500]">{product.name}</h3>
            <p className="text-blue-600 font-[500]">
              <del className="text-gray-400 font-light">
                Rs{parseInt(product.price, 10) + 100}
              </del>{' '}
              Rs {parseInt(product.price)}
            </p>
            <div className="flex items-center">
              <Rating
                className="w-50%"
                name="small-size"
                size="small"
                defaultValue={product.rating}
                precision={0.5}
              />
              <span className="text-sm">({product.review})</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
