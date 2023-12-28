import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

interface ProductPageProps {
  id: number;
  name: string;
  photo: string;
  price: string;
  rating: number;
  review: number;
  description: string;
  onBackClick: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({
  id,
  name,
  photo,
  price,
  rating,
  review,
  description,
  onBackClick,
}: ProductPageProps) => {
  return (
    <div className="p-2 shadow-sm">
      <button
        className="flex items-center bg-green-400 py-1 px-2 rounded-md"
        onClick={onBackClick}
      >
        <IoMdArrowRoundBack />
        Back
      </button>
      <h1 className="text-lg font-mono mb-2">{name}</h1>
      <hr />
      <img className="my-2" src={photo} alt={name} />
      <p className="text-gray-600">
        <span className="text-lg text-bold font-mono text-black">Price</span>:
        Rs {parseInt(price)}
      </p>
      <p className="text-gray-600">
        <span className="text-lg text-bold font-mono text-black">Rating</span>:{' '}
        {rating}
      </p>
      <p className="text-gray-600">
        <span className="text-lg text-bold font-mono text-black">Reviews</span>:{' '}
        {review}
      </p>
      <p className="text-gray-600">
        <span className="text-lg text-bold font-mono text-black">
          Description
        </span>
        : {description}
      </p>
    </div>
  );
};

export default ProductPage;
