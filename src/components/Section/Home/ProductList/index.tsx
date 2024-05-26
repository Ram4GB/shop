import { getAllProducts } from '@/app/(cwa)/actions';
import ProductCard from '@/components/Commons/ProductCard';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';

const ProductList = async () => {
  const products = await getAllProducts();

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {products?.map((product) => <ProductCard key={product.id} item={product} />)}
      </div>
      {products && products.length > 8 && (
        <div className="text-center">
          <Link
            href="/products"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'text-lg mx-auto font-bold text-center mt-4 underline underline-offset-4 uppercase inline-block',
            )}
          >
            More products
          </Link>
        </div>
      )}
    </>
  );
};

export default ProductList;
