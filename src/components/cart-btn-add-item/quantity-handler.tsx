import React from "react";
import { IQuantityHandlerProps } from "./@types";
import { Add, Remove } from "@mui/icons-material";
import { StyledIconButton } from "./styles";
import { useCart } from "../../hooks";

export default function QuantityHandler({
  productId,
  onQuantityChange,
}: IQuantityHandlerProps) {
  const { cart } = useCart();

  const [number, setNumber] = React.useState<number>(0);

  const increment = () => setNumber((prev) => prev + 1);

  const decrement = () => {
    if (number >= 1) setNumber((prev) => prev - 1);
  };

  React.useEffect(() => {
    onQuantityChange(number);
  }, [number]);

  React.useEffect(() => {
    // if (cart) {
    //   for (const cartProduct of cart.products) {
    //     if (cartProduct.id === productId) setNumber(cartProduct.quantityInCart);
    //   }
    // }
  }, [productId, cart]);

  return (
    <div className="border-white border-t border-b rounded-3xl text-sm flex gap-1 items-center justify-between">
      <StyledIconButton size="small" onClick={decrement}>
        <Remove fontSize="inherit" />
      </StyledIconButton>

      <span className="font-bold">{number}</span>

      <StyledIconButton size="small" onClick={increment}>
        <Add fontSize="inherit" />
      </StyledIconButton>
    </div>
  );
}
