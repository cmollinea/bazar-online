import { Metadata } from 'next';
import CartList from './components/CartList';
import GoBack from '../components/GoBack';

export const metadata: Metadata = {
  title: 'eBazar | Cart'
};

function Cart() {
  return (
    <div className='min-h-screen relative py-20'>
      <CartList />
      <GoBack />
    </div>
  );
}
export default Cart;
