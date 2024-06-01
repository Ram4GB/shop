'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Info, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { FC, useRef } from 'react';
import { toast } from 'sonner';

interface ProductCardProps {
  item?: any;
  addToCart?: (item: any) => void;
  viewDetails?: (item: any) => void;
}

const ProductCard: FC<ProductCardProps> = ({ item, addToCart, viewDetails }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleShowDetails = () => {
    toast.info('Product Details');
  };

  return (
    <Card className="shadow-sm group relative cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        <div className="relative w-full aspect-square">
          <Image
            ref={imageRef}
            quality={100}
            src={item?.image ?? ''}
            alt={item?.name ?? ''}
            fill
            className="object-cover w-full h-full rounded-t-2xl"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start lg:mt-4 p-4 lg:p-6">
        <div className="flex flex-col justify-center">
          <p className="text-lg font-bold text-slate-700 truncate max-w-40 mx-auto ">{item?.name}</p>
          <p className="text-base text-slate-700 font-normal">${item?.price}.00</p>
        </div>
      </CardFooter>

      <div className="bg-white sm:absolute sm:bottom-0 sm:translate-y-full group-hover:translate-y-0 sm:opacity-0 group-hover:opacity-100 w-full px-2 sm:p-4 pt-0 pb-4 flex justify-center items-center transition-all duration-200 gap-2">
        <Button onClick={() => viewDetails?.(item)} variant="outline" className="py-4 rounded-full">
          <Info />
        </Button>
        <Button onClick={() => addToCart?.(item)} variant="default" className="py-4 rounded-full">
          <ShoppingCart />
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
