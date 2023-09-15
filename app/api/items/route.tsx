import { NextResponse } from 'next/server';
import PRODUCTS from '../../data/products.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const filteredProducts = query
    ? PRODUCTS.products.filter(
        (product) =>
          product.title.toLocaleLowerCase().includes(query.toLowerCase()) ||
          product.description
            .toLocaleLowerCase()
            .includes(query.toLowerCase()) ||
          product.category.toLocaleLowerCase().includes(query.toLowerCase())
      )
    : null;
  if (!query) {
    return NextResponse.json({
      status: 403,
      message: 'No query Provided',
      filteredProducts
    });
  } else {
    return NextResponse.json({ status: 200, message: 'OK', filteredProducts });
  }
}
