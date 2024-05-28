'use client';
import { AppContext } from '@/contexts/AppContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { toast } from 'sonner';

const Page = () => {
  const router = useRouter();
  const { push } = router;
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirectUrl') as string;
  const { clearCart } = useContext(AppContext);

  useEffect(() => {
    (async function () {
      await clearCart?.();
      localStorage.removeItem('order_id');
      toast.success('Order placed successfully 🎉. Check your email for deliver');
      push(redirectUrl);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Page;
