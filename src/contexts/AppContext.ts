'use client';
import { createContext } from 'react';

interface AppContextProps {
  items: any[];
  handleAddToCart: (item: any) => void;
}

export const AppContext = createContext<AppContextProps>({
  items: [],
  handleAddToCart: (item: any) => {},
});
