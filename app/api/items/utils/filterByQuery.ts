import { Product } from '@/types/product_type';

export const filterByQuery = (
  query: string,
  products: Product[]
): Product[] | [] => {
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  return filteredProducts;
};
