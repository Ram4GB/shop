'use client';
import CartItem from '@/components/CartDrawer/CartItem';
import { buttonVariants } from '@/components/ui/button';
import { userNotFound } from '@/const';
import { AppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { CreditCard, Loader } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { handleCheckoutOrder } from '../actions';

const CheckoutPage = () => {
  const { cart, cost, totalItems } = useContext(AppContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const order_id =
    searchParams.get('order_id') ??
    (typeof localStorage !== 'undefined' && (localStorage.getItem('order_id') as string));
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickCheckout = async () => {
    setDisabled(true);
    setLoading(true);

    const data = await handleCheckoutOrder(order_id as string);

    setDisabled(false);
    setLoading(false);

    if (!data.success) {
      if ((data as any)?.message) {
        if ((data as any)?.message === userNotFound) {
          toast.error('Please login to continue.');
          return router.push('/api/auth/login');
        }
      }
    } else {
      router.push(data?.url ?? '');
    }
  };

  useEffect(() => {
    if (order_id) {
      localStorage.setItem('order_id', order_id as string);
    }
  }, [order_id]);

  return (
    <div className="bg-slate-50">
      <div className="max-w-screen-md mx-auto mt-20 p-4 lg:p-0 py-8 lg:py-14">
        <h1 className="text-4xl text-slate-700 font-bold mb-8 text-center">Checkout Page</h1>
        <div className="flex flex-col gap-4 min-h-32">
          {!cart.length && <p className="text-base text-slate-700">Cart is empty.</p>}
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <div className="mt-8 flex justify-end flex-col">
          <p className="mb-4 text-slate-700 text-xl">
            <span className="text-slate-700 font-bold">Cost:</span> <span className="">{cost}.00$</span>
          </p>
          <button
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'lg',
              }),
              'text-base',
            )}
            onClick={handleClickCheckout}
            disabled={disabled || !totalItems}
          >
            {loading ? (
              <Loader className="animate-spin" />
            ) : (
              <>
                Pay now <CreditCard className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
