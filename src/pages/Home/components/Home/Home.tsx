import "@/shared/config/i18n";
import { FC } from "react";

import { Banner } from "@/shared/components/Banner/Banner";
import { useTranslation } from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Banner title={t("home.title")} icon={<HomeIcon />} />
    </>
  );
};
