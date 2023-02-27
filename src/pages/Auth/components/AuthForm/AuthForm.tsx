import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { userSlice } from "@/shared/lib/store/reducers/UserSlice";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

import "../../styles/style.css";
import "@/shared/assets/colors.css";

import { useTranslation } from "react-i18next";

export const AuthForm: FC = () => {
  const state = useAppSelector((state) => state.userReducer);
  const { login } = userSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const loginHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };
    dispatch(
      login({
        username: target.username.value,
        password: target.password.value,
      })
    );
  };

  useEffect(() => {
    if (state.isAuthorized) {
      navigate("/");
    }
  }, [state, navigate]);

  return (
    <Container maxWidth="lg" className="auth-container">
      <Box
        component="form"
        onSubmit={loginHandler}
        className="auth-form"
        sx={{
          "& .MuiTextField-root": { mb: 3, width: "25ch" },
        }}
      >
        <TextField
          required
          id="outlined-required"
          label={t("auth.username")}
          name="username"
        />
        <TextField
          required
          id="outlined-password-input"
          label={t("auth.password")}
          type="password"
          name="password"
          autoComplete="current-password"
          className="auth-button"
        />
        {state.error ? (
          <Typography mb={3} color="crimson">
            {t("auth.error")}
          </Typography>
        ) : (
          <></>
        )}
        <Button type="submit" variant="outlined" color="success">
          {t("auth.button")}
        </Button>
      </Box>
    </Container>
  );
};
