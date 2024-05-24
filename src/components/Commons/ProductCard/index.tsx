'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import debounce from 'lodash.debounce';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

interface ProductCardProps {
  item?: any;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    setImageHeight(imageRef.current?.getBoundingClientRect().height ?? 0);

    const handler = debounce(() => {
      setImageHeight(imageRef.current?.getBoundingClientRect().height ?? 0);
    }, 200);

    window.addEventListener('resize', handler);

    return () => removeEventListener('resize', handler);
  }, []);

  const handleAddToCart = () => {
    toast.success('Product Added To Cart');
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
      <CardFooter className="flex flex-col items-start mt-4">
        <div className="flex flex-col justify-center">
          <p className="text-lg font-bold text-slate-700 truncate max-w-40 mx-auto ">{item?.name}</p>
          <p className="text-base text-slate-700 font-normal">${item?.price}.00</p>
        </div>
      </CardFooter>

      <div
        style={{ height: `calc(100% - ${imageHeight}px)` }}
        className="bg-white absolute bottom-0 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 w-full p-3 flex justify-center items-center transition-all duration-200"
      >
        <Button onClick={() => handleAddToCart()} variant="default" className="py-4 rounded-full">
          <ShoppingCart className="mr-2" /> <span className="text-base font-bold">${item.price}.00</span>
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
