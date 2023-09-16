'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter
} from '@nextui-org/react';

type Props = {
  title: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
};

export function ProductCard({ title, stock, rating, price, image }: Props) {
  return (
    <Card isPressable isFooterBlurred className='p-4 w-fit relative'>
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
        height={281}
      />

      <CardFooter className='absolute z-20 bottom-4 left-4 w-full h-10 p-1'>
        {' '}
        <small className='text-default-500'>{rating}</small>
      </CardFooter>
    </Card>
  );
}
