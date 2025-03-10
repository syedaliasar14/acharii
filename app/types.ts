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
  pickup?: boolean;
}

export interface AddressErrors {
  name: boolean;
  street: boolean;
  street2: boolean;
  city: boolean;
  state: boolean;
  zip: boolean;
}

export interface Order {
  _id: string;
  customerName: string;
  email: string;
  phone: string;
  address: Address;
  items: {
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: string;
  createdAt: string;
}