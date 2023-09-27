import { Product } from '@/types/product_type';

export const getProductCategories = (products: Product[]): string[] => {
  const categoriesArr = products.map((product) => {
    return product.category;
  });
  const categories = [...new Set(categoriesArr)];

  return categories;
};
