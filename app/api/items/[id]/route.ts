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

  const res = {
    status: 404,
    message: `We can't find that product`
  };

  return new Response(JSON.stringify(res), {
    status: 404,
    statusText: 'Product Not Found',
    headers: {
      'content-type': 'application/json'
    }
  });
}
