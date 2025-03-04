export interface Product {
  id: string;
  name: string;
  size: string;
  description: string;
  price: number;
  priceId: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}