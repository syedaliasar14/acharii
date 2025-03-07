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

export interface Address {
  name: string;
  street: string;
  street2?: string;
  city: string;
  state: string;
  zip: string;
}

export interface AddressErrors {
  name: boolean;
  street: boolean;
  street2: boolean;
  city: boolean;
  state: boolean;
  zip: boolean;
}