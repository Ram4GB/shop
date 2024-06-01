'use client';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AppContext } from '@/contexts/AppContext';
import { ShoppingCart } from 'lucide-react';
import { FC, useContext, useState } from 'react';
import { Tables } from '../../../../database.types';

interface AddToCardContainerProps {
  product: Tables<'products'>;
}

const AddToCardContainer: FC<AddToCardContainerProps> = ({ product }) => {
  const { handleAddToCart } = useContext(AppContext);

  const [quantity, setQuantity] = useState(0);

  const onClickAddToCart = () => {
    handleAddToCart?.(product, quantity);
    setQuantity(0);
  };

  return (
    <div>
      <Input
        min={1}
        defaultValue={0}
        value={quantity}
        className="max-w-36 text-slate-700 text-base rounded-none focus-visible:ring-0 w-full mb-4"
        type="number"
        onChange={(e) => setQuantity(Number(e.target.value))}
        onKeyDown={(e) => {
          console.log('e', e);
          if (e.key === 'Enter') {
            onClickAddToCart();
          }
        }}
      />
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            onClickAddToCart();
          }}
          className={buttonVariants({
            variant: 'default',
            size: 'lg',
          })}
        >
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default AddToCardContainer;
