import { IProduct } from "../../@types";

export type ICardProductProps = {
  product: IProduct;
  link?: string;
  hideTitle?: boolean;
  clampDescription?: boolean;
};
