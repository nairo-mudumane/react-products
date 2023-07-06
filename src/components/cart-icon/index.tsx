import React from "react";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { StyledBadge } from "./styles";

export default function CartIcon() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <IconButton color="inherit" onClick={toggleDrawer}>
      <StyledBadge badgeContent={4}>
        <ShoppingCart color="inherit" />
      </StyledBadge>
    </IconButton>
  );
}
