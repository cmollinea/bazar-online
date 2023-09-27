import { Metadata } from 'next';
import CartList from './components/CartList';

export const metadata: Metadata = {
  title: 'eBazar | Cart'
};

function Cart() {
  return (
    <div className='min-h-screen py-20'>
      <CartList />
    </div>
  );
}
export default Cart;
