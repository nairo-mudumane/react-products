import { IProduct, IUser } from ".";

export interface ICartProduct extends IProduct {
  quantityInCart?: number;
}

export type ICart = {
  user: IUser | null;
  products: Array<ICartProduct>;
  total: number;
  totalQuantity: number;
  discountedTotal: number;
  totalProducts: number;
};

export type INewCart = {
  user: IUser;
  products: Array<{ id: number; quantity: number }>;
};
