'use client';
import { Image } from '@nextui-org/react';
import { useState } from 'react';

type Props = {
  images: {
    thumbnail?: string;
    images?: string[];
  };
};

function ImagesContainer({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState(images.thumbnail);

  const handleSelectImage = (image: string) => {
    if (selectedImage === image) {
      return;
    }
    setSelectedImage(image);
  };

  return (
    <div className='grid grid-cols-4 gap-y-4 sm:gap-y-2 sm:gap-x-6 place-items-center sm:place-items-start py-10 place-content-center justify-items-center'>
      <Image
        alt=''
        src={selectedImage}
        classNames={{
          wrapper:
            'border border-default-500 col-span-4 sm:col-span-3 row-span-4  w-full max-h-[250px] max-w-[280px] h-full w-full',
          img: 'h-full w-full'
        }}
        isBlurred
      />
      {images.images?.map((image, index) => (
        <Image
          key={index}
          alt=''
          isBlurred
          onClick={() => handleSelectImage(image)}
          src={image}
          classNames={{
            wrapper: `border sm:col-start-4 ${
              selectedImage === image
                ? 'border-primary-400'
                : 'border-default-500'
            }`,
            img: 'h-[50px] w-[50px]'
          }}
        />
      ))}
    </div>
  );
}

export default ImagesContainer;
