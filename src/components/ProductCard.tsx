import React from 'react';
import { generateProduct } from './fakerData';

import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';

const ProductList: React.FC = () => {
  const products = generateProduct(10);

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
