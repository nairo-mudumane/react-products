import { Button } from "@mui/material";
import QuantityHandler from "./quantity-handler";
import { useAuth, useCart } from "../../hooks";
import { ICartBtnAddItem } from "./@types";
import React from "react";
import { ModalLogin } from "..";

export function CartBtnAddItem({ productId }: ICartBtnAddItem) {
  const { add, remove, cart } = useCart();
  const { user } = useAuth();

  const [quantity, setQuantity] = React.useState<number>(0);
  const [isInCart, setIsInCart] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  function onQuantityChange(newQuantity: number) {
    setQuantity(newQuantity);
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function addToCart() {
    if (!user) toggleModal();
    else if (quantity === 0) {
      setQuantity(1);
      add(productId, 1);
    } else add(productId, quantity);
  }

  function removeFromCart() {
    remove(productId);
  }

  React.useEffect(() => {
    // if (cart && cart.products)
    //   for (const cartProduct of cart.products) {
    //     if (cartProduct.id === productId) setIsInCart(true);
    //   }
  }, [productId, cart]);

  return (
    <>
      <div className="w-full flex gap-2 items-center justify-between text-sm">
        <QuantityHandler
          productId={productId}
          onQuantityChange={onQuantityChange}
        />

        <Button
          onClick={isInCart ? removeFromCart : addToCart}
          size="small"
          variant={isInCart ? "outlined" : "contained"}
        >
          {isInCart ? "remove from cart" : "Add to cart"}
        </Button>
      </div>

      <ModalLogin open={isModalOpen} onClose={toggleModal} />
    </>
  );
}
