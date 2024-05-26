'use client';
import * as actions from '@/app/(cwa)/actions';
import { AppContext } from '@/contexts/AppContext';
import { Cart, Product } from '@/mock/products';
import groupBy from 'lodash.groupby';
import { PropsWithChildren, useState } from 'react';

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

  const handleAddToCart = (item: Product) => {
    const index = cart.findIndex((cartItem) => cartItem.product.id === item.id);
    const newCart = [...cart];

    if (index === -1) {
      newCart.push({ product: item, quantity: 1 });
    } else {
      newCart[index].quantity += 1;
    }

    setCart(newCart);
    actions.handleAddToCart(item);
  };

  const handleRemoveFromCart = (item: Product) => {
    const index = cart.findIndex((cartItem) => cartItem.product.id === item.id);
    const newCart = [...cart];

    if (index !== -1) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
    actions.handleRemoveFromCart(item);
  };

  const handleUpdateCart = (item: Product, quantity: number) => {
    const index = cart.findIndex((cartItem) => cartItem.product.id === item.id);
    const newCart = [...cart];

    if (index !== -1) {
      newCart[index].quantity = quantity;
    }

    setCart(newCart);
    actions.handleUpdateCart(item, quantity);
  };

  const groupedItems = groupBy(cart, ({ product }) => product.id);
  const totalItems = Object.keys(groupedItems).length;
  const totalQuantity = cart.reduce((prevQuantity, { quantity }) => prevQuantity + quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        totalItems,
        totalQuantity,
        openCart,
        openMenu,
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
