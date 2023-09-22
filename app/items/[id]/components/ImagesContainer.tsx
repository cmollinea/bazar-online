'use client';
import { Image } from '@nextui-org/react';
import { useMemo, useState } from 'react';

type Props = {
  images: {
    thumbnail?: string;
    images?: string[];
  };
};

function ImagesContainer({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState(images.thumbnail);

  // Las imágenes del json vienen con el thumbnail al final;
  // al ser la imagen principal pues prefiero que este de primera
  // por eso el reverse, y el useMemo para evitar que se rompa en los renderizados
  // debido a la naturaleza de reverse()

  const reverseImages = useMemo(
    () => images.images?.reverse(),
    [images.images]
  );

  const handleSelectImage = (image: string) => {
    if (selectedImage === image) {
      return;
    }
    setSelectedImage(image);
  };

  return (
    <div className='grid grid-cols-4 gap-y-4 sm:gap-y-2 sm:gap-x-6 place-items-center sm:place-items-start py-10 place-content-center justify-items-center'>
      {/* Estoy usando tamaños de imágenes fixed poque todas no tienen la misma relación-aspecto */}
      <Image
        alt=''
        src={selectedImage}
        classNames={{
          wrapper: 'col-span-4 sm:col-span-3 row-span-4',
          img: 'h-[250px] w-[350px]'
        }}
        isBlurred
      />
      {reverseImages?.map((image, index) => (
        <Image
          key={index}
          alt=''
          isBlurred
          onClick={() => handleSelectImage(image)}
          src={image}
          classNames={{
            wrapper: `sm:col-start-4 border-2 border-transparent cursor-pointer ${
              selectedImage === image ? 'border-2 border-primary-400' : ''
            }`,
            img: 'h-[50px] w-[50px]'
          }}
        />
      ))}
    </div>
  );
}

export default ImagesContainer;
