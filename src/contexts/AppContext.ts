'use client';
import { Cart, Product } from '@/mock/products';
import { Dispatch, SetStateAction, createContext } from 'react';

interface AppContextProps {
  cart: Cart[];
  totalItems: number;
  totalQuantity?: number;
  openCart: boolean;
  openMenu: boolean;
  setOpenCart?: Dispatch<SetStateAction<boolean>>;
  setOpenMenu?: Dispatch<SetStateAction<boolean>>;
  handleAddToCart: (item: Product) => void;
  handleRemoveFromCart: (item: Product) => void;
  handleUpdateCart: (item: Product, quantity: number) => void;
}

export const AppContext = createContext<AppContextProps>({
  cart: [],
  totalQuantity: 0,
  totalItems: 0,
  openCart: false,
  openMenu: false,
  handleAddToCart: (item: Product) => {},
  handleRemoveFromCart: (item: Product) => {},
  handleUpdateCart: (item: Product) => {},
});
