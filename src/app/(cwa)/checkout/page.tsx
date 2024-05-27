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
  const { cart, cost } = useContext(AppContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const order_id = searchParams.get('order_id') ?? (localStorage.getItem('order_id') as string);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickCheckout = () => {
    setDisabled(true);
    setLoading(true);
    handleCheckoutOrder(order_id)
      .catch((e) => {
        if (e?.message) {
          if (e.message === userNotFound) {
            toast.error('Please login to continue.');
            window.location.href = '/api/auth/login';
          }
        }
      })
      .then((data) => {
        router.push(data?.url ?? '');
      })
      .finally(() => {
        setDisabled(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    localStorage.setItem('order_id', order_id as string);
  }, [order_id]);

  return (
    <div className="bg-slate-50">
      <div className="max-w-screen-lg mx-auto mt-20 py-4 lg:py-14">
        <h1 className="text-3xl text-slate-700 font-bold mb-4">Checkout Page</h1>
        <p className="mb-2 lg:mb-7 text-slate-700">Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <div className="mt-8 flex justify-end flex-col">
          <p className="mb-4 text-slate-700 text-2xl">
            <span className="text-slate-700 font-bold">Total:</span> <span className="">${cost}.00</span>
          </p>
          <button
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'lg',
              }),
            )}
            onClick={handleClickCheckout}
            disabled={disabled}
          >
            {loading ? (
              <Loader className="animate-spin" />
            ) : (
              <>
                {' '}
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
