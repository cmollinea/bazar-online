'use client';

import { Button } from '@nextui-org/react';
import { useCartStore } from '@/app/store/store';
import { Product } from '@/types/product_type';

type Props = {
  product?: Product;
};

function AddToCartButton({ product }: Props) {
  const shoppingCart = useCartStore((state) => state.shoppingCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const isInShoppingCart = shoppingCart.some((item) => item.id === product?.id);

  return (
    <div className='flex flex-col items-center min-h-[100px]'>
      <Button
        disabled={isInShoppingCart}
        onClick={() => addToCart(product as Product)}
        className='mt-4 font-bold w-full'
        color={isInShoppingCart ? 'default' : 'primary'}
      >
        {isInShoppingCart ? 'Already in cart' : 'Add to cart'}
      </Button>
      {isInShoppingCart && (
        <span
          onClick={() => removeFromCart(product?.id as number)}
          className='underline hover:text-danger-400 text-sm mt-4 cursor-pointer'
        >
          Dismiss
        </span>
      )}
    </div>
  );
}

export default AddToCartButton;
