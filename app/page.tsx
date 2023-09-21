import Link from 'next/link';
import Form from './components/Form';
import Logo from './components/Logo';

function Home() {
  return (
    <section className='min-h-screen grid place-content-center justify-items-center'>
      <Logo />
      <h1 className='text-5xl font-bold pb-6'> eBAZAR</h1>
      <Form />
      <Link
        className=' text-default-400 underline hover:text-primary mt-4'
        href='/items'
      >
        <small>View all products</small>
      </Link>
    </section>
  );
}

export default Home;
