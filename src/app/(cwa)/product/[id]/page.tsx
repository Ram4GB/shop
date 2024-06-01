import DescriptionContent from '@/components/Commons/DescriptionContent';
import AddToCardContainer from '@/components/Section/Product/AddToCardContainer';
import Image from 'next/image';
import { getProductById } from '../../actions';

export const revalidate = 3600;

const ProductDetail = async ({ params }: any) => {
  const product = await getProductById(params.id);

  return (
    <div>
      <div className="max-w-screen-lg mx-auto mt-20 p-4 lg:p-0 py-8 lg:py-16">
        <div className="grid grid-cols-2 gap-16">
          <div className="h-[300px] relative">
            {product.image && (
              <Image className="object-cover w-full h-full rounded-sm" fill src={product.image} alt="" />
            )}
          </div>
          <div>
            <h1 className="text-4xl text-slate-700 font-bold mb-8">{product.name}</h1>
            <DescriptionContent>
              <div dangerouslySetInnerHTML={{ __html: product.description ?? '' }} />
            </DescriptionContent>
            <p className="text-xl text-slate-700 mb-4">Price: {product.price}$</p>
            <AddToCardContainer product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
