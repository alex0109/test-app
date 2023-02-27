import { Route, Routes } from "react-router-dom";

import { Home } from "@/pages/Home/index";
import { PostList } from "@/pages/News/index";
import { Profile } from "@/pages/Profile/index";
import { AuthForm } from "@/pages/Auth/index";

import { RequireAuth } from "../hoc/RequireAuth";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<PostList />} />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="/auth" element={<AuthForm />} />
    </Routes>
  );
};
