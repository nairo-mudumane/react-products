import React from "react";
import { CartContext } from "../contexts";

export function useCart() {
  const context = React.useContext(CartContext);
  return context;
}
