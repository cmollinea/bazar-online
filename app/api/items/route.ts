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
      message: 'No query Provided',
      products: DATA.products,
      categories: categories,
      total: DATA.products.length
    });
  } else if (query) {
    const filteredProducts = filterByQuery(query, DATA.products);

    const categories = getProductCategories(filteredProducts);
    return NextResponse.json({
      status: 200,
      message: 'OK',
      products: filteredProducts,
      categories: categories,
      total: filteredProducts.length
    });
  }
}
