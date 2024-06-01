'use client';
import * as actions from '@/app/(cwa)/actions';
import { AppContext } from '@/contexts/AppContext';
import { Cart } from '@/mock/products';
import groupBy from 'lodash.groupby';
import { PropsWithChildren, useState } from 'react';
import { toast } from 'sonner';
import { Tables } from '../../database.types';

interface AppContextProviderProps extends PropsWithChildren {
  initialCart?: Cart[];
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children, initialCart }) => {
  const [cart, setCart] = useState<Cart[]>(initialCart ?? []);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const clearCart = () => {
    setCart([]);
    actions.handleClearCart();
  };

  const handleAddToCart = (item: Tables<'products'>, quantity = 1) => {
    if (!quantity) return;

    const index = cart.findIndex((cartItem) => cartItem.product.id === item.id);
    const newCart = [...cart];

    console.log('index', index);

    if (index === -1) {
      newCart.push({ product: item, quantity: quantity });
    } else {
      newCart[index].quantity += quantity;
    }

    setCart(newCart);
    actions.handleAddToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  const handleRemoveFromCart = (item: Tables<'products'>) => {
    const index = cart.findIndex((cartItem) => cartItem.product.id === item.id);
    const newCart = [...cart];

    if (index !== -1) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
    actions.handleRemoveFromCart(item);
    toast.success(`${item.name} removed from cart!`);
  };

  const handleUpdateCart = (item: Tables<'products'>, quantity: number) => {
    if (!quantity) return;

    const index = cart.findIndex((cartItem) => cartItem.product.id === item.id);
    const newCart = [...cart];

    if (index !== -1) {
      newCart[index].quantity = quantity;
    }

    setCart(newCart);
    actions.handleUpdateCart(item, quantity);
    toast.success(`${item.name} quantity updated!`);
  };

  const groupedItems = groupBy(cart, ({ product }) => product.id);
  const totalItems = Object.keys(groupedItems).length;
  const totalQuantity = cart.reduce((prevQuantity, { quantity }) => prevQuantity + quantity, 0);

  const cost = cart.reduce((prevCost, { product, quantity }) => prevCost + (product?.price || 0) * quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        totalItems,
        totalQuantity,
        openCart,
        openMenu,
        cost,
        clearCart,
        setOpenCart,
        setOpenMenu,
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
