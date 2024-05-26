'use server';
import supabase from '@/lib/supabase';
import { Product } from '@/mock/products';
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
