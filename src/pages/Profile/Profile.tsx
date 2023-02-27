import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Banner } from "@/shared/components/Banner/Banner";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const Profile: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Banner title={t("profile.title")} icon={<AccountBoxIcon />} />
    </>
  );
};
