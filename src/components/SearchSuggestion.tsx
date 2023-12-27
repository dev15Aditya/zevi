import React from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Suggestion {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
}

interface SearchSuggestionProps {
  latestTrends: Product[];
  popularSuggestions: string[];
}

const SearchSuggestion = ({
  latestTrends,
  popularSuggestions,
}: SearchSuggestionProps) => {
  // Transform Product to Suggestion type
  const transformedLatestTrends: Suggestion[] = latestTrends.map((product) => ({
    id: product.id,
    name: product.title,
    image: product.image,
    rating: product.rating.rate,
    reviews: product.rating.count,
  }));

  return (
    <div className="absolute bg-white shadow-xl border-t-[1px] border-solid border-gray-300 mt-2 p-2 w-11/12 md:w-[60%] mx-auto z-10 left-0 right-0 md:p-5">
      <div>
        <h2 className="text-lg font-bold mb-2">Latest Trends</h2>
        <div className="flex items-center justify-between flex-wrap">
          {transformedLatestTrends.map((item) => (
            <div key={item.id} className="w-[18%]">
              <img
                src={item.image}
                alt={item.name}
                className="mr-2 aspect-[2/3]"
              />
              <p className="text-xs font-[400]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mt-4 mb-2">Popular Suggestions</h2>
        {popularSuggestions.map((suggestion, index) => (
          <p className="text-xs" key={index}>
            {suggestion}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestion;
