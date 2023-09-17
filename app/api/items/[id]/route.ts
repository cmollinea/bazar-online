import DATA from '@/app/data/products.json';
import { getProductInfoById } from '../utils/getProductInfoById';
import { NextResponse } from 'next/server';

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: Props) {
  const id = params.id;
  const product = getProductInfoById(id, DATA.products);

  if (product) {
    return NextResponse.json({
      status: 200,
      message: 'OK',
      product
    });
  }

  return NextResponse.json({
    status: 403,
    message: 'Bad Request'
  });
}
