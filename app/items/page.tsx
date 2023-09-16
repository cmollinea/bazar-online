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
  products:
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

  const response = await fetch(
    `https://bazar-online-theta.vercel.app/api/items?q=${query ? query : 'all'}`
  );
  const data: Products = await response.json();

  return (
    <section className='min-h-screen grid place-content-center items-center py-10'>
      <p className='text-sm text-default-400'>
        {data.products?.length && query
          ? `Showing ${data.products?.length} results for "${query}"`
          : null}
      </p>
      <ul className='grid gap-10 w-full md:px-10 place-items-center md:grid-cols-2 xl:grid-cols-3 py-10'>
        {data?.products?.map((product) => (
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
