import { Products } from './products_type';

export type ProductInfoResponse = {
  status: number;
  message: string;
  product?: Products;
};
