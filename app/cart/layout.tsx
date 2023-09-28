import Amount from './components/Amount';

type Props = {
  children: React.ReactNode;
};

function CartLayout({ children }: Props) {
  return (
    <>
      <Amount />
      {children}

      <button className='fixed z-10 bottom-8 right-6 bg-primary-400 rounded-full p-2'>
        Checkout
      </button>
    </>
  );
}
export default CartLayout;
