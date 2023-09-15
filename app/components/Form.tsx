'use client';

import { FormEvent } from 'react';
import { Input, Button } from '@nextui-org/react';
import { useRouter, usePathname } from 'next/navigation';

function Form() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const form: EventTarget = e.target;
    const formData = new FormData(form as HTMLFormElement);
    if (Object.fromEntries(formData).query) {
      console.log(Object.fromEntries(formData).query);
      router.push(pathname + `{}` + Object.fromEntries(formData).query);
    }
    return;
  };

  return (
    <form
      id='form'
      onSubmit={(e) => handleSearch(e)}
      className='flex items-center place-content-center w-fit'
    >
      <Input
        name='query'
        label='Search'
        size='sm'
        isClearable
        radius='lg'
        classNames={{
          label: 'text-black/50 dark:text-white/90',
          input: [
            'bg-transparent',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
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
        placeholder='Type to search...'
      />
      <Button
        color='primary'
        className='hover:brightness-90 ml-4'
        size='md'
        type='submit'
      >
        Search
      </Button>
    </form>
  );
}

export default Form;
