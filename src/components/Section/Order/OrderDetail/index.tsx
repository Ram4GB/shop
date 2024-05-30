import CartItem from '@/components/CartDrawer/CartItem';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { Cart } from '@/mock/products';
import { FC } from 'react';
import { Tables } from '../../../../../database.types';

interface OrderDetailProps {
  openCart: boolean;
  order?: Tables<'orders'> | null;
  setOpenCart: (open: boolean) => void;
}

const OrderDetail: FC<OrderDetailProps> = ({ order, openCart, setOpenCart }) => {
  const cart = order ? (JSON.parse(order.products as string) as Cart[]) : [];

  return (
    <Drawer shouldScaleBackground={false} direction="right" open={openCart} onOpenChange={setOpenCart}>
      <DrawerContent className="bg-white flex flex-col rounded-none w-[400px] mt-0 right-0 left-auto">
        <DrawerHeader>
          <DrawerTitle>Checkout</DrawerTitle>
          {/* 
          When url bar or navigation bar of the browser is visible. 
          Adjust height of the content to fit the rest of screen.
        */}
          <DrawerDescription
            style={{ height: 'calc(100svh - 200px)' }}
            className={cn('overflow-y-auto', {
              'flex items-center justify-center': cart.length === 0,
            })}
          >
            {cart.length === 0 && <p className="text-center text-base text-slate-700">Cart is empty</p>}
            {cart.length > 0 && (
              <div className="flex flex-col mt-8 gap-6">
                {cart.map((item) => (
                  <CartItem readOnly key={item.product.id} item={item} />
                ))}
              </div>
            )}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="h-36">
          <p className="text-lg text-slate-700 font-bold">Cost: {order?.total_amount}$</p>
          <DrawerClose>
            <Button onClick={() => setOpenCart?.(false)} className="w-full text-base" variant="default">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default OrderDetail;
