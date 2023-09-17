import { NextResponse } from 'next/server';
import React from 'react';
import { ProductCard } from './components/ProductCard';
import { NO_QUERY_PROVIDED } from '../constants/filters';

type Props = {
  searchParams: {
    query: string | undefined;
  };
};

async function Items({ searchParams }: Props) {
  const query = searchParams.query;
  const response = await fetch(
    `http://localhost:3000/api/items?q=${query ? query : NO_QUERY_PROVIDED}`
  );

  const data: ProductsResponse = await response.json();

  return (
    <section className='min-h-screen items-center py-10'>
      <p className='text-sm text-default-500 w-full text-center'>
        {data?.products?.length && query
          ? `Showing ${data?.total} results for "${query}"`
          : `Showing ${data?.total} products`}
      </p>
      <p className='text-sm text-default-500 w-full text-center px-10 mt-4'>
        Categories:
      </p>
      <ul className='flex items-center md:place-content-center gap-2 mt-2 px-10 overflow-x-auto snap-x scrollbar-hide'>
        {data?.categories?.map((category) => (
          <li
            key={category}
            className='text-xs flex-none rounded-lg p-2 bg-default-100 backdrop-blur-md'
          >
            {category}
          </li>
        ))}
      </ul>
      <ul className='grid gap-10 w-full md:px-10 place-items-center md:grid-cols-2 xl:grid-cols-3 py-10'>
        {data?.products?.map((product) => (
          <li key={product.id}>
            <ProductCard
              title={product.title}
              stock={product.stock}
              price={product.price}
              image={product.thumbnail}
              rating={product.rating}
              id={product.id}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Items;
