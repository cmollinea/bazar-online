import Star from '@/app/components/Icons/Star';
import { getProducts } from '@/app/services/getProducts';
import { Products } from '@/types/products_type';
import { ProductInfoResponse } from '@/types/product_info_response._type';
import { Metadata } from 'next';
import ImagesContainer from './components/ImagesContainer';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const URL =
    process.env.NODE_ENVIROMENT === 'dev'
      ? `http://localhost:3000/api/items/${id}`
      : `https://ebazar-online.vercel.app/api/items/${id}`;

  const data = await getProducts<ProductInfoResponse>(URL);

  return {
    title: `eBazar | ${data?.product?.title}`,
    description: `${data?.product?.description}`
  };
}

async function ProductInfo({ params }: Props) {
  const id = params.id;

  const URL =
    process.env.NODE_ENVIROMENT === 'dev'
      ? `http://localhost:3000/api/items/${id}`
      : `https://bazar-online-theta.vercel.app/api/items/${id}`;

  console.log(URL);

  const data = await getProducts<ProductInfoResponse>(URL);

  return (
    <section className='min-h-screen py-10 px-10'>
      <div className='grid gap-1 justify-center'>
        <h1 className='text-2xl'>{data?.product?.title}</h1>
        {data?.product && (
          <div className='flex gap-0.5 items-center'>
            <Star count={1} rating={data?.product?.rating} />
            <Star count={2} rating={data?.product?.rating} />
            <Star count={3} rating={data?.product?.rating} />
            <Star count={4} rating={data?.product?.rating} />
            <Star count={5} rating={data?.product?.rating} />
            <small className='text-default-500 ml-1'>
              {data?.product?.rating} out of 5.0
            </small>
          </div>
        )}
        <ImagesContainer
          images={{
            thumbnail: data?.product?.thumbnail,
            images: data?.product?.images
          }}
        />
        <p className='text-4xl'>
          <strong>${data?.product?.price} USD</strong>
        </p>
        <p
          className={`${
            (data?.product?.stock as number) < 10
              ? 'text-danger-500'
              : (data?.product?.stock as number) > 20
              ? 'text-success-500'
              : ''
          }`}
        >
          {data?.product?.stock} left in stock
        </p>
        <p className='font-semibold'>
          <span className='text-default-400 font-normal'>Brand: </span>
          {data?.product?.brand}
        </p>

        <p className='font-semibold'>
          <span className='text-default-400 font-normal'>Category: </span>
          {data?.product?.category.toUpperCase()}
        </p>
        <p className='mt-4 max-w-sm'>
          {' '}
          <span className='text-default-400 font-normal'>
            Description:
            <br />{' '}
          </span>
          {data?.product?.description}
        </p>
      </div>
    </section>
  );
}
export default ProductInfo;
