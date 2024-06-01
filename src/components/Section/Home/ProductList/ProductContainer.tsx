'use client';
import ProductCard from '@/components/Commons/ProductCard';
import { AppContext } from '@/contexts/AppContext';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext } from 'react';
import { Tables } from '../../../../../database.types';

interface ProductContainerProps extends PropsWithChildren {
  products?: Tables<'products'>[];
}

const ProductContainer: FC<ProductContainerProps> = ({ products }) => {
  const router = useRouter();
  const { handleAddToCart } = useContext(AppContext);

  return (
    <>
      {products?.map((product) => (
        <ProductCard
          addToCart={() => {
            handleAddToCart(product);
          }}
          viewDetails={() => {
            router.push(`/product/${product.id}`);
          }}
          key={product.id}
          item={product}
        />
      ))}
    </>
  );
};

export default ProductContainer;
