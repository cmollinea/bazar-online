'use client';

import { useCartStore } from '../store/store';

function Cart() {
  console.log('Rendering Cart');

  const shoppingCart = useCartStore((state) => state.shoppingCart);
  console.log(shoppingCart);

  return <>{shoppingCart.length > 0 ? <p>Items</p> : <p>No items</p>}</>;
}

export default Cart;
