import { CircleDollarSign } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
} from '../ui/drawer';

import { AppContext } from '@/contexts/AppContext';
import { useContext } from 'react';
import CartItem from './CartItem';

interface CartDrawerProps {}

const CartDrawer: React.FC<CartDrawerProps> = ({}) => {
  const { cart, totalQuantity } = useContext(AppContext);

  return (
    <>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-black/40" />
        <DrawerContent className="bg-white flex flex-col rounded-t-[10px] h-full w-[400px] mt-24 fixed bottom-0 right-0 ">
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
            <Button disabled={!totalQuantity}>
              Checkout <CircleDollarSign className="ml-2" />
            </Button>
            <DrawerClose>
              <Button className="w-full" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </>
  );
};

export default CartDrawer;
