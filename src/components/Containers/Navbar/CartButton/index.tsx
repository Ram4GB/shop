'use client';
import CartDrawer from '@/components/CartDrawer';
import { buttonVariants } from '@/components/ui/button';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import { AppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

import { ShoppingCart } from 'lucide-react';
import { FC, useContext } from 'react';

interface CartButtonProps {}

const CartButton: FC<CartButtonProps> = () => {
  const { totalQuantity } = useContext(AppContext);

  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <div
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'sm',
              }),
              'cursor-pointer',
            )}
          >
            <ShoppingCart /> <span className="ml-2 inline-block">{totalQuantity}</span>
          </div>
        </DrawerTrigger>

        <CartDrawer />
      </Drawer>
    </>
  );
};

export default CartButton;
