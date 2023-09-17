import { Products } from '@/types/products_type';

export const getProductInfoById = (
  id: string,
  products: Products[]
): Products | undefined => {
  const productFromId = products.find(
    (product) => product.id.toString() === id
  );
  return productFromId;
};
