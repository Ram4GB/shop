import Image from 'next/image';
import coffeeMilk from 'public/image/mock/products/coffee-milk.png';
import { Input } from '../ui/input';

const CartItem = () => {
  return (
    <div className="flex items-center">
      <div className="w-16 aspect-square relative">
        <Image src={coffeeMilk} alt="" fill className="w-full h-full rounded-sm" />
      </div>
      <div className="ml-2">
        <p className="font-bold">Product name</p>
        <p>Amount: 5</p>
      </div>
      <div className="ml-auto">
        <Input value={0} className="max-w-20 text-base" type="number" />
      </div>
    </div>
  );
};

export default CartItem;
