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

import { handleCheckoutOrder } from '@/app/(cwa)/actions';
import { userNotFound } from '@/const';
import { AppContext } from '@/contexts/AppContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { toast } from 'sonner';
import CartItem from './CartItem';

interface CartDrawerProps {}

const CartDrawer: React.FC<CartDrawerProps> = ({}) => {
  const { cart, totalQuantity, openCart, setOpenCart, clearCart } = useContext(AppContext);
  const router = useRouter();

  return (
    <Drawer direction="right" open={openCart} onOpenChange={setOpenCart}>
      <DrawerPortal>
        <DrawerContent className="bg-white flex flex-col rounded-none h-full w-[400px] mt-24 fixed bottom-0 right-0 ">
          <DrawerHeader>
            <DrawerTitle>Checkout</DrawerTitle>
            <DrawerDescription style={{ height: 'calc(100vh - 200px)' }} className="overflow-y-auto">
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
                handleCheckoutOrder()
                  .catch((e) => {
                    if (e?.message) {
                      if (e.message === userNotFound) {
                        toast.error(userNotFound);
                      }
                    }
                  })
                  .then((data) => {
                    router.push(data?.url ?? '');
                  });
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
