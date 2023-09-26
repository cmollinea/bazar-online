'use client';
import Star from '@/app/components/Icons/Star';
import { Card, CardHeader, Image, CardFooter } from '@nextui-org/react';
import Link from 'next/link';

type Props = {
  title: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
  id: number;
};

export function ProductCard({ title, stock, rating, price, image, id }: Props) {
  return (
    <Link href={`/items/${id}`}>
      <Card
        isPressable
        isFooterBlurred
        className='p-4 w-fit relative '
        classNames={{
          base: 'border border-transparent hover:border-default-400 transition-colors duration-500 ease-in-out md:min-h-[315px]'
        }}
      >
        <CardHeader className='pb-0 flex-col items-start py-2'>
          <h4 className='font-bold text-xl max-w-[280px] max-sm:max-w-[200px] truncate'>
            {title}
          </h4>
          <p className='text-medium uppercase font-bold'>${price} USD</p>
          <small
            className={`${
              stock > 20
                ? ' text-success-400'
                : stock > 10
                ? 'text-warning-400'
                : 'text-danger-400'
            }`}
          >
            {stock} left in stock
          </small>
        </CardHeader>
        <Image
          isBlurred
          alt={title}
          className='max-w-[300px] max-sm:max-w-[250px] max-h-[180px]'
          src={image}
          width={500}
          height={285}
        />
        <CardFooter className='absolute flex items-center gap-1 z-20 bottom-4 h-10 p-1 w-[calc(100%_-_31px)] bg-default/80'>
          {' '}
          <div className='flex gap-0.5 ml-2'>
            <Star count={1} rating={rating} />
            <Star count={2} rating={rating} />
            <Star count={3} rating={rating} />
            <Star count={4} rating={rating} />
            <Star count={5} rating={rating} />
          </div>
          <small className='text-default-500'>{rating} out of 5.0</small>
        </CardFooter>
      </Card>
    </Link>
  );
}
