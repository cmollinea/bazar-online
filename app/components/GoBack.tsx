'use client';

import { useRouter } from 'next/navigation';

function GoBack() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className='absolute top-4 left-6'>
      Back
    </button>
  );
}
export default GoBack;
