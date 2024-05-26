'use client';
import { AppContext } from '@/contexts/AppContext';
import { PropsWithChildren, useState } from 'react';

const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<any[]>([]);

  const handleAddToCart = (item: any) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return <AppContext.Provider value={{ items, handleAddToCart }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
