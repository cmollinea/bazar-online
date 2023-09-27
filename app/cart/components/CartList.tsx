'use client';

import { useStore } from '@/app/hooks/useStore';
import { useCartStore } from '@/app/store/store';
import { Button, ButtonGroup } from '@nextui-org/react';

function CartList() {
  const shoppingCart = useStore(useCartStore, (state) => state.shoppingCart);

  const incrementProductQuantity = useCartStore(
    (state) => state.incrementProductQuantity
  );

  const decreaseProductQuantity = useCartStore(
    (state) => state.decreaseProductQuantity
  );

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <ul className='grid justify-center'>
      {shoppingCart?.map((item) => (
        <li
          className='grid gap-2 border p-2 rounded-lg border-default-700/20'
          key={item.id}
        >
          <div>
            <p>{item.title}</p>
            <p>Quantity:{item.quantity}</p>
          </div>
          <ButtonGroup>
            <Button onPress={() => incrementProductQuantity(item)} size='sm'>
              +
            </Button>
            <Button onPress={() => decreaseProductQuantity(item)} size='sm'>
              -
            </Button>
          </ButtonGroup>
          <Button
            color='danger'
            onPress={() => removeFromCart(item.id)}
            size='sm'
          >
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default CartList;
