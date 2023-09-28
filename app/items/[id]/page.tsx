import Star from '@/app/components/Icons/Star';
import { devBaseUrl, prodBaseUrl } from '@/app/constants/baseUrl';
import { getProducts } from '@/app/services/getProducts';
import { ProductInfoResponse } from '@/types/product_info_response_type';
import { Metadata } from 'next';
import { ratingStarts } from '@/app/constants/ratingStars';
import AddToCartButton from './components/AddToCartButton';
import ImagesContainer from './components/ImagesContainer';
import GoBack from '@/app/components/GoBack';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const URL =
    process.env.NODE_ENVIROMENT === 'dev'
      ? devBaseUrl + '/' + id
      : prodBaseUrl + '/' + id;

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
      ? devBaseUrl + '/' + id
      : prodBaseUrl + '/' + id;

  const data = await getProducts<ProductInfoResponse>(URL);

  if (!data?.product) {
    return 404;
  }

  return (
    <section className='min-h-screen relative pt-16 pb-8 px-10'>
      <GoBack />
      <div className='grid gap-1 justify-center'>
        <h1 className='text-2xl'>{data?.product?.title}</h1>
        {data?.product && (
          <div className='flex gap-0.5 items-center'>
            {ratingStarts.map((star) => (
              <Star key={star} rating={data.product?.rating} count={star} />
            ))}
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
        <p className='text-lg'>
          <del> ${data?.product?.price} USD</del>
          {data?.product?.discountPercentage && (
            <sub className='text-xs text-danger-400 px-2'>
              {data?.product?.discountPercentage}% off
            </sub>
          )}
        </p>
        {data?.product?.price && data.product.discountPercentage ? (
          <p className='text-4xl'>
            <strong>
              {' '}
              {Math.ceil(
                data?.product?.price -
                  (data?.product?.discountPercentage * data?.product?.price) /
                    100
              ) - 0.01}{' '}
              USD
            </strong>
          </p>
        ) : null}
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
        <AddToCartButton product={data?.product} />
      </div>
    </section>
  );
}
export default ProductInfo;
