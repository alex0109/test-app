import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface DrawerItemProps {
  route: string;
  name: string;
  icon: ReactNode;
}

export const DrawerItem: FC<DrawerItemProps> = ({ route, name, icon }) => {
  return (
    <Link to={route}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
