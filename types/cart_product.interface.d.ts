import type { Product } from '@/types/product_type';

export interface ICartProduct extends Product {
  quantity: number;
}
