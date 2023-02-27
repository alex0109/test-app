import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { isAuthorized } = useAppSelector((state) => state.userReducer);

  if (!isAuthorized) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
