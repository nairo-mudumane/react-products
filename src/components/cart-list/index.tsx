import React from "react";
import { Drawer } from "@mui/material";

export function CartList() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(true);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      <button>close</button>
      <div>drawer body</div>
    </Drawer>
  );
}
