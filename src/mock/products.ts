import coffeeMilk from 'public/image/mock/products/coffee-milk.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
}

export interface Cart {
  product: Product;
  quantity: number;
}

export const products: Array<Product> = [
  {
    id: '1',
    name: 'Coffee Milk',
    price: 5,
    image: coffeeMilk,
  },
  {
    id: '2',
    name: 'Coffee Mocha',
    price: 7,
    image: coffeeMilk,
  },
  {
    id: '3',
    name: 'Carame Latte',
    price: 5,
    image: coffeeMilk,
  },
  {
    id: '4',
    name: 'Caoca Caremen Latte',
    price: 15,
    image: coffeeMilk,
  },
  {
    id: '5',
    name: 'Nitro Beer',
    price: 5,
    image: coffeeMilk,
  },
  {
    id: '6',
    name: 'Coffee Milk',
    price: 5,
    image: coffeeMilk,
  },
  {
    id: '7',
    name: 'Coffee Mocha',
    price: 7,
    image: coffeeMilk,
  },
  {
    id: '8',
    name: 'Carame Latte',
    price: 5,
    image: coffeeMilk,
  },
];
