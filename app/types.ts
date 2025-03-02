export interface Product {
  id: string;
  name: string;
  size: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}