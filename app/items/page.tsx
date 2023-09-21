import { NextResponse } from 'next/server';
import React from 'react';
import { ProductCard } from './components/ProductCard';
import { NO_QUERY_PROVIDED } from '../constants/filters';
import { getProducts } from '../services/getProducts';
import { Badge } from '@nextui-org/react';
import BadgeParent from './components/BadgeParent';
import { Metadata } from 'next';

type Props = {
  searchParams: {
    query: string | undefined;
  };
};

export async function generateMetadata({
  searchParams
}: Props): Promise<Metadata> {
  const query = searchParams.query;
  console.log(query);

  if (query) {
    return {
      title: `eBazar | Showing results for ${query}`,
      description: 'Advanced Search of eBazar'
    };
  } else {
    return {
      title: 'eBazar | All Products'
    };
  }
}

async function Items({ searchParams }: Props) {
  const query = searchParams.query;
  const URL =
    process.env.NODE_ENVIROMENT === 'dev'
      ? `http://localhost:3000/api/items?q=${query ? query : NO_QUERY_PROVIDED}`
      : `https://bazar-online-theta.vercel.app/api/items?q=${
          query ? query : NO_QUERY_PROVIDED
        }`;

  const data = await getProducts<ProductsResponse>(URL);

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
      <ul className='flex items-center md:place-content-center gap-2 mt-2 px-10 flex-wrap'>
        {data?.categories?.map((category) => (
          <li
            key={category}
            className='text-xs flex-none rounded-lg p-2 bg-default-100 backdrop-blur-md'
          >
            <BadgeParent
              content={
                data.products?.filter(
                  (product) => product.category === category
                ).length
              }
            >
              {category}
            </BadgeParent>
          </li>
        ))}
      </ul>
      <ul className='grid gap-4 w-fit mx-auto md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  py-10 px-10'>
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
