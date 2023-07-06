import { IProduct } from ".";

export type ICart = {
  products: Array<IProduct>;
  id: number;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type INewCart = {
  userId: number;
  products: Array<{ id: number; quantity: number }>;
};
