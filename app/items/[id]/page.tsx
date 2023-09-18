import { Products } from '@/types/products_type';

type Props = {
  params: {
    id: string;
  };
};

async function ProductInfo({ params }: Props) {
  const id = params.id;
  const response = await fetch(`http://localhost:3000/api/items/${id}`);

  const data: Products = await response.json();

  return <div>{JSON.stringify(data)}</div>;
}
export default ProductInfo;
