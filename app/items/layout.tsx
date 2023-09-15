import { ReactNode } from 'react';
import Form from '../components/Form';
import Logo from '../components/Logo';

type Props = {
  children: ReactNode;
};

function layout({ children }: Props) {
  return (
    <>
      <nav className='flex justify-between items-center py-4 backdrop-blur-xl border-b border-b-slate-200/20 sticky top-0 left-0 right-0 z-10'>
        <Logo />
        <Form />
      </nav>
      {children}
    </>
  );
}
export default layout;
