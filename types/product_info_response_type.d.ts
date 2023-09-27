import { Product } from './product_type';

export type ProductInfoResponse = {
  status: number;
  message: string;
  product?: Product;
};
