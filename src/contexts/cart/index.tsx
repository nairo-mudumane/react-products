import React from "react";
import { ICartContext } from "./@types";
import { ICart, ICartProduct } from "../../@types";
import services from "../../services";
import { getLocalCartData } from "./utils";

export const CartContext = React.createContext<ICartContext>(
  {} as ICartContext
);

export function CartContextProvider(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const defaultCart = getLocalCartData();

  const [cart, setCart] = React.useState<ICart | null>(defaultCart);
  const [cartProducts, setCartProducts] = React.useState<ICartProduct[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  function clear() {}

  async function remove(productId: number) {}

  async function add(productId: number, quantity: number) {
    // let finalCartData: ICart = { user } as ICart;
    // try {
    //   // push product to products array
    //   if (cartProducts.length > 0) {
    //     let existingProduct =
    //       cartProducts.find((item) => item.id === productId) ?? null;
    //     if (existingProduct)
    //       existingProduct = { ...existingProduct, quantityInCart: quantity };
    //     else {
    //       const product = await services.products.getById(productId);
    //       if (!product) throw new Error("Failed to add product to cart");
    //       else existingProduct = { ...product, quantityInCart: quantity };
    //     }
    //     finalCartData = {
    //       ...finalCartData,
    //       products: [...cartProducts, existingProduct!],
    //     };
    //   } else {
    //     const product = await services.products.getById(productId);
    //     if (!product) throw new Error("Failed to add product to cart");
    //     else
    //       finalCartData = {
    //         ...finalCartData,
    //         products: [{ ...product, quantityInCart: quantity }],
    //       };
    //   }
    //   // end push product to products array
    // } catch (error) {
    //   setError((error as Error).message);
    // }
    // setCart(finalCartData);
  }

  return (
    <CartContext.Provider
      value={{
        loading,
        error,
        setLoading,
        cart,
        add,
        clear,
        remove,
        isMenuOpen,
        toggleMenu,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
