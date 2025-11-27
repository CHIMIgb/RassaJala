export interface Product {
  name: string;
  image: string;
  discount: number;
  stock: number;
  price: number;
  description: string;
}

export interface CartProduct extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    name: 'Bacon burger',
    image: 'https://img.freepik.com/foto-gratis/hamburguesa-doble-queso-deliciosa_1203-6804.jpg',
    discount: 15,
    stock: 10,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil moliltia ipsam',
  },
  {
    name: 'Tacos a la mexicana',
    image: 'https://img.freepik.com/foto-gratis/tacos-mexicanos-carne-res-salsa-tomate-salsa_2829-14218.jpg',
    discount: 5,
    stock: 8,
    price: 89.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil moliltia ipsam',
  },
  {
    name: 'Pollito',
    image: 'https://img.freepik.com/foto-gratis/pollo-frito-crujiente_1339-1532.jpg',
    discount: 10,
    stock: 5,
    price: 49.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil moliltia ipsam',
  },
  {
    name: 'Lonche del chavo',
    image: 'https://img.freepik.com/foto-gratis/sandwich-club-clasico_140725-11094.jpg',
    discount: 0,
    stock: 12,
    price: 69.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil moliltia ipsam',
  },
  {
    name: 'Pizza Pepperoni',
    image: 'https://img.freepik.com/foto-gratis/pizza-pepperoni-champiñones-aceitunas_140725-1200.jpg',
    discount: 20,
    stock: 15,
    price: 129.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil moliltia ipsam',
  },
  {
    name: 'Ensalada César',
    image: 'https://img.freepik.com/foto-gratis/ensalada-cesar-fresca_140725-3891.jpg',
    discount: 0,
    stock: 20,
    price: 79.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil moliltia ipsam',
  },
];

export const cartProducts: CartProduct[] = [
  {
    name: 'Bacon burger',
    image: 'https://img.freepik.com/foto-gratis/hamburguesa-doble-queso-deliciosa_1203-6804.jpg',
    discount: 15,
    stock: 10,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    quantity: 2,
  },
  {
    name: 'Pollito',
    image: 'https://img.freepik.com/foto-gratis/pollo-frito-crujiente_1339-1532.jpg',
    discount: 10,
    stock: 5,
    price: 49.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    quantity: 1,
  },
];