import { Product } from '@/types/product_type';

export const getProductInfoById = (
  id: string,
  products: Product[]
): Product | undefined => {
  const productFromId = products.find(
    (product) => product.id.toString() === id
  );
  return productFromId;
};
