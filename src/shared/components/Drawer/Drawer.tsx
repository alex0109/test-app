import { FC, useState } from "react";
import { Drawer, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { DrawerList } from "./DrawerList";

export const TemporaryDrawer: FC = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setToggle(open);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={toggle} onClose={toggleDrawer(false)}>
        <DrawerList setToggle={setToggle} />
      </Drawer>
    </>
  );
};
