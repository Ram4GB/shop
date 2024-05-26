'use client';
import CartDrawer from '@/components/CartDrawer';
import { buttonVariants } from '@/components/ui/button';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import { AppContext } from '@/contexts/AppContext';
import groupBy from 'lodash.groupby';
import { ShoppingCart } from 'lucide-react';
import { FC, useContext } from 'react';

interface CartButtonProps {}

const CartButton: FC<CartButtonProps> = () => {
  const { items } = useContext(AppContext);

  const groupedItems = groupBy(items, ({ id }) => id);
  const totalItems = Object.keys(groupedItems).length;

  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <div
            className={buttonVariants({
              variant: 'default',
              size: 'sm',
            })}
          >
            <ShoppingCart /> <span className="ml-2 inline-block">{totalItems}</span>
          </div>
        </DrawerTrigger>

        <CartDrawer />
      </Drawer>
    </>
  );
};

export default CartButton;
