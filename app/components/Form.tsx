'use client';

import { FormEvent } from 'react';
import { Input, Button } from '@nextui-org/react';
import { useRouter, usePathname } from 'next/navigation';
import SearchIcon from './Icons/SearchIcon';

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
      className='flex border-sm items-center place-content-center w-fit px-2 mr-4'
    >
      <Input
        name='query'
        size='md'
        isClearable
        radius='sm'
        placeholder='What are you looking for?'
        className='group'
        variant='bordered'
        startContent={<SearchIcon />}
        classNames={{
          inputWrapper: 'border-small'
        }}
      />
    </form>
  );
}

export default Form;
