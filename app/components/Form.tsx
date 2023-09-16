'use client';

import { FormEvent } from 'react';
import { Input, Button } from '@nextui-org/react';
import { useRouter, usePathname } from 'next/navigation';

function Form() {
  const pathname = usePathname();
  const router = useRouter();
  console.log('render form');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = Object.fromEntries(formData).query;
    if (!query) {
      return;
    }
    if (query && pathname !== '/') {
      router.push(pathname + `?query=` + query);
      return;
    } else {
      router.push(pathname + 'items?query=' + query);
      console.log(pathname + 'items?query=' + query);
    }
  };

  return (
    <form
      id='form'
      onSubmit={(e) => handleSearch(e)}
      className='flex items-center place-content-center w-fit px-2'
    >
      <Input
        name='query'
        size='sm'
        isClearable
        radius='sm'
        classNames={{
          input: [
            'bg-transparent',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-500/50 dark:placeholder:text-white/60',
            'w-640'
          ],
          innerWrapper: 'bg-transparent',
          inputWrapper: [
            'shadow-xl',
            'bg-default-200/50',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focused=true]:bg-default-200/50',
            'dark:group-data-[focused=true]:bg-default/60',
            '!cursor-text'
          ]
        }}
        placeholder='What are you looking for?'
      />
      <Button
        color='default'
        className='hover:brightness-90 ml-2'
        size='sm'
        type='submit'
      >
        Search
      </Button>
    </form>
  );
}

export default Form;
