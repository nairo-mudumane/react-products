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

  const [cart] = React.useState<ICart | null>(defaultCart);
  const [cartProducts, setCartProducts] = React.useState<ICartProduct[]>(
    defaultCart?.products ?? []
  );
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  function clear() {}

  async function remove(productId: number) {
    console.log("productId: ", productId);
  }

  async function add(productId: number, quantity: number) {
    try {
      // let updatedCart = cartProducts;

      let product = cartProducts.find((item) => item.id === productId) ?? null;
      if (!product) product = await services.products.getById(productId);

      if (!product) throw new Error("Failed to add product to cart");

      const updatedItemIndex = cartProducts.findIndex(
        (item) => item.id === productId
      );

      if (updatedItemIndex < 0) {
        if (cartProducts.length > 0) {
          const updatedItem = {
            ...cartProducts[updatedItemIndex],
            quantityInCart: quantity,
          };
          setCartProducts((prev) => [...prev, updatedItem]);
          // cartProducts[updatedItemIndex] = updatedItem;
          // } else cartProducts.push({ ...product!, quantityInCart: quantity });
          // } else cartProducts.push({ ...product!, quantityInCart: quantity });
        }
      } else
        setCartProducts((prev) => [
          ...prev,
          { ...product!, quantityInCart: quantity },
        ]);

      // setCartProducts(cartProducts);

      // setCart({ products: updatedCart });
    } catch (error) {
      setError((error as Error).message);
    }
  }

  React.useEffect(() => {
    console.log("cartProducts: ", cartProducts);
  }, [cartProducts]);

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
