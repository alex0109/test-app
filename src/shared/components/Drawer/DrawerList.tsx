import { FC } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { userSlice } from "@/shared/lib/store/reducers/UserSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { DrawerItem } from "./DrawerItem";

interface DrawerListProps {
  setToggle: (arg0: boolean) => void;
}

export const DrawerList: FC<DrawerListProps> = ({ setToggle }) => {
  const { isAuthorized } = useAppSelector((state) => state.userReducer);
  const { logout } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const toggleDrawer = (open: boolean) => () => {
    setToggle(open);
  };
  return (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      width={350}
    >
      <List>
        <DrawerItem
          route={"/"}
          name={t("global.drawer.home")}
          icon={<HomeIcon />}
        />
        <DrawerItem
          route={"/news"}
          name={t("global.drawer.news")}
          icon={<NewspaperIcon />}
        />
        {!isAuthorized ? (
          <></>
        ) : (
          <DrawerItem
            route={"/profile"}
            name={t("global.drawer.profile")}
            icon={<AccountBoxIcon />}
          />
        )}
      </List>
      <Divider />
      <List>
        {isAuthorized ? (
          <ListItem disablePadding>
            <ListItemButton onClick={() => dispatch(logout())}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={t("global.drawer.logout")} />
            </ListItemButton>
          </ListItem>
        ) : (
          <Link to="/auth">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={t("global.drawer.login")} />
              </ListItemButton>
            </ListItem>
          </Link>
        )}
      </List>
    </Box>
  );
};
