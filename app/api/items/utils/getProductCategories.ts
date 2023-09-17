import { Products } from '@/types/products_type';

export const getProductCategories = (products: Products[]): string[] => {
  const categoriesArr = products.map((product) => {
    return product.category;
  });
  const categories = [...new Set(categoriesArr)];

  return categories;
};
