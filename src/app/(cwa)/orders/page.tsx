import OrderList from '@/components/Section/Order/OrderList';
import supabase from '@/lib/supabase';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import { getCurrentUser } from '../actions';

const OrderPage: FC = async ({ searchParams }: any) => {
  const user = await getCurrentUser();

  const page = parseInt(searchParams['page']) || 1;
  const limit = parseInt(searchParams['limit']) || 5;

  if (!user) {
    redirect('/');
  }

  // page 1: 0-9
  // page 2: 10-19
  // page 3: 20-29
  const orders = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .eq('kinde_user_id', user?.id)
    .range((page - 1) * limit, (page - 1) * limit + limit - 1)
    .then(({ data }) => data);

  return (
    <div className="bg-slate-50">
      <div className="max-w-screen-md mx-auto mt-20 p-4 lg:p-0 py-8 lg:py-14">
        <h1 className="text-4xl text-slate-700 font-bold mb-8 text-center">Orders Page</h1>
        <OrderList orders={orders || []} page={page} limit={limit} />
      </div>
    </div>
  );
};

export default OrderPage;
