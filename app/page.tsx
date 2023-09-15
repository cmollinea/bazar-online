import Form from './components/Form';
import Logo from './components/Logo';

function Home() {
  return (
    <section className='min-h-screen grid place-content-center justify-items-center gap-6'>
      <Logo />
      <h1 className='text-4xl font-semibold'> Welcome to my Store</h1>
      <Form />
    </section>
  );
}

export default Home;
