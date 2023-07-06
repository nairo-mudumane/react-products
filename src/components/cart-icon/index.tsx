import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { StyledBadge } from "./styles";
import { useCart } from "../../hooks";

export default function CartIcon() {
  const { cart, toggleMenu } = useCart();
  const total = cart?.total || 0;

  return (
    <IconButton color="inherit" onClick={toggleMenu}>
      <StyledBadge badgeContent={total}>
        <ShoppingCart color="inherit" />
      </StyledBadge>
    </IconButton>
  );
}
