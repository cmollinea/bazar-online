import { NextResponse } from 'next/server';
import DATA from '../../data/products.json';
import { filterByQuery } from './utils/filterByQuery';
import { NO_QUERY_PROVIDED } from '@/app/constants/filters';
import { getProductCategories } from './utils/getProductCategories';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (query === NO_QUERY_PROVIDED) {
    const categories = getProductCategories(DATA.products);

    return NextResponse.json({
      status: 200,
      message: 'Showing all products',
      products: DATA.products,
      categories: categories,
      total: DATA.products.length
    });
  }
  const filteredProducts = filterByQuery(query as string, DATA.products);
  const categories = getProductCategories(filteredProducts);
  return NextResponse.json({
    status: 200,
    message: 'OK',
    products: filteredProducts,
    categories: categories,
    total: filteredProducts.length
  });
}
