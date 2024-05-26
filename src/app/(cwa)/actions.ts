'use server';
import { userNotFound } from '@/const';
import { stripe } from '@/lib/stripe';
import supabase from '@/lib/supabase';
import { Product } from '@/mock/products';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const handleAddToCart = async (product: Product) => {
  const cookiesStore = cookies();
  const cart = await handleGetCart();

  const index = cart.findIndex((cartItem) => cartItem.product.id === product.id);

  if (index === -1) {
    cart.push({ product, quantity: 1 });
  } else {
    cart[index].quantity += 1;
  }

  cookiesStore.set('cart', JSON.stringify(cart), { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 7 });
};

export const handleGetCart = () => {
  try {
    const cookiesStore = cookies();

    const cart = JSON.parse((cookiesStore.get('cart')?.value as unknown as string) || '[]') || [];

    const isCartArray = Array.isArray(cart);

    if (!isCartArray) throw new Error('Cart is not an array');

    return cart;
  } catch (error) {
    cookies().delete('cart');
    return [];
  }
};

export const handleRemoveFromCart = async (product: Product) => {
  const cookiesStore = cookies();
  const cart = await handleGetCart();

  const index = cart.findIndex((cartItem) => cartItem.product.id === product.id);

  if (index !== -1) {
    cart.splice(index, 1);
  }

  cookiesStore.set('cart', JSON.stringify(cart), { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 7 });
};

export const handleUpdateCart = async (product: Product, quantity: number) => {
  const cookiesStore = cookies();
  const cart = await handleGetCart();

  const index = cart.findIndex((cartItem) => cartItem.product.id === product.id);

  if (index !== -1) {
    cart[index].quantity = quantity;
  }

  cookiesStore.set('cart', JSON.stringify(cart), { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 7 });
};

export const getAllProducts = cache(() =>
  supabase
    .from('products')
    .select('*')
    .then(({ data }) => data),
);

export const handleCheckoutOrder = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error(userNotFound);

  const cart = await handleGetCart();

  // Create order
  const order = await supabase
    .from('orders')
    .insert({
      kinde_user_id: user.id,
      products: JSON.stringify(cart),
      total_amount: cart.reduce((acc, item) => acc + item.product.price, 0),
    })
    .throwOnError()
    .select()
    .single()
    .throwOnError();

  console.log('order', order);

  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: cart.map((item) => ({
      price: item.product.price_id,
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/checkout-success?redirectUrl=/`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/?order-status=cancel&?order_id=${order.data?.id}`,
    shipping_address_collection: {
      allowed_countries: ['US', 'VN'],
    },
    metadata: {
      userId: user.id,
      orderId: order.data?.id!,
    },
  });

  return { url: stripeSession.url };
};

export const handleClearCart = () => {
  cookies().delete('cart');
};
