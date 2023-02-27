import { FC } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { TemporaryDrawer } from "../Drawer/Drawer";
import { useAppSelector } from "../../lib/hooks/useAppSelector";
import { useAppDispatch } from "../../lib/hooks/useAppDispatch";
import { userSlice } from "../../lib/store/reducers/UserSlice";

import "./style.css";

export const Header: FC = () => {
  const { isAuthorized } = useAppSelector((state) => state.userReducer);
  const { logout } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="main-box">
          <TemporaryDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("global.header.title")}
          </Typography>

          <ButtonGroup
            variant="contained"
            color="success"
            aria-label="outlined button group"
          >
            <Button onClick={() => changeLanguage("en")}>
              {t("global.header.enButton")}
            </Button>
            <Button onClick={() => changeLanguage("ua")}>
              {t("global.header.uaButton")}
            </Button>
          </ButtonGroup>
          {isAuthorized ? (
            <Button onClick={() => dispatch(logout())} color="inherit">
              {t("global.header.buttonLogout")}
            </Button>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
