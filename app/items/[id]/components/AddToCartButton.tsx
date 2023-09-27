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

  const isInShoppingCart = shoppingCart.some((item) => item.id === product?.id);

  return (
    <div>
      <Button
        disabled={isInShoppingCart}
        onClick={() => addToCart(product as Product)}
        className='mt-4 font-bold w-full'
        color={isInShoppingCart ? 'default' : 'primary'}
      >
        {isInShoppingCart ? 'Already in cart' : 'Add to cart'}
      </Button>
    </div>
  );
}

export default AddToCartButton;
