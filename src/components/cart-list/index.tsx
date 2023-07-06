import { Drawer } from "@mui/material";
import { useCart } from "../../hooks";

export function CartList() {
  const { isMenuOpen, toggleMenu } = useCart();

  return (
    <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
      <button>close</button>
      <div>drawer body</div>
    </Drawer>
  );
}
