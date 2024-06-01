'use client';
import { Cart } from '@/mock/products';
import { Dispatch, SetStateAction, createContext } from 'react';
import { Tables } from '../../database.types';

interface AppContextProps {
  cart: Cart[];
  totalItems: number;
  totalQuantity?: number;
  openCart: boolean;
  openMenu: boolean;
  cost: number;
  clearCart?: () => void;
  setOpenCart?: Dispatch<SetStateAction<boolean>>;
  setOpenMenu?: Dispatch<SetStateAction<boolean>>;
  handleAddToCart: (item: Tables<'products'>, amount?: number) => void;
  handleRemoveFromCart: (item: Tables<'products'>) => void;
  handleUpdateCart: (item: Tables<'products'>, quantity: number) => void;
}

export const AppContext = createContext<AppContextProps>({
  cart: [],
  totalQuantity: 0,
  totalItems: 0,
  openCart: false,
  openMenu: false,
  cost: 0,
  clearCart: () => {},
  handleAddToCart: (item: Tables<'products'>) => {},
  handleRemoveFromCart: (item: Tables<'products'>) => {},
  handleUpdateCart: (item: Tables<'products'>) => {},
});
