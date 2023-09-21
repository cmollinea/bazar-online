'use client';

import { Spinner } from '@nextui-org/react';

function Loading() {
  return (
    <section className='min-h-screen flex place-content-center items-center'>
      <Spinner color='current' size='lg' />
    </section>
  );
}
export default Loading;
