import { AppContext } from '@/contexts/AppContext';
import { Cart } from '@/mock/products';
import Image from 'next/image';
import { FC, useContext } from 'react';
import { buttonVariants } from '../ui/button';
import { Input } from '../ui/input';

interface CartItemProps {
  item: Cart;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { handleRemoveFromCart, handleUpdateCart } = useContext(AppContext);

  return (
    <div className="flex items-center">
      <div className="w-16 aspect-square relative">
        <Image src={item.product.image} alt="" fill className="w-full h-full rounded-sm" />
      </div>
      <div className="ml-2">
        <p className="text-slate-700 font-bold text-base">{item.product.name}</p>
        <p className="text-base text-slate-700">x {item.quantity}</p>
        <p className="text-base text-slate-700">= {item.quantity * item.product.price}.00$</p>
      </div>
      <div className="ml-auto flex">
        <Input
          min={1}
          value={item.quantity}
          className="max-w-20 text-slate-700 text-base rounded-none focus-visible:ring-0"
          type="number"
          onChange={(e) => handleUpdateCart(item.product, Number(e.target.value))}
        />
        <button
          onClick={() => handleRemoveFromCart(item.product)}
          className={buttonVariants({ variant: 'link', size: 'sm' })}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
