export type IQuantityHandlerProps = {
  productId: number;
  onQuantityChange: (quantity: number) => void;
};

export type ICartBtnAddItem = Pick<IQuantityHandlerProps, "productId">;
