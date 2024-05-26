'use client';
import CartDrawer from '@/components/CartDrawer';
import { buttonVariants } from '@/components/ui/button';
import { AppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

import { ShoppingCart } from 'lucide-react';
import { FC, useContext } from 'react';

interface CartButtonProps {
  showTotalQuantity?: boolean;
}

const CartButton: FC<CartButtonProps> = ({ showTotalQuantity = true }) => {
  const { totalQuantity, setOpenCart } = useContext(AppContext);

  return (
    <>
      <div
        onClick={() => setOpenCart?.(true)}
        className={cn(
          buttonVariants({
            variant: 'destructive',
          }),
          'cursor-pointer text-base',
        )}
      >
        <ShoppingCart /> {showTotalQuantity && <span className="ml-2 inline-block">{totalQuantity}</span>}
      </div>
      <CartDrawer />
    </>
  );
};

export default CartButton;
