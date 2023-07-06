import { ICart } from "../../@types";

export type ICartContext = {
  cart: Partial<ICart> | null;
  loading: boolean;
  isMenuOpen: boolean;
  error: string | null;
  setLoading: (state: boolean) => void;
  toggleMenu: () => void;
  clear: () => void;
  add: (productId: number, quantity: number) => Promise<void>;
  remove: (id: number) => Promise<void>;
};
