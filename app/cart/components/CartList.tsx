'use client';

import { useStore } from '@/app/hooks/useStore';
import { useCartStore } from '@/app/store/store';
import {
  Button,
  ButtonGroup,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '@nextui-org/react';

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
    <ul className='grid gap-4 justify-center'>
      {shoppingCart?.map((item) => (
        <Card
          isFooterBlurred
          className='flex gap-2 border text-sm w-[300px] rounded-lg border-default-700/40 relative border-none'
          key={item.id}
        >
          <CardHeader className='flex flex-col place-content-start items-start px-5'>
            {' '}
            <p className='font-semibold text-lg truncate' title={item.title}>
              {item.title}
            </p>
            <small>
              {Math.ceil(
                item.price - (item.discountPercentage / 100) * item.price
              )}{' '}
              USD
            </small>
            <small>
              {item.quantity}{' '}
              {item.quantity === 1 ? 'item in cart' : 'items in cart'}
            </small>
          </CardHeader>
          <Image
            isBlurred
            src={item.thumbnail}
            alt={item.description + 'thumbnail'}
            classNames={{
              wrapper:
                'border border-default-500/10 max-w-[140px] min-h-[150px]'
            }}
          />
          <CardFooter className='flex absolute bottom-0 items-center place-content-center'>
            <ButtonGroup className=' gap-2'>
              <Button
                onPress={() => incrementProductQuantity(item)}
                size='sm'
                className='text-xl'
              >
                +
              </Button>
              <Button
                onPress={() => decreaseProductQuantity(item)}
                size='sm'
                className='text-xl'
              >
                -
              </Button>
              <Button
                color='danger'
                variant='bordered'
                onPress={() => removeFromCart(item.id)}
                size='sm'
              >
                Remove
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </ul>
  );
}
export default CartList;
