import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';

import ProductPage from './ProductPage';

interface CardProps {
  id: number;
  name: string;
  photo: string;
  price: string;
  rating: number;
  review: number;
  description: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  photo,
  price,
  rating,
  review,
  description,
}: CardProps) => {
  const [showProduct, setShowProduct] = useState(false);

  const handleCardClick = () => {
    setShowProduct(true);
  };

  const handleBackClick = () => {
    setShowProduct(false);
  };

  if (showProduct) {
    return (
      <ProductPage
        {...{ id, name, photo, price, rating, review, description }}
        onBackClick={handleBackClick}
      />
    );
  }
  return (
    <li className="w-[180px] h-[350px] m-2 shadow" key={id}>
      <div className="relative">
        <img
          onClick={handleCardClick}
          className="aspect-[2/3]"
          src={photo}
          alt={name}
        />

        <FormControlLabel
          className="absolute top-0 right-0"
          control={
            <Checkbox
              icon={<FavoriteBorderIcon className="text-gray-300" />}
              checkedIcon={<FavoriteIcon className="text-red-700" />}
            />
          }
          label=""
        />
        <div
          onClick={handleCardClick}
          className="absolute bottom-0 text-center text-white bg-blue-500 w-full font-bold p-1"
        >
          View Product
        </div>
      </div>
      <h3 onClick={handleCardClick} className="font-[500] truncate">
        {name}
      </h3>
      <p onClick={handleCardClick} className="text-blue-600 font-[500]">
        <del className="text-gray-400 font-light">
          Rs{parseInt(price, 10) + 100}
        </del>{' '}
        Rs {parseInt(price)}
      </p>
      <div onClick={handleCardClick} className="flex items-center">
        <Rating
          className="w-50%"
          name="small-size"
          size="small"
          defaultValue={rating}
          precision={0.5}
        />
        <span className="text-sm">({review})</span>
      </div>
    </li>
  );
};

export default Card;
