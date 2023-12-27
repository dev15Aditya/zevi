import { faker } from '@faker-js/faker';

interface Product {
  id: number;
  name: string;
  photo: string;
  price: string;
  rating: number;
  review: number;
}

interface Suggestion {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
}

export const generateProduct = (count: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    const product: Product = {
      id: i,
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

export const generateLatestTrends = (count: number): Suggestion[] => {
  const trends: Suggestion[] = [];
  for (let i = 0; i < count; i++) {
    const trend: Suggestion = {
      id: i,
      name: faker.commerce.productName(),
      image: faker.image.url(),
      rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
      reviews: faker.number.int({ min: 0, max: 1000 }),
    };
    trends.push(trend);
  }
  return trends;
};

export const generatePopularSuggestions = (count: number): string[] => {
  return Array.from({ length: count }, () => faker.commerce.productName());
};
