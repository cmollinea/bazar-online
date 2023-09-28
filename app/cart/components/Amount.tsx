'use client';

import { useStore } from '@/app/hooks/useStore';
import { useCartStore } from '@/app/store/store';
import { ICartProduct } from '@/types/cart_product.interface';

const sumPrices = (total: number, product: ICartProduct) => {
  return (
    total +
    (product.price - (product.discountPercentage / 100) * product.price) *
      product.quantity
  );
};

function Amount() {
  const shoppingCart = useStore(useCartStore, (state) => state.shoppingCart);

  const totalAMount = shoppingCart?.reduce(sumPrices, 0);
  return (
    <nav className='border-b border-default-400 h-16 sticky top-0 backdrop-blur-md z-20 flex items-center place-content-center text-xl font-bold'>
      Total Amount: {totalAMount ? Math.ceil(totalAMount) : 0} USD
    </nav>
  );
}
export default Amount;
