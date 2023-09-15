import { NextResponse } from 'next/server';
import React from 'react';
import { ProductCard } from './components/ProductCard';

type Props = {
  searchParams: {
    query: string | undefined;
  };
};

type Products = {
  status: number;
  message: string;
  filteredProducts:
    | {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
      }[]
    | null;
};

async function Items({ searchParams }: Props) {
  const query = searchParams.query;

  const response = await fetch(`http://localhost:3000/api/items?q=${query}`);
  const products: Products = await response.json();

  return (
    <section className='min-h-screen place-content-center items-center py-20'>
      <ul className='grid gap-10 w-full md:px-60 place-items-center md:grid-cols-3'>
        {products?.filteredProducts?.map((product) => (
          <li key={product.id}>
            <ProductCard
              title={product.title}
              stock={product.stock}
              price={product.price}
              image={product.thumbnail}
              rating={product.rating}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Items;
