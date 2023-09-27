'use client';

import { ICartProduct } from '@/types/cart_product.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '../hooks/useStore';
import BadgeParent from '../items/components/BadgeParent';
import { useCartStore } from '../store/store';

function Cart() {
  console.log('Rendering Cart');

  const shoppingCart = useStore(
    useCartStore,
    (state) => state.shoppingCart
  ) as ICartProduct[];

  const pathname = usePathname();

  console.log(shoppingCart);
  return (
    <>
      {shoppingCart?.length > 0 && (
        <Link
          href='/cart'
          className={`rounded-full bg-default-500/40 hover:bg-default-800/40 backdrop-blur-sm w-fit p-2 text-xl fixed z-50 right-8 bottom-8 ${
            pathname === '/cart' && 'hidden'
          }`}
        >
          <BadgeParent content={shoppingCart.length}>🛒</BadgeParent>
        </Link>
      )}
    </>
  );
}

export default Cart;
