'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Eye, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import mockImage from 'public/image/mock/300.png';
import { FC } from 'react';
import { toast } from 'sonner';

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => {
  const handleAddToCart = () => {
    toast.success('Product Added To Cart');
  };

  return (
    <Card className="shadow-sm">
      {/* <CardHeader>
        
        <CardDescription>Card Description</CardDescription>
      </CardHeader> */}
      <CardContent className="p-4">
        <div className="relative w-full aspect-square">
          <Image src={mockImage} alt="" fill className="object-cover w-full h-full rounded-3xl" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex flex-col mb-4">
          <p className="text-xl text-slate-700 font-bold">70.00$</p>
          <p className="text-base text-slate-700">Product name</p>
        </div>
        <div className="flex gap-4 justify-center w-full">
          <Button variant="outline" className="py-4 rounded-full">
            <Eye />
          </Button>
          <Button onClick={() => handleAddToCart()} variant="default" className="py-4 rounded-full">
            <ShoppingCart />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
