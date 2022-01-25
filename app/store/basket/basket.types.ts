interface Items {
  id: number;
  qty: number;
  title: string;
  color: string;
  imageUrl: string;
  price: number;
  totalPrice: number;
}

export interface Basket {
  total: number;
  items: Items[];
}
