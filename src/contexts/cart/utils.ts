import { ICart } from "../../@types";
import helpers from "../../helpers";

export function getLocalCartData(): ICart | null {
  let cart: ICart | null = null;
  const strLocalCart = helpers.storage.get("_u");
  if (strLocalCart) cart = JSON.parse(strLocalCart) as ICart;

  return cart;
}
