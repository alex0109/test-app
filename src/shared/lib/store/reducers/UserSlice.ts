import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const isAuthorized =
  localStorage.getItem("isAuthorized") !== null
    ? JSON.parse(localStorage.getItem("isAuthorized") as string)
    : false;

interface UserState {
  username: string;
  password: string;
  isAuthorized: boolean;
  error: boolean;
}

const initialState: UserState = {
  username: "",
  password: "",
  isAuthorized: isAuthorized,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      if (
        action.payload.username === "admin" &&
        action.payload.password === "12345"
      ) {
        state.username = action.payload.username;
        state.password = action.payload.password;
        state.isAuthorized = true;

        localStorage.setItem("isAuthorized", "true");
      } else {
        state.isAuthorized = false;
        state.error = true;
      }
    },
    logout(state) {
      state.isAuthorized = false;
      state.error = false;

      localStorage.setItem("isAuthorized", "false");
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
