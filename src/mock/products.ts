import bacSiu from 'public/image/mock/products/bac-siu.jpg';
import cacaoCaramel from 'public/image/mock/products/cacao-caramel.png';
import caramelLatte from 'public/image/mock/products/caramel-latte.png';
import coffeeMilk from 'public/image/mock/products/coffee-milk.png';
import coffeMocha from 'public/image/mock/products/coffee-mocha.png';
import croissant from 'public/image/mock/products/croissant.jpeg';
import pannaCotta from 'public/image/mock/products/panna-cotta.jpg';
import nitroBeer from 'public/image/mock/products/what-is-nitro-beer.jpg';
import { Tables } from '../../database.types';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
}

export interface Cart {
  product: Tables<'products'>;
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
    image: coffeMocha,
  },
  {
    id: '3',
    name: 'Carame Latte',
    price: 5,
    image: caramelLatte,
  },
  {
    id: '4',
    name: 'Caoca Caremen Latte',
    price: 15,
    image: cacaoCaramel,
  },
  {
    id: '5',
    name: 'Nitro Beer',
    price: 5,
    image: nitroBeer,
  },
  {
    id: '6',
    name: 'Croissant Sandwich',
    price: 5,
    image: croissant,
  },
  {
    id: '7',
    name: 'Panna Cotta Cake',
    price: 7,
    image: pannaCotta,
  },
  {
    id: '8',
    name: 'Silver Xiu',
    price: 5,
    image: bacSiu,
  },
];
