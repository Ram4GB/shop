'use client';
import { CircleDollarSign } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
} from '../ui/drawer';

import { AppContext } from '@/contexts/AppContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import CartItem from './CartItem';

interface CartDrawerProps {}

const CartDrawer: React.FC<CartDrawerProps> = ({}) => {
  const { cart, totalQuantity, openCart, setOpenCart } = useContext(AppContext);
  const router = useRouter();

  return (
    <Drawer direction="right" open={openCart} onOpenChange={setOpenCart}>
      <DrawerPortal>
        <DrawerContent className="bg-white flex flex-col rounded-none w-screen lg:max-w-[400px] fixed bottom-0 right-0 top-0 mt-0">
          <DrawerHeader>
            <DrawerTitle>Checkout</DrawerTitle>
            {/* 
              When url bar or navigation bar of the browser is visible. 
              Adjust height of the content to fit the rest of screen.
            */}
            <DrawerDescription style={{ height: 'calc(100svh - 200px)' }} className="overflow-y-auto">
              <div className="flex flex-col mt-8 gap-6">
                {cart.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="h-32">
            <Button
              onClick={() => {
                setOpenCart?.(false);
                router.push('/checkout');
              }}
              className="text-base"
              disabled={!totalQuantity}
            >
              Checkout <CircleDollarSign className="ml-2" />
            </Button>
            <DrawerClose>
              <Button onClick={() => setOpenCart?.(false)} className="w-full text-base" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default CartDrawer;
