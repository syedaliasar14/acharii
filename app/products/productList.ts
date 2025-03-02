export interface Product {
  name: string;
  size: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    name: "Lemon Jalepeno Achar",
    size: "8oz",
    description: "A tangy and spicy lemon achar with jalepeno flavor.",
    price: 5.99,
    image: "/lemon-jalepeno-8oz.jpg",
  },
  {
    name: "Lemon Jalepeno Achar",
    size: "12oz",
    description: "A tangy and spicy lemon achar with jalepeno flavor.",
    price: 8.99,
    image: "/lemon-jalepeno-12oz.jpg",
  },
  {
    name: "Lemon Jalepeno Achar",
    size: "16oz",
    description: "A tangy and spicy lemon achar with jalepeno flavor.",
    price: 10.99,
    image: "/lemon-jalepeno-16oz.jpg",
  },
  {
    name: "Ginger Garlic Achar",
    size: "8oz",
    description: "A bold and flavorful achar with ginger and garlic.",
    price: 5.99,
    image: "/ginger-garlic-8oz.jpg",
  },
  {
    name: "Ginger Garlic Achar",
    size: "12oz",
    description: "A bold and flavorful achar with ginger and garlic.",
    price: 8.99,
    image: "/ginger-garlic-12oz.jpg",
  },
  {
    name: "Ginger Garlic Achar",
    size: "16oz",
    description: "A bold and flavorful achar with ginger and garlic.",
    price: 10.99,
    image: "/ginger-garlic-16oz.jpg",
  },
];
