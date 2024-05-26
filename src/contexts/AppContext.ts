'use client';
import { Cart, Product } from '@/mock/products';
import { createContext } from 'react';

interface AppContextProps {
  cart: Cart[];
  totalItems: number;
  totalQuantity?: number;
  handleAddToCart: (item: Product) => void;
  handleRemoveFromCart: (item: Product) => void;
  handleUpdateCart: (item: Product, quantity: number) => void;
}

export const AppContext = createContext<AppContextProps>({
  cart: [],
  totalQuantity: 0,
  totalItems: 0,
  handleAddToCart: (item: Product) => {},
  handleRemoveFromCart: (item: Product) => {},
  handleUpdateCart: (item: Product) => {},
});
