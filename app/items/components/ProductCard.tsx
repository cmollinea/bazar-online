'use client';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import NextImage from 'next/image';

type Props = {
  title: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
};

export function ProductCard({ title, stock, rating, price, image }: Props) {
  return (
    <Card className='py-4 w-fit'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <h4 className='font-bold text-large max-w-[280px] truncate'>{title}</h4>
        <p className='text-tiny uppercase font-bold'>{price}</p>
        <small className='text-default-500'>{stock}</small>
        <small className='text-default-500'>{rating}</small>
      </CardHeader>

      <CardBody className='relative overflow-visible w-fit h-fit'>
        <Image
          isBlurred
          alt={title}
          className='rounded-xl h-64'
          src={image}
          height={300}
          width={280}
        />
      </CardBody>
    </Card>
  );
}
