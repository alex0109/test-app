import Header from "./shared/components/Header/Header";
import { AppRouter } from "./shared/lib/router/AppRouter";

export const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};
